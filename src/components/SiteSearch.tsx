import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { searchEntries, searchTypeOrder, type SearchEntry } from '@/lib/searchIndex';

const PER_GROUP = 6;

export default function SiteSearch({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const groups = useMemo(() => {
    const found = searchEntries(query);
    return searchTypeOrder
      .map((type) => ({ type, items: found.filter((e) => e.type === type).slice(0, PER_GROUP) }))
      .filter((g) => g.items.length > 0);
  }, [query]);

  const go = (e: SearchEntry) => {
    onOpenChange(false);
    setQuery('');
    navigate(e.href);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) setQuery('');
        onOpenChange(next);
      }}
    >
      <DialogContent
        showCloseButton={false}
        className="top-[10%] translate-y-0 gap-0 overflow-hidden p-0 motion-reduce:animate-none sm:max-w-xl"
      >
        <DialogTitle className="sr-only">Search the site</DialogTitle>
        <DialogDescription className="sr-only">
          Type to find pages, news, projects, places to visit, services and community spaces. Use the
          arrow keys and Enter to open a result, or Escape to close.
        </DialogDescription>
        <Command shouldFilter={false} label="Search the site">
          <CommandInput
            value={query}
            onValueChange={setQuery}
            placeholder="Search pages, news, projects, places…"
            autoComplete="off"
          />
          <CommandList>
            <CommandEmpty>
              No results for “{query.trim()}”. Try a shorter word, or clear the search to browse the pages.
            </CommandEmpty>
            {groups.map(({ type, items }) => (
              <CommandGroup key={type} heading={type}>
                {items.map((e) => (
                  <CommandItem key={e.id} value={e.id} onSelect={() => go(e)}>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-medium">{e.title}</span>
                      {e.subtitle && (
                        <span className="block truncate text-xs text-ink-soft">{e.subtitle}</span>
                      )}
                    </span>
                    <span className="shrink-0 rounded-full bg-limestone px-2 py-0.5 text-[0.6875rem] text-ink-soft">
                      {e.type}
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}

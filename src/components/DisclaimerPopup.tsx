import { Info } from 'lucide-react';
import { Button } from './ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from './ui/dialog';

/**
 * Full disclaimer, shown on the first visit. Any way of closing it
 * (button, close icon, Escape, overlay click) counts as dismissing it.
 *
 * Layout lazy-loads this module only when the dialog is needed, so the Radix
 * Dialog stays out of the entry chunk. The return-visit banner lives in Layout.
 */
const DisclaimerPopup = ({
    open,
    onDismiss,
}: {
    open: boolean;
    onDismiss: () => void;
}) => {
    return (
        <Dialog open={open} onOpenChange={(next) => { if (!next) onDismiss(); }}>
            <DialogContent className="max-w-lg sm:max-w-lg p-0 gap-0 bg-white border-limestone rounded-lg shadow-2xl shadow-ink/30 overflow-hidden">
                <div className="h-16 bg-ink wall-of-scripts border-b-4 border-tram flex items-center justify-center">
                    <Info className="w-7 h-7 text-tram" aria-hidden="true" />
                </div>

                <div className="p-6 sm:p-8 sm:pt-6">
                    <DialogTitle className="font-display text-3xl sm:text-4xl font-semibold text-ink text-center mb-4 leading-tight">
                        Unofficial fan site
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                        What this site is and how its content is checked.
                    </DialogDescription>
                    <ul className="space-y-3 text-ink/80 leading-relaxed">
                        <li>
                            <span className="font-semibold text-ink">Not affiliated</span> with the Alexandria Governorate or any government body.
                        </li>
                        <li>
                            <span className="font-semibold text-ink">Headline figures show their source</span> and the date they were last checked.
                        </li>
                        <li>
                            <span className="font-semibold text-ink">AI helps with research;</span> a person reviews every change before it is published.
                        </li>
                    </ul>

                    <div className="mt-6">
                        <Button
                            onClick={onDismiss}
                            className="w-full bg-sea hover:bg-sea-deep text-white font-semibold py-5 rounded-md transition-colors"
                        >
                            I understand
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DisclaimerPopup;

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
                {/* Header/Banner */}
                <div className="h-28 bg-ink wall-of-scripts border-b-4 border-tram flex items-center justify-center">
                    <Info className="w-9 h-9 text-tram" aria-hidden="true" />
                </div>

                <div className="p-8 pt-6">
                    <DialogTitle className="font-display text-4xl font-semibold text-ink text-center mb-4 leading-tight">
                        Unofficial fan site
                    </DialogTitle>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <DialogDescription className="text-base">
                            This site is <span className="font-semibold text-foreground">not an official site</span> for the City of Alexandria.
                        </DialogDescription>
                        <p>
                            This project is a <span className="italic">passion project</span> created by a developer who loves the city of Alexandria.
                            It's designed to celebrate the city's historical importance, cultural richness, and modern potential.
                        </p>
                        <div className="p-4 bg-papyrus border-l-4 border-gold rounded-r-md italic text-sm text-ink">
                            <p className="mb-0">
                                <span className="font-semibold text-ink not-italic">Note:</span> Some content on this site is generated and researched using deep-search AI technologies to provide comprehensive information.
                            </p>
                        </div>
                        <p>
                            While not official, it's crafted with care and dedication to honor Alexandria's legacy and help showcase what makes this ancient city so special.
                        </p>
                    </div>

                    <div className="mt-8">
                        <Button
                            onClick={onDismiss}
                            className="w-full bg-sea hover:bg-sea-deep text-white font-semibold py-6 rounded-md transition-colors"
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

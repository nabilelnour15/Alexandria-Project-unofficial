import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info, Heart } from 'lucide-react';
import { Button } from './ui/button';

const DisclaimerPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header/Banner */}
                        <div className="h-32 bg-primary/10 flex items-center justify-center relative">
                            <div className="absolute top-4 right-4">
                                <button
                                    onClick={handleClose}
                                    className="p-1 rounded-full hover:bg-black/5 transition-colors"
                                >
                                    <X className="w-5 h-5 text-muted-foreground" />
                                </button>
                            </div>
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                                <Info className="w-8 h-8 text-primary" />
                            </div>
                        </div>

                        <div className="p-8 pt-6">
                            <h2 className="text-2xl font-bold text-center mb-4">Official Disclaimer</h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    This site is <span className="font-semibold text-foreground">not an Official Site</span> for the City of Alexandria.
                                </p>
                                <p>
                                    This project is a <span className="italic">passion project</span> created by a developer who loves the city of Alexandria.
                                    It's designed to celebrate the city's historical importance, cultural richness, and modern potential.
                                </p>
                                <div className="p-4 bg-primary/5 border-l-4 border-primary/30 rounded-r-lg italic text-sm">
                                    <p className="mb-0">
                                        <span className="font-semibold text-primary not-italic">Note:</span> Some content on this site is generated and researched using deep-search AI technologies to provide comprehensive information.
                                    </p>
                                </div>
                                <p>
                                    While not official, it's crafted with care and dedication to honor Alexandria's legacy and help showcase what makes this ancient city so special.
                                </p>
                            </div>

                            <div className="mt-8 flex flex-col gap-3">
                                <Button
                                    onClick={handleClose}
                                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl transition-all hover:scale-[1.02]"
                                >
                                    I Understand
                                </Button>
                                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                                    <span>Made with</span>
                                    <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                                    <span>for Alexandria</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default DisclaimerPopup;

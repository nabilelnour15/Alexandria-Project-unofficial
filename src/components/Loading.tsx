import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
            <div className="flex flex-col items-center gap-4">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
                />
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-semibold text-primary tracking-widest uppercase"
                >
                    Alexandria
                </motion.h2>
            </div>
        </motion.div>
    );
};

export default Loading;

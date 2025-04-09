'use client';


import { AnimatePresence, motion } from 'framer-motion';
import { useApiLoaderStore } from '../lib/stores/apiLoaderStore';

export function ApiLoadingOverlay() {
  const loadingCount = useApiLoaderStore((state) => state.loadingCount);
  const isLoading = loadingCount > 0;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed loader inset-0 z-[1000] flex items-center justify-center"
        >
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

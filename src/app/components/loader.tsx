'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ErrorStateTypes, useApiLoaderStore } from '../lib/stores/apiLoaderStore';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useUser } from '../context/user.context';

export function ApiLoadingOverlay() {
  const loadingCount = useApiLoaderStore((state) => state.loadingCount);
  const errorType = useApiLoaderStore((state) => state.errorState);
  const errorMessage = useApiLoaderStore((state) => state.errMessage);
  const clearError = useApiLoaderStore((state) => state.error);
  const isLoading = loadingCount > 0;
  const router = useRouter();
  const { setUser } = useUser();

  switch (errorType) {
    case ErrorStateTypes.Login:
      if (errorMessage) {
        toast(errorMessage);
      }
      router.push('/');
      setUser(null);
      clearError(ErrorStateTypes.NoError);
      break;
    case ErrorStateTypes.Other:
      if (errorMessage) {
        toast(errorMessage);
      }
      clearError(ErrorStateTypes.NoError);
      break;

    default:
      break;
  }

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

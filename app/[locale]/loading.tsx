'use client';

import { AnimatePresence, motion } from 'framer-motion';

export default function Loading() {
  return (
    <AnimatePresence>
      <motion.div
        className='fixed inset-0 z-50 flex items-center justify-center bg-black text-center font-title text-responsive-2xl text-white'
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 2,
        }}
      >
        Loading
      </motion.div>
    </AnimatePresence>
  );
}

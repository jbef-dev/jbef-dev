'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useLoadingCtx } from './LoadingCtx';
import { customTransitions } from '@/ui/animation';
import clsx from 'clsx';
import * as React from 'react';

export function LoadingSections() {
  const { isLoading, progress } = useLoadingCtx();

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    !isLoading && setTimeout(() => setOpen(true), 1000);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {!open ? (
        <motion.div className='fixed inset-0 z-[60] flex' exit='exit'>
          {[...new Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className={clsx(
                'flex h-full w-full items-center overflow-hidden bg-black',
                i === 0 ? 'justify-end text-right' : 'justify-start text-left'
              )}
              variants={{ exit: { x: i === 0 ? '-100%' : '100%' } }}
              transition={customTransitions.easeOutSlow}
            >
              <div
                className={clsx(
                  'w-min font-title text-responsive-2xl text-white',
                  i === 0 ? 'translate-x-1/2' : '-translate-x-1/2'
                )}
              >
                {/* <span>{progress}%</span> */}
                <span>Loading...</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

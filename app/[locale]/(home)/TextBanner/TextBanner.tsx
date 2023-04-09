'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import * as React from 'react';

interface TextBannerProps extends React.ComponentPropsWithoutRef<'div'> {
  repeat?: number;
  duration?: number;
  direction?: 'ltr' | 'rtl';
}

const TextBanner = React.forwardRef<HTMLDivElement, TextBannerProps>(
  (
    {
      className,
      children,
      repeat = 3,
      direction = 'ltr',
      duration = 16,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <div
        ref={forwardedRef}
        className={clsx('flex items-center justify-center', className)}
        {...props}
      >
        {[...new Array(repeat)].map((_, i) => (
          <motion.div
            key={i + 'banner'}
            animate={{
              x: ['0%', direction === 'ltr' ? '100%' : '-100%'],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: duration,
              ease: 'linear',
            }}
          >
            {children}
          </motion.div>
        ))}
      </div>
    );
  }
);

TextBanner.displayName = 'TextBanner';

export { TextBanner };

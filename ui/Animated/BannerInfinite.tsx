'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import * as React from 'react';

interface BannerProps extends React.ComponentPropsWithoutRef<'div'> {
  repeat?: number;
  duration?: number;
  direction?: 'ltr' | 'rtl';
}

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      className,
      children,
      repeat = 3,
      direction = 'ltr',
      duration = 18,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <div
        ref={forwardedRef}
        className={clsx(
          'flex items-center',
          direction === 'ltr' ? 'justify-end' : 'justify-start',
          className
        )}
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

Banner.displayName = 'Banner';

export { Banner as Banner };

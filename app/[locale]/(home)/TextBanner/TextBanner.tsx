'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { ComponentPropsWithoutRef } from 'react';

const TextBanner = ({
  className,
  children,
  repeat = 3,
  durationPerElement = 8,
  ...props
}: ComponentPropsWithoutRef<'div'> & {
  repeat?: number;
  durationPerElement?: number;
}) => {
  return (
    <div
      className={clsx('flex items-center justify-center', className)}
      {...props}
    >
      {[...new Array(repeat)].map((_, i) => (
        <motion.span
          key={i + 'banner'}
          className='text-responsive-hero text-black/50 whitespace-nowrap leading-none'
          animate={{
            x: ['0%', '100%'],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: durationPerElement * repeat,
            ease: 'linear',
          }}
        >
          {children}
        </motion.span>
      ))}
    </div>
  );
};

export { TextBanner };

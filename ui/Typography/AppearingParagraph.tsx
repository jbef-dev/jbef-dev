'use client';

import { useRef } from 'react';
import { HTMLMotionProps, motion, useInView, Variants } from 'framer-motion';
import { myAnimation } from '@/styles/customAnimations';
import clsx from 'clsx';

export const AppearingSpan = ({
  children,
  className,
  ...props
}: HTMLMotionProps<'span'>) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const isVisible = useInView(spanRef, { once: true, amount: 0.6 });

  const spanVariants: Variants = {
    initial: {
      y: '120%',
      transition: myAnimation.transition.easeOut,
    },
    animate: {
      y: 0,
      transition: {
        delay: myAnimation.values.duration.fastest,
        ...myAnimation.transition.easeOut,
      },
    },
  };

  return (
    <motion.span
      ref={spanRef}
      className={clsx('flex overflow-hidden', className)}
      {...props}
    >
      <motion.span
        className='flex'
        animate={isVisible ? 'animate' : 'initial'}
        variants={spanVariants}
      >
        {children}
      </motion.span>
    </motion.span>
  );
};

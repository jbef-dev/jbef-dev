'use client';

import { forwardRef } from 'react';
import { HTMLMotionProps, motion, useInView } from 'framer-motion';
import clsx from 'clsx';
import useForwardedRef from '@/hooks/useForwardedRef';
import { customTransitions, customVariants } from '../animation';

const AOSText = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(
  ({ children, className, ...props }, ref) => {
    const spanRef = useForwardedRef(ref);
    const isVisible = useInView(spanRef, { once: true, amount: 0.6 });

    return (
      <motion.div
        ref={spanRef}
        className={clsx('flex', className)}
        initial='initial'
        animate={isVisible ? 'animate' : 'initial'}
        variants={customVariants.appear3d}
        transition={customTransitions.easeOutSlow}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

export { AOSText };

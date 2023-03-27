'use client';

import { forwardRef } from 'react';
import { HTMLMotionProps, motion, useInView } from 'framer-motion';
import { myAnimation } from '@/styles/customAnimations';
import clsx from 'clsx';
import useForwardedRef from '@/hooks/useForwardedRef';

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
        variants={myAnimation.variants.appear3d}
        transition={myAnimation.transition.easeOutSlow}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

export default AOSText;

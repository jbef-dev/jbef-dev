'use client';

import * as React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { customTransitions, customVariants } from '../animation';

const MotionComponent = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'>
>(
  (
    {
      children,
      initial = 'initial',
      animate = 'animate',
      exit = 'exit',
      variants = customVariants.appearFromBottom,
      transition = customTransitions.default,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <motion.div
        ref={forwardedRef}
        initial={initial}
        animate={animate}
        exit={exit}
        variants={variants}
        transition={transition}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
MotionComponent.displayName = 'MotionComponent';

export { MotionComponent };

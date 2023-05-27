'use client';

import { HTMLMotionProps, motion } from 'framer-motion';
import { Slot } from '@/ui/Slot';
import * as React from 'react';

interface MotionComponentProps extends HTMLMotionProps<'div'> {
  asChild?: boolean;
}

const ComposedMotionComponent = React.forwardRef<HTMLDivElement, MotionComponentProps>(
  ({ asChild = false, children, ...props }, forwardedRef) => {
    const Comp = asChild ? Slot : 'div';

    const MotionComp = motion(Comp);

    return (
      <MotionComp ref={forwardedRef} {...props}>
        {children}
      </MotionComp>
    );
  }
);
ComposedMotionComponent.displayName = 'ComposedMotionComponent';

export default ComposedMotionComponent;

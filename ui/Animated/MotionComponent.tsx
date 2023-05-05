'use client';

import { HTMLMotionProps, motion } from 'framer-motion';
import { Slot } from '@/ui/Slot';
import * as React from 'react';

interface MotionComponentProps extends HTMLMotionProps<'div'> {
  asChild?: boolean;
}

const MotionComponent = React.forwardRef<HTMLDivElement, MotionComponentProps>(
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
MotionComponent.displayName = 'MotionComponent';

export default MotionComponent;

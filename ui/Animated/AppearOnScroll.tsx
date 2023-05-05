'use client';

import * as React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { customTransitions, customVariants } from '@/ui/animation';

import { Slot } from '@/ui/Slot';
import MotionComponent from './MotionComponent';

const AppearOnScroll = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'> & {
    asChild?: boolean;
    visibleRef?: React.RefObject<any>;
    amount?: number;
    once?: boolean;
  }
>(
  (
    {
      asChild = false,
      visibleRef = undefined,
      amount = 0.65,
      once = true,
      children,
      // variants = customVariants.fromBottom,
      variants = customVariants.appearFromBottom,
      transition = customTransitions.default,
      ...props
    },
    forwardedRef
  ) => {
    const Comp = asChild ? Slot : 'div';

    const MotionComp = motion(Comp);

    return (
      <MotionComp
        ref={forwardedRef}
        initial='initial'
        whileInView='animate'
        variants={variants}
        transition={transition}
        viewport={{ root: visibleRef, once: once, amount: amount }}
        {...props}
      >
        {children}
      </MotionComp>
    );
  }
);
AppearOnScroll.displayName = 'AppearOnScroll';

const AppearOnScrollChild = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'> & {
    asChild?: boolean;
  }
>(
  (
    {
      asChild = false,
      // variants = customVariants.fromBottom,
      variants = customVariants.appearFromBottom,
      transition = customTransitions.default,
      children,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <MotionComponent
        ref={forwardedRef}
        asChild={asChild}
        variants={variants}
        transition={transition}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }
);
AppearOnScrollChild.displayName = 'AppearOnScrollChild';

export { AppearOnScroll, AppearOnScrollChild };

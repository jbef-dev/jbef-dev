'use client';

import * as React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { myAnimation } from '@/styles/customAnimations';

import { Slot } from '@/ui/Slot';

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
      visibleRef,
      amount = 0.65,
      once = true,
      children,
      variants = myAnimation.variants.fromBelow,
      transition = myAnimation.transition.default,
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

const AppearOnScrollChild = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'> & {
    asChild?: boolean;
  }
>(
  (
    {
      asChild,
      variants = myAnimation.variants.fromBelow,
      transition = myAnimation.transition.default,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const Comp = asChild ? Slot : 'div';

    const MotionComponent = motion(Comp);

    return (
      <MotionComponent
        ref={forwardedRef}
        variants={variants}
        transition={transition}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }
);

export { AppearOnScroll, AppearOnScrollChild };

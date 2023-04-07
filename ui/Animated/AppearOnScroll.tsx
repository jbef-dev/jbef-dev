'use client';

import { RefObject, forwardRef } from 'react';
import { HTMLMotionProps, motion, useInView } from 'framer-motion';
import { myAnimation } from '@/styles/customAnimations';
import useForwardedRef from '@/hooks/useForwardedRef';

import { Slot } from '@/ui/Slot';

const AppearOnScroll = forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'> & {
    asChild?: boolean;
    visibleRef?: RefObject<any>;
    amount?: number;
  }
>(
  (
    {
      asChild = false,
      visibleRef,
      amount = 0.65,
      children,
      variants = myAnimation.variants.fromBelow,
      transition = myAnimation.transition.default,
      ...props
    },
    forwardedRef
  ) => {
    const ref = useForwardedRef(forwardedRef);

    const isVisible = useInView(visibleRef || ref, {
      once: true,
      amount: amount,
    });

    const Comp = asChild ? Slot : 'div';

    const MotionComp = motion(Comp);

    return (
      <MotionComp
        ref={ref}
        initial='initial'
        animate={isVisible ? 'animate' : 'initial'}
        variants={variants}
        transition={transition}
        {...props}
      >
        {children}
      </MotionComp>
    );
  }
);

const AppearOnScrollChild = forwardRef<
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
    const ref = useForwardedRef(forwardedRef);

    const Comp = asChild ? Slot : 'div';

    const MotionComponent = motion(Comp);

    return (
      <MotionComponent
        ref={ref}
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

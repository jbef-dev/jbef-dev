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
      amount = 0.25,
      children,
      variants,
      transition,
      ...props
    },
    ref
  ) => {
    const containerRef = useForwardedRef(ref);
    const isVisible = useInView(visibleRef || containerRef, {
      once: true,
      amount: amount,
    });

    const Comp = asChild ? Slot : 'div';

    const MotionComp = motion(Comp);

    return (
      <MotionComp
        ref={containerRef}
        initial='initial'
        animate={isVisible ? 'animate' : 'initial'}
        variants={variants || myAnimation.variants.fromBelow}
        transition={
          transition || { type: 'spring', ...myAnimation.spring.default }
        }
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
      transition = myAnimation.transition.normal,
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

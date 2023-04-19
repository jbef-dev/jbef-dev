'use client';

import * as React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import clsx from 'clsx';
import { customTransitions, customVariants } from '../animation';

interface Props extends HTMLMotionProps<'span'> {
  amount?: number;
  once?: boolean;
  stagger?: number;
  defaultAnimate?: boolean;
  children: string;
}

const StaggerText = React.forwardRef<HTMLSpanElement, Props>(
  (
    {
      children,
      className,
      defaultAnimate = true,
      amount = 0.5,
      once = true,
      stagger = 0.06,
      initial = 'initial',
      animate,
      whileInView = 'animate',
      transition = {
        staggerChildren: stagger,
        staggerDirection: 1,
      },
      ...props
    },
    forwardedRef
  ) => {
    const customMotionProps = defaultAnimate
      ? {
          initial: initial,
          animate: animate,
          whileInView: whileInView,
        }
      : null;

    return (
      <motion.span
        ref={forwardedRef}
        className={clsx('flex flex-wrap', className)}
        {...customMotionProps}
        transition={transition}
        viewport={{ once: once, amount: amount }}
        {...props}
      >
        {children.split(' ').map((k, i) => (
          <div key={i} className='flex overflow-hidden'>
            <motion.span
              className='flex'
              variants={customVariants.fromBottom}
              // variants={customVariants.appear3d}
              transition={customTransitions.default}
            >
              {k}&nbsp;
            </motion.span>
          </div>
        ))}
      </motion.span>
    );
  }
);

export { StaggerText };

'use client';

import * as React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import clsx from 'clsx';
import { customTransitions, customVariants } from '../animation';

interface Props extends HTMLMotionProps<'span'> {
  amount?: number;
  once?: boolean;
  stagger?: number;
  children: string;
}

const StaggerText = React.forwardRef<HTMLSpanElement, Props>(
  (
    {
      children,
      className,
      amount = 0.5,
      once = true,
      stagger = 0.06,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <motion.span
        ref={forwardedRef}
        className={clsx('flex flex-wrap', className)}
        initial='initial'
        whileInView='animate'
        transition={{
          staggerChildren: stagger,
          staggerDirection: 1,
        }}
        viewport={{ once: once, amount: amount }}
        {...props}
      >
        {children.split(' ').map((k, i) => (
          <motion.span key={i} className='flex overflow-hidden'>
            <motion.span
              className='flex'
              variants={customVariants.fromBottom}
              transition={customTransitions.easeOut}
            >
              {k}&nbsp;
            </motion.span>
          </motion.span>
        ))}
      </motion.span>
    );
  }
);

export { StaggerText };

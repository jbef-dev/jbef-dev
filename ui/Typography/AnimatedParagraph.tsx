'use client';

import { useRef } from 'react';
import { HTMLMotionProps, motion, useInView } from 'framer-motion';
import { myAnimation } from '@/styles/customAnimations';
import clsx from 'clsx';

interface Props extends HTMLMotionProps<'p'> {
  children: string;
}

export const AnimatedParagraph = ({ children, className, ...props }: Props) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const isVisible = useInView(paragraphRef, { once: true, amount: 0.6 });

  return (
    <motion.p
      ref={paragraphRef}
      {...props}
      className={clsx('flex flex-wrap', className)}
      initial='initial'
      animate={isVisible ? 'animate' : 'initial'}
      transition={{
        delay: myAnimation.values.duration.fastest,
        staggerChildren: 0.02,
        staggerDirection: 1,
      }}
    >
      {children.split(' ').map((k, i) => (
        <motion.span key={i} className='flex overflow-hidden'>
          <motion.span
            className='flex'
            variants={myAnimation.variants.fromBelow}
            transition={{
              ...myAnimation.transition.easeOut,
            }}
          >
            {k}&nbsp;
          </motion.span>
        </motion.span>
      ))}
    </motion.p>
  );
};

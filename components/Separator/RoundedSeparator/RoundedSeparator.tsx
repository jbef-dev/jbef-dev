'use client';

import { myAnimation } from '@/styles/customAnimations';
import clsx from 'clsx';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SeparatorProps } from '../Separator';

export const RoundedSeparator = (props: SeparatorProps) => {
  const { flavor, position = 'top', className, ...rest } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: containerProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // const springOpts = {
  //   stiffness: myAnimation.values.stiffness.high,
  //   damping: myAnimation.values.damping.max,
  // };
  const springInput = useSpring(containerProgress, myAnimation.spring.default);
  const scaleY = useTransform(springInput, [0, 1], [1, 1.2]);
  const scaleX = useTransform(springInput, [0, 1], [1, 2.1]);

  return (
    <motion.div
      ref={containerRef}
      className={clsx([
        'absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-full h-[clamp(4rem,10vw,11rem)] -z-10',
        position === 'top'
          ? 'top-0 -translate-y-2/3'
          : 'bottom-0 -translate-y-2/3',
      ])}
    >
      <motion.div
        className={clsx([
          'absolute w-[130%] h-[320%]',
          position === 'top' ? 'top-0' : 'bottom-0',
          className,
        ])}
        style={{
          borderRadius: '100%',
          scaleY: scaleY,
          scaleX: scaleX,
        }}
        {...rest}
      ></motion.div>
    </motion.div>
  );
};

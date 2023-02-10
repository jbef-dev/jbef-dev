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
        'absolute overflow-hidden left-0 flex items-center justify-center w-full h-[clamp(5rem,10vw,12rem)]',
        position === 'top'
          ? 'top-0 -translate-y-full'
          : 'bottom-0 translate-y-full',
      ])}
    >
      <motion.div
        className={clsx([
          'absolute w-full aspect-square',
          position === 'top' ? 'top-0' : 'bottom-0',
          className,
        ])}
        style={{
          borderRadius: '50%',
          originX: '50%',
          originY: '0%',
          scaleY: scaleY,
          scaleX: scaleX,
        }}
        {...rest}
      ></motion.div>
    </motion.div>
  );
};

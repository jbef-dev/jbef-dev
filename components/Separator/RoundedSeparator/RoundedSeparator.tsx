'use client';

import { myAnimation } from '@/styles/customAnimations';
import clsx from 'clsx';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SeparatorProps } from '../Separator';

export const RoundedSeparator = ({
  flavor,
  position = 'top',
  className,
  ...props
}: SeparatorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: containerProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const springInput = useSpring(containerProgress, myAnimation.spring.default);
  const containerScaleY = useTransform(springInput, [0, 1], [1, 1.8]);

  const circleScaleX = useTransform(springInput, [0, 1], [1.2, 2.1]);

  return (
    <motion.div
      ref={containerRef}
      className={clsx([
        'absolute overflow-hidden left-0 flex items-center justify-center w-full h-[clamp(5rem,10vw,18rem)]',
        position === 'top' ? 'bottom-full' : 'top-full',
      ])}
      style={{
        originY: '100%',
        scaleY: containerScaleY,
      }}
    >
      <motion.div
        className={clsx([
          'absolute w-full h-[200%]',
          position === 'top' ? 'top-0' : 'bottom-0',
          className,
        ])}
        style={{
          borderRadius: '100% 100% 0 0',
          originX: '50%',
          originY: '0%',
          scaleX: circleScaleX,
        }}
        {...props}
      ></motion.div>
    </motion.div>
  );
};

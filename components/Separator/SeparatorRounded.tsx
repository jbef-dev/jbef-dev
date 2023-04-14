'use client';

import { HTMLMotionProps } from 'framer-motion';

import clsx from 'clsx';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { customSprings } from '@/ui/animation';

export interface SeparatorProps extends HTMLMotionProps<'div'> {
  position: 'top' | 'bottom';
}

const SeparatorRounded = ({
  position = 'top',
  className,
  ...props
}: SeparatorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: containerProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const springInput = useSpring(containerProgress, customSprings.default);
  const containerScaleY = useTransform(springInput, [0, 1], [1, 2.4]);
  const circleScaleX = useTransform(springInput, [0, 1], [1.2, 2.3]);

  return (
    <motion.div
      ref={containerRef}
      className={clsx([
        'absolute overflow-hidden left-0 flex items-center justify-center w-full h-[clamp(5rem,10vw,18rem)]',
        position === 'top' ? 'bottom-[99.9%]' : 'top-full',
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

export default SeparatorRounded;

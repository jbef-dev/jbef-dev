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

  const springOpts = {
    stiffness: myAnimation.values.stiffness.high,
    damping: myAnimation.values.damping.max,
  };
  const springInput = useSpring(containerProgress, springOpts);
  const roundedScale = useTransform(springInput, [0, 1], [1, 1.5]);

  return (
    <motion.div
      className={clsx([
        'absolute flex items-center justify-center w-full h-[clamp(6rem,15vw,12rem)] overflow-hidden',
        position === 'top'
          ? 'top-0 -translate-y-full'
          : 'bottom-0 translate-y-full',
      ])}
      ref={containerRef}
    >
      <motion.div
        className={clsx([
          'absolute w-[120%] h-[220%] origin-top',
          position === 'top' ? 'top-0' : 'bottom-0',
          className,
        ])}
        style={{
          borderRadius: '100%',
          scaleX: roundedScale,
        }}
        {...rest}
      ></motion.div>
    </motion.div>
  );
};

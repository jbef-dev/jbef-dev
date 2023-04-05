'use client';

import { myAnimation } from '@/styles/customAnimations';
import { AppearOnScroll } from '@/ui/Animated/AppearOnScroll';
import { AOSText } from '@/ui/Typography';
import clsx from 'clsx';
import {
  HTMLMotionProps,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ComponentPropsWithoutRef, useRef } from 'react';

interface Props extends HTMLMotionProps<'div'> {
  xStyle: number;
}

export const EvolveTitle = ({ xStyle, className, ...props }: Props) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ['start end', 'end start'],
  });
  const springInput = useSpring(scrollYProgress, myAnimation.spring.default);

  const spanX1 = useTransform(springInput, [0, 1], ['0em', '0.85em']);
  const spanX2 = useTransform(springInput, [0, 1], ['0em', '-0.4em']);
  const spanX3 = useTransform(springInput, [0, 1], ['0.3em', '-0.4em']);
  const spanX4 = useTransform(springInput, [0, 1], ['-0.3em', '0.7em']);

  const spanXStyles = [spanX1, spanX2, spanX3, spanX4];

  return (
    <motion.div
      ref={titleRef}
      className={clsx('overflow-hidden', className)}
      style={{ x: spanXStyles[xStyle] }}
      {...props}
    >
      <AppearOnScroll visibleRef={titleRef}>{props.children}</AppearOnScroll>
    </motion.div>
  );
};

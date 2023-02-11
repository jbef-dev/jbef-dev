'use client';

import { myAnimation } from '@/styles/customAnimations';
import {
  motion,
  SVGMotionProps,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

interface SVGIconProps extends SVGMotionProps<SVGSVGElement> {}

export const SVGIcon = ({ children, className, ...props }: SVGIconProps) => {
  const svgRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: svgRef,
    offset: ['start end', 'start end'],
  });

  const springInput = useSpring(scrollYProgress, myAnimation.spring.default);
  const moneyColor = useTransform(springInput, [0, 1], ['#00ffff', '#f000ff']);

  return (
    <motion.svg
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      className='w-6 lg:w-14 aspect-square'
      {...props}
      style={{
        stroke: moneyColor,
      }}
    >
      {children}
    </motion.svg>
  );
};

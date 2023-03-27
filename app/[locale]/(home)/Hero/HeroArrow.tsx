'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { myAnimation } from '@/styles/customAnimations';

const HeroArrow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end -200vh'],
  });

  const springStiff = useSpring(scrollYProgress, myAnimation.spring.fast);

  const arrowY = useTransform(springStiff, [0, 1], ['0rem', '-25rem']);

  return (
    <motion.div
      ref={containerRef}
      className='max-md:absolute max-md:bottom-4 h-full flex text-responsive-hero max-md:right-4 items-end'
    >
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.8}
        stroke='currentColor'
        className='h-[clamp(3.5rem,_13vw,_11.5rem)] aspect-square'
        style={{ y: arrowY }}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V5'
        />
      </motion.svg>
    </motion.div>
  );
};

export default HeroArrow;

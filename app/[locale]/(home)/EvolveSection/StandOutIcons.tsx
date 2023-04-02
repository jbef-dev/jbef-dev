'use client';

import { myAnimation } from '@/styles/customAnimations';
import clsx from 'clsx';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const StandOutIcons = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const springInput = useSpring(scrollYProgress, myAnimation.spring.default);
  const circlesX = useTransform(springInput, [0, 1], ['0%', '-20%']);

  return (
    <div ref={containerRef} className='w-full overflow-hidden'>
      <motion.div
        className='flex items-center justify-center min-w-max gap-3'
        style={{ x: circlesX }}
      >
        {[...new Array(8)].map((_, i) => (
          <motion.svg
            key={i}
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            className={clsx(
              'h-[clamp(3.5rem,9vw,20rem)] aspect-square',
              i === 4 ? 'fill-accent-main scale-125' : 'fill-neutral-600'
            )}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
            />
          </motion.svg>
        ))}
      </motion.div>
    </div>
  );
};

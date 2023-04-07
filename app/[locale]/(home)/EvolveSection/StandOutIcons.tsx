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
  const circlesX = useTransform(springInput, [0, 1], ['8%', '-8%']);

  return (
    <div ref={containerRef} className='w-full overflow-hidden'>
      <div className='flex relative items-center justify-center'>
        <motion.div
          className='w-full text-responsive-2xl min-w-max flex gap-2'
          style={{ x: circlesX }}
        >
          {[...new Array(8)].map((_, i) => (
            <motion.svg
              key={i}
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              className={clsx(
                'w-[1.6em] aspect-square',
                i === 4 ? 'fill-accent-main scale-[1.2]' : 'fill-neutral-600'
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

        <div className='absolute left-0 top-0 h-full w-[20%] bg-gradient-to-r from-black to-transparent'></div>
        <div className='absolute right-0 top-0 h-full w-[20%] bg-gradient-to-l from-black to-transparent'></div>
      </div>
    </div>
  );
};

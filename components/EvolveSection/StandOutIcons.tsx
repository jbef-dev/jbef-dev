'use client';

import { customSprings } from '@/ui/animation';
import clsx from 'clsx';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const StandOutIcons = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const springInput = useSpring(scrollYProgress, customSprings.default);
  const circlesX = useTransform(springInput, [0, 1], ['8%', '-8%']);

  return (
    <div ref={containerRef} className='w-full overflow-hidden'>
      <div className='relative flex items-center justify-center'>
        <motion.div
          className='flex w-full min-w-max gap-2 text-responsive-2xl'
          style={{ x: circlesX }}
        >
          {[...new Array(8)].map((_, i) => (
            <motion.svg
              key={i}
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              className={clsx(
                'aspect-square w-[1.6em]',
                i === 4 ? 'scale-[1.2] fill-primary' : 'fill-neutral-400'
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

        <div className='absolute left-0 top-0 h-full w-[20%] bg-gradient-to-r from-white to-transparent'></div>
        <div className='absolute right-0 top-0 h-full w-[20%] bg-gradient-to-l from-white to-transparent'></div>
      </div>
    </div>
  );
};

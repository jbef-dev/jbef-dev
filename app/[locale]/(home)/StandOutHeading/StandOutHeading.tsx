'use client';

import { myAnimation } from '@/styles/customAnimations';
import clsx from 'clsx';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AppearingSpan } from '@/ui/Typography/AppearingSpan';

export const StandOutHeading = () => {
  const dotContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: dotContainerRef,
    offset: ['start end', 'end start'],
  });
  const springInput = useSpring(scrollYProgress, myAnimation.spring.default);
  const circlesX = useTransform(springInput, [0, 1], ['0%', '-20%']);

  const spanX1 = useTransform(springInput, [0, 1], ['0%', '2%']);
  const spanX2 = useTransform(springInput, [0, 1], ['5%', '-5%']);
  const spanX3 = useTransform(springInput, [0, 1], ['0%', '-5%']);
  const spanX4 = useTransform(springInput, [0, 1], ['0%', '25%']);

  return (
    <>
      <div
        ref={dotContainerRef}
        className='flex flex-col w-full items-center text-responsive-2xl font-light leading-[1.1] font-title'
      >
        <h3 className='flex items-center justify-center flex-col w-full max-w-screen-xl'>
          <AppearingSpan
            className='self-start pl-20 font-special italic tracking-wider'
            style={{ x: spanX1 }}
          >
            EVOLVE &nbsp;
          </AppearingSpan>
          <AppearingSpan style={{ x: spanX2 }}>YOUR WEBSITE</AppearingSpan>
        </h3>
        <motion.div
          className='flex gap-3 min-w-max my-8 lg:my-10'
          style={{ x: circlesX }}
        >
          {[...new Array(20)].map((_, i) => (
            <svg
              key={i}
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              className={clsx(
                'h-[clamp(3.5rem,9vw,20rem)] aspect-square',
                i === 11 ? 'fill-accent-main scale-110' : 'fill-neutral-600'
              )}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
              />
            </svg>
          ))}
        </motion.div>
        <h3 className='flex flex-col font-light w-full max-w-screen-xl'>
          <AppearingSpan
            className='self-center font-special italic tracking-wider'
            style={{ x: spanX3 }}
          >
            STAND OUT &nbsp;
          </AppearingSpan>
          <AppearingSpan className='self-start pl-20' style={{ x: spanX4 }}>
            ONLINE
          </AppearingSpan>
        </h3>
      </div>
    </>
  );
};

'use client';

import { myAnimation } from '@/styles/customAnimations';
import clsx from 'clsx';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const MarketingSection = () => {
  const dotContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: dotContainerRef,
    offset: ['start end', 'end start'],
  });
  const springInput = useSpring(scrollYProgress, myAnimation.spring.default);
  const x = useTransform(springInput, [0, 1], ['0%', '-30%']);

  return (
    <div className='w-full'>
      <div className='flex flex-col w-full text-responsive-2xl font-light leading-none font-title'>
        <h3 className='flex flex-col w-full max-w-screen-lg'>
          <span className='self-start'>CREATE</span>
          <span className='self-center'>YOUR WEB</span>
        </h3>
        <motion.div
          ref={dotContainerRef}
          className='flex gap-3 min-w-max my-9'
          style={{ x }}
        >
          {[...new Array(15)].map((_, i) => (
            <div
              className={clsx(
                'rounded-full h-[clamp(4rem,8vw,18rem)]',
                i === 5
                  ? 'aspect-[5/3] bg-accent-main opacity-100'
                  : 'aspect-square bg-white opacity-30'
              )}
            />
          ))}
        </motion.div>
        <h3 className='flex flex-col w-full'>
          <span className='self-end'>CREATE</span>
          <span className='self-center'>YOUR WEB</span>
        </h3>
      </div>
      {[...new Array(40)].map(_ => (
        <div>KEK</div>
      ))}
    </div>
  );
};

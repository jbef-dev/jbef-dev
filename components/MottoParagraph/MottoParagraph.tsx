'use client';

import { customSprings } from '@/ui/animation';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AmazonLogo } from './AmazonLogo';
import { CNGLawyers } from './CNGLawyersLogo';
import { GuidoAudisioLogo } from './GuidoAudisioLogo';
import Balancer from 'react-wrap-balancer';
import {
  AppearOnScroll,
  AppearOnScrollChild,
  BannerInfinite,
} from '@/ui/Animated';
import { Stagger } from '@/components/AnimatedComponents/Stagger';
import { MotionComponent } from '@/ui/Animated/MotionComponent';

const MottoParagraph = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const springProgress = useSpring(scrollYProgress, customSprings.default);

  // const textY = useTransform(springProgress, [0, 1], ['-10svh', '50svh']);
  const textY = useTransform(springProgress, [0, 1], ['-5svh', '5svh']);

  return (
    <motion.div
      ref={containerRef}
      className='flex w-full flex-col items-center justify-center gap-y-20 md:gap-y-32'
      style={{ y: textY }}
    >
      <h3 className='flex justify-center text-responsive-xl font-light'>
        <Balancer>
          <MotionComponent
            className='flex flex-wrap justify-center'
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            <Stagger divide='word'>
              Working with companies ranging from local pioneering businesses to
              world-renowned corporations
            </Stagger>
          </MotionComponent>
        </Balancer>
      </h3>

      <AppearOnScroll asChild variants={{}}>
        <div className='relative w-full max-w-screen-md overflow-hidden'>
          <AppearOnScrollChild asChild>
            <BannerInfinite duration={18} repeat={3}>
              <div className='ml-14 flex gap-x-14 opacity-75 md:ml-24 md:gap-x-24'>
                <AmazonLogo className='h-12 fill-white lg:h-16' />
                <CNGLawyers className='h-12 fill-white lg:h-16' />
                <GuidoAudisioLogo className='h-12 fill-white lg:h-16' />
              </div>
            </BannerInfinite>
          </AppearOnScrollChild>
          <div className='absolute inset-0 border-l border-r border-neutral-600'></div>
        </div>
      </AppearOnScroll>
    </motion.div>
  );
};

export default MottoParagraph;

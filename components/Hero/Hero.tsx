'use client';

import * as React from 'react';
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

import { BannerInfinite, StaggerText } from '@/ui/Animated';
import {
  customSprings,
  customTransitions,
  customVariants,
} from '@/ui/animation';
import { Heading } from '@/ui/Typography';
import Balancer from 'react-wrap-balancer';
import { useCenterFluidCtx } from '../CenterFluid/CenterFluidCtx';

const Hero = ({ titles }: { titles: string[] }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const springProgress = useSpring(scrollYProgress, customSprings.stiff);

  const yTitles = useTransform(springProgress, [0, 1], ['0%', '-150%']);

  // const yImage = useTransform(springProgress, [0, 1], ['0%', '30%']);
  // const rotateXImage = useTransform(springProgress, [0, 1], ['0deg', '20deg']);
  // const rotateYImage = useTransform(springProgress, [0, 1], ['0deg', '190deg']);
  // const rotateZImage = useTransform(springProgress, [0, 1], ['0deg', '5deg']);

  const yH2 = useTransform(springProgress, [0, 1], ['0%', '150%']);
  const scaleH2 = useTransform(springProgress, [0, 1], [1, 1.15]);

  const fluidRadius = useMotionValue('50% 50% 50% 50% / 50% 50% 50% 50%');

  const { setActiveTexture } = useCenterFluidCtx();

  const isVisible = useInView(containerRef, { once: false, amount: 0.5 });

  React.useEffect(() => {
    if (isVisible) setActiveTexture('me');
  }, [isVisible, setActiveTexture]);

  // const bannerRef = React.useRef(null);

  animate(
    fluidRadius,
    [
      '68% 32% 55% 45% / 43% 34% 66% 57%',
      '35% 65% 51% 49% / 38% 60% 40% 62%',
      '48% 52% 69% 31% / 73% 51% 65% 27%',
      '40% 60% 25% 75% / 54% 70% 30% 46%',
    ],
    {
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
      duration: 8,
    }
  );

  return (
    <motion.div
      ref={containerRef}
      className='relative flex min-h-[100svh] w-full flex-col items-center justify-center gap-[10svh]'
      initial='initial'
      animate='animate'
      transition={{ staggerChildren: 0.21 }}
    >
      <motion.div className='w-full' style={{ y: yTitles }}>
        <motion.div
          variants={customVariants.appearFromBottom}
          transition={customTransitions.default}
          className='w-full overflow-hidden'
        >
          <BannerInfinite className='whitespace-nowrap' direction='ltr'>
            <Heading as='h1' className='text-responsive-6xl font-medium'>
              {titles[0]}&nbsp;
            </Heading>
            <Heading
              as='h1'
              className='absolute inset-0 z-20 text-responsive-6xl font-medium text-white mix-blend-soft-light'
            >
              {titles[0]}&nbsp;
            </Heading>
          </BannerInfinite>
        </motion.div>
      </motion.div>

      <motion.div
        className='z-10 w-full overflow-hidden'
        style={{ y: yTitles }}
      >
        <motion.div
          variants={customVariants.appearFromBottom}
          transition={customTransitions.default}
        >
          <BannerInfinite className='whitespace-nowrap' direction='rtl'>
            <Heading as='h1' className='text-responsive-6xl font-extralight'>
              &nbsp;{titles[1]}
            </Heading>
          </BannerInfinite>
        </motion.div>
      </motion.div>

      <motion.div
        className='absolute bottom-0 mx-auto mb-6 flex items-center px-4 text-responsive-md font-light uppercase lg:mb-8'
        style={{
          y: yH2,
          scale: scaleH2,
        }}
      >
        <Heading as='h2'>
          <Balancer>
            <StaggerText
              className='justify-center'
              transition={{
                delayChildren: 0.6,
                staggerChildren: 0.09,
                staggerDirection: 1,
              }}
            >
              Bringing high-end web design and development to businesses
              worldwide.
            </StaggerText>
          </Balancer>
        </Heading>
      </motion.div>
    </motion.div>
  );
};

export { Hero };

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
import { Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Hero = ({ titles }: { titles: string[] }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const springProgress = useSpring(scrollYProgress, customSprings.stiff);

  const yTitles = useTransform(springProgress, [0, 1], ['0%', '-150%']);

  const yH2 = useTransform(springProgress, [0, 1], ['0%', '150%']);
  const scaleH2 = useTransform(springProgress, [0, 1], [1, 1.15]);

  const { activeTexture, setActiveTexture } = useCenterFluidCtx();

  const isVisible = useInView(containerRef, { once: false, amount: 0.75 });

  React.useEffect(() => {
    if (isVisible && activeTexture.name !== 'me')
      setActiveTexture({ name: 'me', transitionColor: '#3f3f3f' });
  }, [isVisible, setActiveTexture, activeTexture]);

  return (
    <motion.div
      ref={containerRef}
      className='relative flex min-h-[100svh] w-full flex-col items-center justify-center gap-[10svh]'
      initial='initial'
      animate='animate'
      transition={{ staggerChildren: 0.21 }}
    >
      <motion.div className='-z-10 w-full' style={{ y: yTitles }}>
        <motion.div
          variants={customVariants.appearFromBottom}
          transition={customTransitions.default}
          className='w-full overflow-hidden'
        >
          <BannerInfinite duration={20} className='whitespace-nowrap' direction='ltr'>
            <Heading as='h1' className='text-responsive-6xl font-medium'>
              {titles[0]}&nbsp;
            </Heading>
          </BannerInfinite>
        </motion.div>
      </motion.div>

      <motion.div className='w-full overflow-hidden mix-blend-difference' style={{ y: yTitles }}>
        <motion.div
          variants={customVariants.appearFromBottom}
          transition={customTransitions.default}
        >
          <BannerInfinite duration={20} className='whitespace-nowrap' direction='rtl'>
            <Heading as='h1' className='text-responsive-6xl font-extralight'>
              &nbsp;{titles[1]}
            </Heading>
          </BannerInfinite>
        </motion.div>
      </motion.div>

      <motion.div
        className='absolute bottom-0 mx-auto mb-6 flex items-center px-4 font-light uppercase lg:mb-8'
        style={{
          y: yH2,
          scale: scaleH2,
        }}
      >
        <Heading as='h2' className='text-responsive-lg md:text-responsive-lg'>
          <Balancer>
            <StaggerText
              className='justify-center'
              transition={{
                delayChildren: 0.6,
                staggerChildren: 0.09,
                staggerDirection: 1,
              }}
            >
              Elevated web design for businesses worldwide.
            </StaggerText>
          </Balancer>
        </Heading>
      </motion.div>
    </motion.div>
  );
};

export { Hero };

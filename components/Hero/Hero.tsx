'use client';

import * as React from 'react';
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

import { BannerInfinite } from '@/ui/Animated';
import { customSprings, customVariants } from '@/ui/animation';
import { Heading } from '@/ui/Typography';
import Balancer from 'react-wrap-balancer';
import { useCenterFluidCtx } from '../CenterFluid/CenterFluidCtx';
import { Stagger } from '@/components/AnimatedComponents/Stagger';

const Hero = ({ titles }: { titles: string[] }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const springProgress = useSpring(scrollYProgress, customSprings.stiff);

  const yTitles = useTransform(springProgress, [0, 1], ['0%', '-150%']);

  const yH2 = useTransform(springProgress, [0, 1], ['0%', '60%']);
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
    // initial='initial'
    // animate='animate'
    // transition={{ staggerChildren: 0.21 }}
    >
      <motion.div className='-z-10 w-full' style={{ y: yTitles }}>
        <Heading
          as='h1'
          className='overflow-hidden text-responsive-6xl font-medium'
        >
          <BannerInfinite
            duration={20}
            className='whitespace-nowrap'
            direction='ltr'
          >
            <motion.div
              className='flex overflow-hidden'
              initial='initial'
              animate='animate'
              transition={{ staggerChildren: 0.035 }}
            >
              <Stagger>&nbsp;{titles[0]}</Stagger>
            </motion.div>
          </BannerInfinite>
        </Heading>
      </motion.div>

      <motion.div
        className='w-full mix-blend-difference'
        style={{ y: yTitles }}
      >
        <Heading
          as='h1'
          className='overflow-hidden text-responsive-6xl font-extralight'
        >
          <BannerInfinite
            duration={20}
            className='whitespace-nowrap'
            direction='rtl'
          >
            <motion.div
              className='flex overflow-hidden'
              initial='initial'
              animate='animate'
              transition={{ delayChildren: 0.35, staggerChildren: 0.035 }}
            >
              <Stagger>&nbsp;{titles[1]}</Stagger>
            </motion.div>
          </BannerInfinite>
        </Heading>
      </motion.div>

      <motion.div
        className='absolute bottom-0 mx-auto mb-6 flex items-center px-4 font-light lg:mb-8'
        style={{
          y: yH2,
          scale: scaleH2,
        }}
      >
        <Heading
          as='h2'
          className='!font-sans text-responsive-lg md:text-responsive-lg'
        >
          <Balancer>
            <motion.div
              className='flex flex-wrap justify-center'
              initial='initial'
              animate='animate'
              transition={{ delayChildren: 0.7, staggerChildren: 0.025 }}
            >
              <Stagger variants={customVariants.appearFromBottomLg}>
                Bringing high-end web design and development to businesses
                worldwide.
              </Stagger>
            </motion.div>
          </Balancer>
        </Heading>
      </motion.div>
    </motion.div>
  );
};

export { Hero };

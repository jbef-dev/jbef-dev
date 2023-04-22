'use client';

import * as React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

import laguna_rosa from '@/public/assets/img/sea-torrevieja.webp';
import {
  AppearOnScrollChild,
  BannerInfinite,
  StaggerText,
} from '@/ui/Animated';
import { customSprings, customTransitions } from '@/ui/animation';
import { Heading } from '@/ui/Typography';
import Balancer from 'react-wrap-balancer';

const Hero = ({ titles }: { titles: string[] }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const springProgress = useSpring(scrollYProgress, customSprings.stiff);

  const yTitles = useTransform(springProgress, [0, 1], ['0%', '-150%']);

  const yImage = useTransform(springProgress, [0, 1], ['0%', '25%']);
  const rotateXImage = useTransform(springProgress, [0, 1], ['0deg', '20deg']);
  const rotateYImage = useTransform(springProgress, [0, 1], ['0deg', '190deg']);
  const rotateZImage = useTransform(springProgress, [0, 1], ['0deg', '5deg']);

  const yH2 = useTransform(springProgress, [0, 1], ['0%', '150%']);
  const scaleH2 = useTransform(springProgress, [0, 1], [1, 1.15]);

  return (
    <motion.div
      ref={containerRef}
      className='relative flex min-h-[100svh] w-full flex-col items-center justify-center gap-[10svh]'
      initial='initial'
      animate='animate'
      transition={{ staggerChildren: 0.21 }}
    >
      <motion.div className='z-0 w-full overflow-hidden' style={{ y: yTitles }}>
        <AppearOnScrollChild asChild className='z-0 w-full overflow-hidden'>
          <BannerInfinite className='whitespace-nowrap' direction='ltr'>
            <Heading as='h1' className='text-responsive-6xl font-medium'>
              {titles[0]}&nbsp;
            </Heading>
          </BannerInfinite>
        </AppearOnScrollChild>
      </motion.div>

      <AppearOnScrollChild
        asChild
        className='absolute inset-0 z-10 m-auto aspect-[14/21] h-full max-h-[55svh] w-auto max-w-[90vw] select-none rounded-2xl shadow-2xl shadow-neutral-500 md:max-h-[70svh]'
        // variants={customVariants.zoomIn}
        variants={{
          initial: {
            scale: 0.75,
            rotateX: '12deg',
            rotateY: '90deg',
            rotateZ: '10deg',
          },
          animate: {
            scale: 1,
            rotateX: '0deg',
            rotateY: '0deg',
            rotateZ: '0deg',
          },
          exit: {
            scale: 1.15,
            rotateX: '0deg',
            rotateY: '0deg',
            rotateZ: '0deg',
          },
        }}
        transition={customTransitions.loose}
        style={{
          y: yImage,
          rotateX: rotateXImage,
          rotateY: rotateYImage,
          rotateZ: rotateZImage,
        }}
      >
        <Image
          className='h-full rounded-2xl object-cover'
          src={laguna_rosa}
          // src='/assets/img/sea-torrevieja.webp'
          loading='eager'
          priority
          alt='primary image'
        />
      </AppearOnScrollChild>

      <motion.div
        className='z-10 w-full overflow-hidden'
        style={{ y: yTitles }}
      >
        <AppearOnScrollChild asChild>
          <BannerInfinite className='whitespace-nowrap' direction='rtl'>
            <Heading as='h1' className='text-responsive-6xl font-extralight'>
              &nbsp;{titles[1]}
            </Heading>
          </BannerInfinite>
        </AppearOnScrollChild>
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

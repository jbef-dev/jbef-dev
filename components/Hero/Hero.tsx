'use client';

import * as React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

import sea_placeholder from '@/public/assets/img/sea.webp';
import { AppearOnScrollChild } from '@/ui/Animated/AppearOnScroll';
import clsx from 'clsx';

import { Banner } from '@/ui/Animated';
import { customSprings, customVariants } from '@/ui/animation';
// import useArtificialScroll from '@/hooks/useArtificialScroll';

interface Props {
  titles: string[];
}

const Hero = ({ titles }: Props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const springProgress = useSpring(scrollYProgress, customSprings.fast);

  const scrollIndicatorOpacity = useTransform(springProgress, [0, 0.2], [1, 0]);

  const xLtr = useTransform(springProgress, [0, 1], ['0%', '13%']);
  const xRtl = useTransform(springProgress, [0, 1], ['0%', '-18%']);
  const xQuote = useTransform(springProgress, [0, 1], ['0%', '-30%']);

  // const x3 = useTransform(springProgress, [0, 1], ['0rem', '6rem']);
  const scaleOutstanding = useTransform(springProgress, [0, 1], [1, 1.3]);
  const yTitles = useTransform(springProgress, [0, 1], ['0%', '-60%']);
  const yImage = useTransform(springProgress, [0, 1], ['0%', '15%']);

  const newTitleClassName = clsx(
    'overflow-hidden leading-none -mt-[0.23em] pb-[0.1em]'
  );

  return (
    <motion.div
      ref={containerRef}
      className='relative flex h-full min-h-[100svh] w-full flex-col items-center justify-center gap-[10svh] font-title'
      initial='initial'
      animate='animate'
      transition={{ staggerChildren: 0.21 }}
    >
      <motion.div
        variants={{}}
        className='absolute inset-0 z-10 m-auto aspect-[14/21] max-h-[55svh] max-w-full overflow-hidden rounded-2xl md:max-h-[70svh]'
        style={{ y: yImage }}
      >
        <AppearOnScrollChild asChild variants={customVariants.zoomIn}>
          <Image
            src={sea_placeholder}
            alt='primary image'
            className='h-full rounded-2xl object-cover'
          />
        </AppearOnScrollChild>
      </motion.div>

      <motion.div
        className={clsx('z-0 w-full overflow-hidden')}
        variants={{}}
        style={{ y: yTitles }}
      >
        <AppearOnScrollChild asChild>
          <Banner
            direction='rtl'
            className='whitespace-nowrap text-responsive-5xl'
          >
            <h1 className='font-medium'>Design & develop &#8212;&nbsp;</h1>
          </Banner>
        </AppearOnScrollChild>
      </motion.div>

      <motion.div
        className='z-10 w-full overflow-hidden'
        variants={{}}
        style={{ y: yTitles }}
      >
        <AppearOnScrollChild asChild>
          <Banner
            direction='ltr'
            className='whitespace-nowrap text-responsive-5xl'
          >
            <h1 className='font-extralight'>Bespoke websites &#8212;&nbsp;</h1>
          </Banner>
        </AppearOnScrollChild>
      </motion.div>

      <div className='absolute bottom-0 mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-2 text-responsive-sm lg:px-8'>
        <span>
          Web designer <br /> & developer
        </span>
        <span>
          ALC, SPAIN
          <br />
          UTC+2
        </span>
      </div>
    </motion.div>
  );
};

export { Hero };

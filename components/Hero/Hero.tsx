'use client';

import * as React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

import laguna_rosa from '@/public/assets/img/sea-torrevieja.webp';
import { AppearOnScrollChild, BannerInfinite } from '@/ui/Animated';
import clsx from 'clsx';
import {
  customSprings,
  customTransitions,
  customVariants,
} from '@/ui/animation';
import { Heading } from '@/ui/Typography';

const Hero = ({ titles }: { titles: string[] }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const springProgress = useSpring(scrollYProgress, customSprings.stiff);

  const yTitles = useTransform(springProgress, [0, 1], ['0%', '-150%']);
  const yImage = useTransform(springProgress, [0, 1], ['0%', '20%']);
  const rotateXImage = useTransform(springProgress, [0, 1], ['0deg', '20deg']);
  const rotateYImage = useTransform(springProgress, [0, 1], ['0deg', '160deg']);
  const rotateZImage = useTransform(springProgress, [0, 1], ['0deg', '5deg']);

  return (
    <motion.h1
      ref={containerRef}
      className='relative flex min-h-[100svh] w-full flex-col items-center justify-center gap-[10svh]'
      initial='initial'
      animate='animate'
      transition={{ staggerChildren: 0.21 }}
    >
      <motion.div
        className={clsx('z-0 w-full overflow-hidden')}
        style={{ y: yTitles }}
      >
        <AppearOnScrollChild asChild className='z-0 w-full overflow-hidden'>
          <BannerInfinite className='whitespace-nowrap' direction='ltr'>
            <Heading as='span' className='text-responsive-6xl font-medium'>
              {titles[0]}&nbsp;
            </Heading>
          </BannerInfinite>
        </AppearOnScrollChild>
      </motion.div>

      <AppearOnScrollChild
        asChild
        className='absolute inset-0 z-10 m-auto aspect-[14_/_21] h-full max-h-[55svh] w-auto max-w-[90vw] select-none rounded-2xl shadow-2xl shadow-neutral-500 md:max-h-[70svh]'
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
            <Heading as='span' className='text-responsive-6xl font-extralight'>
              &nbsp;{titles[1]}
            </Heading>
          </BannerInfinite>
        </AppearOnScrollChild>
      </motion.div>

      <Time />
    </motion.h1>
  );
};

const Time = () => {
  const [time, setTime] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    const timeOpts: Intl.DateTimeFormatOptions = {
      timeZone: 'Europe/Madrid',
      hour: 'numeric',
      minute: 'numeric',
    };
    const formatter = new Intl.DateTimeFormat('default', timeOpts);
    setTime(formatter.format(new Date()));
  }, []);

  return (
    <motion.div
      layout
      className='absolute bottom-0 mx-auto flex w-full max-w-screen-3xl items-center justify-between px-4 py-2 text-responsive-sm font-light uppercase lg:px-8 lg:py-8'
    >
      <span>
        Web designer <br /> & developer
      </span>
      <span className='flex flex-col text-right'>
        <span>ALC, SPAIN</span>
        <span className='flex self-end overflow-hidden'>
          {time ? (
            <motion.span
              initial='initial'
              animate='animate'
              variants={customVariants.fromBottom}
              transition={{ delay: 0.75, ...customTransitions.default }}
            >
              {time}
            </motion.span>
          ) : null}
          &nbsp;— UTC+2
        </span>
      </span>
    </motion.div>
  );
};

export { Hero };

'use client';

import * as React from 'react';
import {
  AnimateSharedLayout,
  LayoutGroup,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';

import sea_placeholder from '@/public/assets/img/sea.webp';
import { AppearOnScrollChild, Banner } from '@/ui/Animated';
import clsx from 'clsx';
import {
  customSprings,
  customTransitions,
  customVariants,
} from '@/ui/animation';
import { Heading1 } from '@/ui/Typography';

const Hero = ({ titles }: { titles: string[] }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const springProgress = useSpring(scrollYProgress, customSprings.fast);

  const yTitles = useTransform(springProgress, [0, 1], ['0%', '-150%']);
  const yImage = useTransform(springProgress, [0, 1], ['0%', '15%']);

  return (
    <motion.div
      ref={containerRef}
      className='relative flex h-full min-h-[100svh] w-full flex-col items-center justify-center gap-[10svh]'
      initial='initial'
      animate='animate'
      transition={{ staggerChildren: 0.21 }}
    >
      <motion.div
        className='absolute inset-0 z-10 m-auto aspect-[14_/_21] max-h-[55svh] max-w-full overflow-hidden rounded-2xl md:max-h-[70svh]'
        style={{ y: yImage }}
      >
        <AppearOnScrollChild asChild variants={customVariants.zoomIn}>
          <Image
            className='h-full rounded-2xl object-cover'
            src={sea_placeholder}
            loading='eager'
            priority
            alt='primary image'
          />
        </AppearOnScrollChild>
      </motion.div>

      <motion.div
        className={clsx('z-0 w-full overflow-hidden')}
        style={{ y: yTitles }}
      >
        <AppearOnScrollChild asChild>
          <Banner className='whitespace-nowrap' direction='ltr'>
            <Heading1 className='font-medium'>{titles[0]}&nbsp;</Heading1>
          </Banner>
        </AppearOnScrollChild>
      </motion.div>

      <motion.div
        className='z-10 w-full overflow-hidden'
        style={{ y: yTitles }}
      >
        <AppearOnScrollChild asChild>
          <Banner className='whitespace-nowrap' direction='rtl'>
            <Heading1 className='font-extralight'>&nbsp;{titles[1]}</Heading1>
          </Banner>
        </AppearOnScrollChild>
      </motion.div>

      <Time />
    </motion.div>
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
              variants={customVariants.fromBelow}
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

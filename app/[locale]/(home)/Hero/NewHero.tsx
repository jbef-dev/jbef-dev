'use client';

import * as React from 'react';
import {
  motion,
  useAnimationControls,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useWillChange,
} from 'framer-motion';
import Image from 'next/image';

import architecture from '@/public/assets/img/architecture_preview.webp';
import sea_placeholder from '@/public/assets/img/sea.webp';
import { myAnimation } from '@/styles/customAnimations';
import {
  AppearOnScroll,
  AppearOnScrollChild,
} from '@/ui/Animated/AppearOnScroll';
import clsx from 'clsx';
import useArtificialScroll from '@/hooks/useArtificialScroll';
import { CircleSpring } from './CircleSpring';
import { TextBanner } from '../TextBanner/TextBanner';
import { FlexContainer } from '@/ui/Containers';
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

  const springProgress = useSpring(scrollYProgress, myAnimation.spring.fast);

  const scrollIndicatorOpacity = useTransform(springProgress, [0, 0.2], [1, 0]);

  const xLtr = useTransform(springProgress, [0, 1], ['0%', '13%']);
  const xRtl = useTransform(springProgress, [0, 1], ['0%', '-18%']);
  const xQuote = useTransform(springProgress, [0, 1], ['0%', '-30%']);

  // const x3 = useTransform(springProgress, [0, 1], ['0rem', '6rem']);
  const scaleOutstanding = useTransform(springProgress, [0, 1], [1, 1.3]);
  const yTitles = useTransform(springProgress, [0, 1], ['0%', '-60%']);
  const yImage = useTransform(springProgress, [0, 1], ['0%', '15%']);

  // const willChange = useWillChange();
  // console.log(willChange);

  // useArtificialScroll()

  // const yGood = useMotionValue('0%');
  //
  // React.useEffect(() => {
  //   yTitles.on('change', y => {
  //     setTimeout(() => yGood.set(y, false), 20);
  //     console.log(y);
  //   });
  // }, [yTitles]);

  // const videoY = useTransform(springProgress, [0, 1], ['0rem', '-9rem']);
  const img1Y = useTransform(springProgress, [0, 1], ['0%', '-30%']);
  // const img2Y = useTransform(springProgress, [0, 1], ['0rem', '-53rem']);
  // const img2Y = useTransform(springProgress, [0, 1], ['0vh', '40vh']);
  // const img2X = useTransform(springProgress, [0, 1], ['0vw', '-53vw']);
  // const img2Scale = useTransform(springProgress, [0, 0.5, 1], [1, 1.2, 0.7]);
  // const arrowY = useTransform(springProgress, [0, 1], ['0rem', '-37rem']);

  // React.useEffect(() => {
  //   springProgress.on('change', s => console.log('spring'));
  //   // springProgress.on('change', s => console.log('normal'));
  // });

  const newTitleClassName = clsx(
    'overflow-hidden leading-none -mt-[0.23em] pb-[0.1em]'
  );

  return (
    <motion.div
      ref={containerRef}
      className='relative flex flex-col w-full h-full items-center justify-center min-h-[100svh] font-title gap-[10svh]'
      initial='initial'
      animate='animate'
      transition={{ staggerChildren: 0.21 }}
    >
      <motion.div
        variants={{}}
        className='absolute inset-0 m-auto max-w-full max-h-[55svh] md:max-h-[70svh] z-10 overflow-hidden aspect-[14_/_21] rounded-2xl'
        style={{ y: yImage }}
      >
        <AppearOnScrollChild asChild variants={myAnimation.variants.zoomIn}>
          <Image
            src={sea_placeholder}
            alt='primary image'
            className='object-cover rounded-2xl h-full'
          />
        </AppearOnScrollChild>
      </motion.div>

      <motion.div
        className={clsx('z-0 overflow-hidden w-full')}
        variants={{}}
        style={{ y: yTitles }}
      >
        <AppearOnScrollChild asChild>
          <TextBanner
            direction='rtl'
            className='whitespace-nowrap text-responsive-hero'
          >
            <h1 className='font-medium'>Design & develop &#8212;&nbsp;</h1>
          </TextBanner>
        </AppearOnScrollChild>
      </motion.div>

      <motion.div
        className='z-10 overflow-hidden w-full'
        variants={{}}
        style={{ y: yTitles }}
      >
        <AppearOnScrollChild asChild>
          <TextBanner
            direction='ltr'
            className='whitespace-nowrap text-responsive-hero'
          >
            <h1 className='font-extralight'>Bespoke websites &#8212;&nbsp;</h1>
          </TextBanner>
        </AppearOnScrollChild>
      </motion.div>
    </motion.div>
  );
};

export { Hero };

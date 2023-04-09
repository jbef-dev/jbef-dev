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
import colorful_animals from '@/public/assets/img/colorful_animals.png';
import { myAnimation } from '@/styles/customAnimations';
import {
  AppearOnScroll,
  AppearOnScrollChild,
} from '@/ui/Animated/AppearOnScroll';
import clsx from 'clsx';
import useArtificialScroll from '@/hooks/useArtificialScroll';
import { CircleSpring } from './CircleSpring';
import { TextBanner } from '../TextBanner/TextBanner';
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
  // const yTitles = useTransform(springProgress, [0, 1], ['0%', '-60%']);

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
    <div
      ref={containerRef}
      className='relative h-[120svh] flex-col font-title gap-14 lg:gap-32 font-medium flex items-center justify-start w-full'
    >
      <motion.div
        className='flex h-[100svh] flex-col w-full text-responsive-hero items-center justify-center'
        initial='initial'
        animate='animate'
        transition={{ staggerChildren: 0.21 }}
      >
        <div className='flex relative leading-none justify-center items-start px-2 flex-col text-black'>
          <motion.div className={clsx('overflow-hidden', newTitleClassName)}>
            <AppearOnScrollChild
              variants={myAnimation.variants.fromBelow}
              transition={myAnimation.transition.default}
            >
              {titles[0]}
            </AppearOnScrollChild>
          </motion.div>

          <motion.div
            className={clsx(
              'flex relative overflow-hidden origin-[30%_50%]',
              newTitleClassName
            )}
            // style={{ scale: scaleOutstanding }}
          >
            <AppearOnScrollChild className='flex items-center gap-[0.2em] justify-center'>
              <motion.span
                // className='text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary to-secondary'
                className='text-transparent bg-clip-text'
                animate={{
                  backgroundImage: [
                    `linear-gradient(0deg, rgba(245,154,44,0.7) 5%, rgba(231,39,123,1) 40%)`,
                    `linear-gradient(70deg, rgba(245,154,44,0.7) 5%, rgba(231,39,123,1) 20%)`,
                    `linear-gradient(180deg, rgba(245,154,44,0.7) 5%, rgba(231,39,123,1) 70%)`,
                    `linear-gradient(250deg, rgba(245,154,44,0.7) 5%, rgba(231,39,123,1) 25%)`,
                    `linear-gradient(360deg, rgba(245,154,44,0.7) 5%, rgba(231,39,123,1) 40%)`,
                  ],
                  // backgroundImage: [
                  //   `linear-gradient(0deg, rgba(245,154,44,1) 0%, rgba(231,39,123,1) 0%)`,
                  //   `linear-gradient(10deg, rgba(245,154,44,1) 0%, rgba(231,39,123,1) 50%)`,
                  //   `linear-gradient(30deg, rgba(245,154,44,1) 0%, rgba(231,39,123,1) 100%)`,
                  //   `linear-gradient(30deg, rgba(245,154,44,1) 50%, rgba(231,39,123,1) 100%)`,
                  //   `linear-gradient(30deg, rgba(245,154,44,1) 100%, rgba(231,39,123,1) 100%)`,
                  // ],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 3.5,
                  ease: 'easeInOut',
                }}
              >
                {titles[1]}
              </motion.span>

              <div className='rounded-full overflow-hidden h-[0.65em] aspect-video'>
                <Image
                  src={colorful_animals}
                  className='object-cover'
                  priority
                  alt='colorful animals'
                />
              </div>
            </AppearOnScrollChild>
          </motion.div>

          <motion.div
            className={newTitleClassName}
            // style={{ translateX: xRtl }}
          >
            <AppearOnScrollChild className='flex gap-[0.2em] w-full items-center'>
              <div className='rounded-full h-[0.65em] aspect-video overflow-hidden'>
                <Image
                  src={architecture}
                  className='object-cover object-center w-full'
                  priority
                  loading='eager'
                  alt='example work'
                />
              </div>
              <h1>{titles[2]}</h1>
            </AppearOnScrollChild>
          </motion.div>

          <motion.div className={newTitleClassName}>
            <AppearOnScrollChild>{titles[3]}</AppearOnScrollChild>
          </motion.div>

          <motion.div
            className='flex absolute font-normal top-full translate-y-12 left-0 overflow-hidden text-responsive-md gap-2 text-black'
            // style={{ translateX: xQuote }}
          >
            <div className='overflow-hidden h-min'>
              <AppearOnScrollChild asChild>
                <svg
                  className='h-[0.75em] aspect-square mt-[0.22em]'
                  viewBox='0 0 200 200'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    className='fill-black'
                    d='M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z'
                  />
                </svg>
              </AppearOnScrollChild>
            </div>

            <AppearOnScrollChild asChild>
              <p className='whitespace-nowrap'>
                Custom websites —<br /> down to earth service
              </p>
            </AppearOnScrollChild>
          </motion.div>
        </div>
      </motion.div>

      {/* <AppearOnScroll */}
      {/*   className='absolute flex leading-none overflow-hidden bottom-8 right-8 font-light' */}
      {/*   variants={{}} */}
      {/*   transition={{ delayChildren: 3, staggerChildren: 0.1 }} */}
      {/*   style={{ */}
      {/*     opacity: scrollIndicatorOpacity, */}
      {/*   }} */}
      {/* > */}
      {/*   {'SCROLL'.split('').map((letter, i) => ( */}
      {/*     <AppearOnScrollChild */}
      {/*       key={letter + i} */}
      {/*       transition={{ */}
      {/*         repeat: Infinity, */}
      {/*         repeatType: 'loop', */}
      {/*         repeatDelay: 3, */}
      {/*         ...myAnimation.transition.default, */}
      {/*       }} */}
      {/*     > */}
      {/*       {letter} */}
      {/*     </AppearOnScrollChild> */}
      {/*   ))} */}
      {/* </AppearOnScroll> */}

    </div>
  );
};

export { Hero };

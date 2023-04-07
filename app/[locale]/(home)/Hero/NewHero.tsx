'use client';

import * as React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

import architecture from '@/public/assets/img/architecture_preview.webp';
import colorful_animals from '@/public/assets/img/colorful_animals.png';
import { myAnimation } from '@/styles/customAnimations';
import {
  AppearOnScroll,
  AppearOnScrollChild,
} from '@/ui/Animated/AppearOnScroll';
import clsx from 'clsx';

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

  const x1 = useTransform(scrollYProgress, [0, 1], ['0rem', '18rem']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['0rem', '-12rem']);
  // const x3 = useTransform(springProgress, [0, 1], ['0rem', '6rem']);
  const scaleOutstanding = useTransform(springProgress, [0, 1], [1, 1.4]);
  const yTitles = useTransform(springProgress, [0, 1], ['0%', '-60%']);

  // const videoY = useTransform(scrollYProgress, [0, 1], ['0rem', '-9rem']);
  // const img1Y = useTransform(springStiff, [0, 1], ['0rem', '-30rem']);
  // const img2Y = useTransform(scrollYProgress, [0, 1], ['0rem', '-53rem']);
  // const img2Y = useTransform(springProgress, [0, 1], ['0vh', '40vh']);
  // const img2X = useTransform(springProgress, [0, 1], ['0vw', '-53vw']);
  // const img2Scale = useTransform(springProgress, [0, 0.5, 1], [1, 1.2, 0.7]);
  // const arrowY = useTransform(springProgress, [0, 1], ['0rem', '-37rem']);

  // React.useEffect(() => {
  //   springProgress.on('change', s => console.log('spring'));
  //   // scrollYProgress.on('change', s => console.log('normal'));
  // });

  const newTitleClassName = clsx(
    'overflow-hidden leading-none -mt-[0.13em] pb-[0.13em]'
  );

  return (
    <div
      ref={containerRef}
      className='relative h-[200svh] flex-col max-w-screen-3xl font-title gap-14 lg:gap-32 font-medium flex items-center justify-center w-full'
    >
      {/* <CircleSpring containerScroll={scrollYProgress} /> */}

      <div className='flex fixed h-[100svh] top-0 left-0 w-full text-responsive-hero items-center justify-center'>
        <motion.div
          className='flex leading-none justify-center items-start px-2 flex-col text-black'
          initial='initial'
          animate='animate'
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.21,
              },
            },
          }}
          style={{ y: yTitles }}
        >
          <motion.div className={newTitleClassName} style={{ x: x1 }}>
            <AppearOnScrollChild>{titles[0]}</AppearOnScrollChild>
          </motion.div>

          <motion.div
            className={clsx('flex relative origin-left', newTitleClassName)}
            style={{ scale: scaleOutstanding }}
          >
            <AppearOnScrollChild className='flex items-center gap-[0.2em] justify-center'>
              <motion.span
                className='text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary to-secondary'
                // animate={{
                //   backgroundImage: [
                //     `linear-gradient(0deg, rgba(245,154,44,0.7) 5%, rgba(231,39,123,1) 40%)`,
                //     `linear-gradient(70deg, rgba(245,154,44,0.7) 5%, rgba(231,39,123,1) 20%)`,
                //     `linear-gradient(180deg, rgba(245,154,44,0.7) 5%, rgba(231,39,123,1) 70%)`,
                //     `linear-gradient(250deg, rgba(245,154,44,0.7) 5%, rgba(231,39,123,1) 25%)`,
                //     `linear-gradient(360deg, rgba(245,154,44,0.7) 5%, rgba(231,39,123,1) 40%)`,
                //   ],
                // }}
                // transition={{
                //   repeat: Infinity,
                //   repeatType: 'loop',
                //   duration: 4.5,
                //   ease: 'easeInOut',
                // }}
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

          <motion.div className={newTitleClassName} style={{ x: x2 }}>
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

          <motion.div className={newTitleClassName} style={{ x: x1 }}>
            <AppearOnScrollChild asChild>
              <h1>{titles[3]}</h1>
            </AppearOnScrollChild>
          </motion.div>
        </motion.div>
      </div>

      {/* <svg */}
      {/*   className='fill-black will-change-transform text-responsive-hero flex self-end' */}
      {/*   viewBox='0 0 24 24' */}
      {/*   height='1.15em' */}
      {/*   width='1.15em' */}
      {/* > */}
      {/*   <motion.path d='M18.707 12.707l-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z' /> */}
      {/* </svg> */}

      <div className='flex font-sans font-medium self-start overflow-hidden text-responsive-md gap-2 text-black'>
        <AppearOnScroll className='overflow-hidden' asChild variants={{}}>
          <svg
            className='h-[1.2em] aspect-square mt-[0.22em]'
            viewBox='0 0 200 200'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              className='fill-black'
              d='M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z'
            />
          </svg>
        </AppearOnScroll>

        <AppearOnScroll className='overflow-hidden' variants={{}}>
          <AppearOnScrollChild asChild>
            <p className='whitespace-nowrap'>
              Custom websites —<br /> down to earth service
            </p>
          </AppearOnScrollChild>
        </AppearOnScroll>
      </div>
    </div>
  );
};

export default Hero;

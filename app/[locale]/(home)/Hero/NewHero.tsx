'use client';

import * as React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

import architecture from '@/public/assets/img/architecture_preview.webp';
import colorful_animals from '@/public/assets/img/colorful_animals.png';
import NewTitle from './NewTitle';
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

  const springStiff = useSpring(scrollYProgress, myAnimation.spring.fast);

  const videoY = useTransform(scrollYProgress, [0, 1], ['0rem', '-9rem']);
  // const img1Y = useTransform(springStiff, [0, 1], ['0rem', '-30rem']);
  // const img2Y = useTransform(scrollYProgress, [0, 1], ['0rem', '-53rem']);
  const img2Y = useTransform(springStiff, [0, 1], ['0vh', '40vh']);
  const img2X = useTransform(scrollYProgress, [0, 1], ['0vw', '-53vw']);
  const img2Scale = useTransform(springStiff, [0, 0.5, 1], [1, 1.2, 0.7]);
  const arrowY = useTransform(scrollYProgress, [0, 1], ['0rem', '-37rem']);

  const newTitleClassName = clsx(
    'overflow-hidden leading-none -mt-[0.13em] pb-[0.13em]'
  );

  return (
    <motion.div
      ref={containerRef}
      className='relative flex-col max-w-screen-3xl font-title gap-14 lg:gap-32 font-medium flex items-center justify-center w-full'
      initial='initial'
      animate='animate'
      variants={{
        animate: {
          transition: {
            staggerChildren: 0.18,
          },
        },
      }}
    >
      {/* <CircleSpring containerScroll={scrollYProgress} /> */}

      <div className='flex text-responsive-hero items-center w-full justify-center'>
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
        >
          <div className={newTitleClassName}>
            <AppearOnScrollChild>{titles[0]}</AppearOnScrollChild>
          </div>

          <div className={clsx('flex relative', newTitleClassName)}>
            <AppearOnScrollChild className='flex items-center gap-[0.2em] justify-center'>
              <motion.span
                className='text-transparent bg-clip-text'
                animate={{
                  backgroundImage: [
                    `linear-gradient(0deg, rgba(245,154,44,0.7) 5%, rgba(231,39,123,1) 40%)`,
                    `linear-gradient(70deg, rgba(245,154,44,0.7) 5%, rgba(231,39,123,1) 20%)`,
                    `linear-gradient(180deg, rgba(245,154,44,0.7) 5%, rgba(231,39,123,1) 70%)`,
                    `linear-gradient(250deg, rgba(245,154,44,0.7) 5%, rgba(231,39,123,1) 25%)`,
                    `linear-gradient(360deg, rgba(245,154,44,0.7) 5%, rgba(231,39,123,1) 40%)`,
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 4.5,
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
          </div>

          <div className={newTitleClassName}>
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
          </div>

          <div className={newTitleClassName}>
            <AppearOnScrollChild asChild>
              <h1>{titles[3]}</h1>
            </AppearOnScrollChild>
          </div>
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

      <div className='flex font-sans font-light self-start overflow-hidden text-responsive-md gap-2 text-black'>
        <AppearOnScroll className='overflow-hidden' asChild variants={{}}>
          <svg
            className='fill-neutral-800 overflow-hidden mt-1 w-[1em] h-[1em]'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <AppearOnScrollChild asChild>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
              />
            </AppearOnScrollChild>
          </svg>
        </AppearOnScroll>

        <AppearOnScroll className='overflow-hidden' variants={{}}>
          <AppearOnScrollChild asChild>
            <p>
              Custom websites —<br /> down to earth service
            </p>
          </AppearOnScrollChild>
        </AppearOnScroll>
      </div>
    </motion.div>
  );
};

export default Hero;

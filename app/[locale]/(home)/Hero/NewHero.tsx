'use client';

import * as React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

import architecture from '@/public/assets/img/architecture_preview.webp';
import colorful_animals from '@/public/assets/img/colorful_animals.png';
import NewTitle from './NewTitle';
import { myAnimation } from '@/styles/customAnimations';

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

  return (
    <div
      ref={containerRef}
      className='flex flex-col relative w-full text-responsive-hero justify-center bg-white'
    >
      <div className='relative h-[100svh] top-0 max-w-screen-3xl font-title flex items-center justify-center w-full'>
        {/* <CircleSpring containerScroll={scrollYProgress} /> */}

        <div className='flex items-center w-full justify-center'>
          <motion.div
            className='flex leading-none justify-center items-start px-2 flex-col text-black'
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.18,
                },
              },
            }}
            initial='initial'
            animate='animate'
          >
            <div className='flex items-center'>
              <NewTitle>{titles[0]}</NewTitle>
            </div>

            <div className='flex items-center gap-[0.2em]'>
              <NewTitle>
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
              </NewTitle>

              <div
                className='max-md:absolute rounded-full overflow-hidden max-md:top-24 max-md:h-[1.2em] max-md:left-[12vw] h-[0.65em] aspect-video md:-mt-[0.15em] object-cover'
                // style={{ y: videoY }}
              >
                <Image
                  src={colorful_animals}
                  className='object-cover'
                  priority
                  alt='colorful animals'
                />
              </div>
            </div>

            <div className='flex gap-[0.2em] w-full items-center'>
              <div className='max-md:absolute md:-mt-[0.2em] max-md:right-2 max-md:bottom-[15%] rounded-full max-md:h-[1.2em] h-[0.65em] aspect-video overflow-hidden'>
                <Image
                  src={architecture}
                  className='object-cover w-full'
                  priority
                  loading='eager'
                  alt='example work'
                />
              </div>

              <NewTitle>{titles[2]}</NewTitle>
            </div>

            <div>
              <NewTitle>{titles[3]}</NewTitle>
            </div>
          </motion.div>
        </div>

        <svg
          className='fill-black will-change-transform max-md:absolute max-md:bottom-4 text-responsive-hero max-md:right-4 flex self-end'
          viewBox='0 0 24 24'
          height='1.15em'
          width='1.15em'
          // style={{ y: arrowY }}
        >
          <motion.path d='M18.707 12.707l-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z' />
        </svg>

        <div className='flex absolute max-md:left-[15vw] bottom-[18%] lg:right-[6vw] lg:bottom-[45%] font-sans text-responsive-xs gap-1 text-black'>
          <div className='pt-1'>
            <svg
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='fill-black w-3 h-3'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
              />
            </svg>
          </div>
          <p>
            Custom websites —<br /> down to earth service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

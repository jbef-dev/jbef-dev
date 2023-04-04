'use client';

import {
  motion,
  motionValue,
  useScroll,
  useSpring,
  useTransform,
  useWillChange,
} from 'framer-motion';
import Image from 'next/image';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ExplodingLetter } from './ExplodingLetter';

import architecture from '@/public/assets/img/architecture_preview.webp';
import colorful_animals from '@/public/assets/img/colorful_animals.png';
import { myAnimation } from '@/styles/customAnimations';
import useArtificialScroll from '@/hooks/useArtificialScroll';

interface Props {
  titles: string[];
}

const Hero = ({ titles }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const willChange = useWillChange();

  // const springInput = useSpring(scrollYProgress, myAnimation.spring.default);

  const springStiff = useSpring(scrollYProgress, {
    ...myAnimation.spring.fast,
    // stiffness: 1200,
    // damping: 200,
  });

  const headingStart = 0;
  const xLTR = useTransform(springStiff, [headingStart, 1], ['0em', '2.5em']);
  const xRTL = useTransform(springStiff, [headingStart, 1], ['0em', '-2.5em']);

  const videoY = useTransform(scrollYProgress, [0, 1], ['0rem', '-9rem']);
  // const img1Y = useTransform(springStiff, [0, 1], ['0rem', '-30rem']);
  const img2Y = useTransform(scrollYProgress, [0, 1], ['0rem', '-53rem']);
  const arrowY = useTransform(scrollYProgress, [0, 1], ['0rem', '-37rem']);

  return (
    <div
      ref={containerRef}
      className='flex relative w-full h-[200svh] justify-center'
    >
      <div className='fixed h-[100svh] top-0 max-w-screen-3xl font-title flex items-center justify-center w-full bg-white'>
        {/* <CircleSpring containerScroll={scrollYProgress} /> */}

        <motion.div
          className='flex leading-none text-responsive-hero justify-center items-start w-full px-2 flex-col text-black'
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
          <div className='flex items-center gap-[0.2em] pl-[0.9em]'>
            {/* <motion.div */}
            {/*   className='max-md:fixed max-md:right-[48vw] rounded-full max-md:top-4 max-md:h-[1.2em] h-[0.65em] aspect-square overflow-hidden' */}
            {/*   whileHover={{ scale: 1.4 }} */}
            {/*   style={{ y: img1Y }} */}
            {/* > */}
            {/*   <Image */}
            {/*     src={colorful_animals} */}
            {/*     className='object-cover' */}
            {/*     priority */}
            {/*     loading='eager' */}
            {/*     alt='example work' */}
            {/*   /> */}
            {/* </motion.div> */}

            <motion.h1
              className='flex'
              variants={myAnimation.variants.appear3d}
              transition={myAnimation.transition.easeOutSlow}
              style={{ x: xLTR }}
            >
              {titles[0]}
            </motion.h1>
          </div>

          <div className='flex items-center pl-[0.5em] md:pl-[0.5em] gap-[0.2em]'>
            <motion.h1
              className='flex tracking-[0.02em]'
              variants={myAnimation.variants.appear3d}
              transition={myAnimation.transition.easeOutSlow}
            >
              {titles[1].split('').map((letter, i) => (
                <ExplodingLetter
                  key={letter + i}
                  containerRef={containerRef}
                  letter={letter}
                />
              ))}
            </motion.h1>
            <div
              className='max-md:absolute rounded-full overflow-hidden max-md:top-24 max-md:h-[1.2em] max-md:left-[12vw] h-[0.65em] aspect-video object-cover'
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

          <div className='flex pl-[1.8em] md:pl-[0.3em] gap-[0.2em] items-center'>
            <div
              className='max-md:absolute max-md:right-2 max-md:bottom-[15%] rounded-full max-md:h-[1.2em] h-[0.65em] aspect-video overflow-hidden'
              // style={{ y: img2Y }}
            >
              <Image
                src={architecture}
                className='object-cover w-full'
                priority
                loading='eager'
                alt='example work'
              />
            </div>
            <motion.h1
              variants={myAnimation.variants.appear3d}
              transition={myAnimation.transition.easeOutSlow}
              style={{ x: xRTL }}
            >
              {titles[2]}
            </motion.h1>
          </div>

          <motion.h1
            className='flex w-full max-lg:justify-center lg:pl-[0.5em]'
            variants={myAnimation.variants.appear3d}
            transition={myAnimation.transition.easeOutSlow}
            style={{ x: xRTL }}
          >
            {titles[3]}
          </motion.h1>
        </motion.div>

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

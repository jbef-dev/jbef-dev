'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { ExplodingLetter } from './ExplodingLetter';

import architecture from '@/public/assets/img/architecture_preview.webp';
import colorful_animals from '@/public/assets/img/colorful_animals_preview.webp';
import { myAnimation } from '@/styles/customAnimations';
import { MotionSpan } from './MotionSpan';

interface Props {
  titles: string[];
}

const Hero = ({ titles }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // const springInput = useSpring(scrollYProgress, myAnimation.spring.default);

  const springStiff = useSpring(scrollYProgress, myAnimation.spring.fast);

  const headingStart = 0.1;
  const xLTR = useTransform(springStiff, [headingStart, 1], ['0%', '40%']);
  const xRTL = useTransform(springStiff, [headingStart, 1], ['0%', '-40%']);

  const videoY = useTransform(springStiff, [0, 1], ['0rem', '-71rem']);
  const img1Y = useTransform(springStiff, [0, 1], ['0rem', '-30rem']);
  const img2Y = useTransform(springStiff, [0, 1], ['0rem', '-60rem']);
  const arrowY = useTransform(springStiff, [0, 1], ['0%', '-100%']);

  return (
    <div ref={containerRef} className='flex w-full h-[200svh] justify-center'>
      <div className='fixed h-[100svh] top-0 max-w-screen-3xl font-title flex items-center justify-center w-full bg-white'>
        {/* <CircleSpring containerScroll={scrollYProgress} /> */}

        <motion.div
          className='flex leading-none text-responsive-hero justify-center items-start w-full px-2 flex-col text-black'
          variants={{
            initial: {},
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

            <MotionSpan className='flex' style={{ x: xLTR }}>
              <h1>{titles[0]}</h1>
            </MotionSpan>
          </div>

          <div className='flex items-center pl-[0.5em] md:pl-[0.5em] gap-[0.2em]'>
            <MotionSpan className='tracking-[0.02em]'>
              {titles[1].split('').map((letter, i) => (
                <ExplodingLetter
                  key={letter + i}
                  containerRef={containerRef}
                  letter={letter}
                />
              ))}
            </MotionSpan>
            <motion.div
              className='max-md:absolute rounded-full overflow-hidden max-md:-bottom-5 max-md:h-[1.2em] max-md:left-[9vw] h-[0.65em] aspect-video object-cover'
              whileHover={{ scale: 1.4 }}
              transition={myAnimation.transition.easeInOut}
              style={{ y: videoY }}
            >
              {/* <video */}
              {/*   src='/assets/vid/test_vid.mp4' */}
              {/*   autoPlay */}
              {/*   muted */}
              {/*   playsInline */}
              {/* /> */}
              <Image src={colorful_animals} priority alt='colorful animals' />
            </motion.div>
          </div>

          <div className='flex pl-[1.8em] md:pl-[0.3em] gap-[0.2em] items-center'>
            <motion.div
              className='max-md:absolute max-md:right-0 max-md:bottom-[15%] rounded-full max-md:h-[1.2em] h-[0.65em] aspect-video overflow-hidden'
              style={{ y: img2Y }}
            >
              <Image
                src={architecture}
                className='object-cover '
                priority
                loading='eager'
                alt='example work'
              />
            </motion.div>
            <MotionSpan style={{ x: xRTL }}>
              <h1>{titles[2]}</h1>
            </MotionSpan>
          </div>

          <MotionSpan
            className='flex w-full max-lg:justify-center lg:pl-[0.5em]'
            style={{ x: xRTL }}
          >
            <h1>{titles[3]}</h1>
          </MotionSpan>
        </motion.div>

        <motion.div
          className='max-md:absolute h-full max-md:bottom-4 text-responsive-hero max-md:right-4 flex items-end'
          style={{ y: arrowY }}
        >
          <motion.svg
            className='fill-black'
            viewBox='0 0 24 24'
            height='1.15em'
            width='1.15em'
            style={{ y: arrowY }}
          >
            <path d='M18.707 12.707l-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z' />
          </motion.svg>
        </motion.div>

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

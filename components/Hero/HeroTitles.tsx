'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

import architecture from '@/public/assets/img/architecture_preview.webp';
import colorful_animals from '@/public/assets/img/colorful_animals_preview.webp';

import { ExplodingLetter } from './ExplodingLetter';
import { MotionSpan } from './MotionSpan';
import { customSprings, customTransitions } from '@/ui/animation';

const HeroTitles = ({ titles }: { titles: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end -200vh'],
  });

  const springDefault = useSpring(scrollYProgress, customSprings.default);

  const springStiff = useSpring(scrollYProgress, customSprings.stiff);

  const startAnimate = 0.1;
  const xLTR = useTransform(springDefault, [startAnimate, 1], ['0%', '40%']);
  const xRTL = useTransform(springDefault, [startAnimate, 1], ['0%', '-40%']);

  const videoY = useTransform(scrollYProgress, [0, 1], ['0vh', '-105vh']);
  const img1Y = useTransform(scrollYProgress, [0, 1], ['0rem', '-21rem']);
  const img2Y = useTransform(scrollYProgress, [0, 1], ['0rem', '-82rem']);
  const arrowY = useTransform(scrollYProgress, [0, 1], ['0rem', '-25rem']);

  return (
    <div ref={containerRef} className='flex h-[250lvh] w-full justify-center'>
      <div className='fixed top-0 flex h-[100svh] w-full max-w-screen-3xl items-center justify-center bg-white font-title'>
        {/* <CircleSpring containerScroll={scrollYProgress} /> */}

        <motion.div
          className='flex w-full flex-col items-start justify-center px-2 text-responsive-5xl leading-none text-white'
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

          <div className='flex items-center gap-[0.2em] pl-[0.5em] md:pl-[0.5em]'>
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
              className='aspect-video h-[0.65em] overflow-hidden rounded-full object-cover max-md:absolute max-md:-bottom-5 max-md:left-[9vw] max-md:h-[1.2em]'
              whileHover={{ scale: 1.4 }}
              transition={customTransitions.easeInOut}
              style={{ y: videoY }}
            >
              {/* <video */}
              {/*   src='/assets/vid/test_vid.mp4' */}
              {/*   autoPlay */}
              {/*   muted */}
              {/*   playsInline */}
              {/* /> */}
              <Image src={colorful_animals} alt='colorful animals' />
            </motion.div>
          </div>

          <div className='flex items-center gap-[0.2em] pl-[1.8em] md:pl-[0.3em]'>
            <motion.div
              className='aspect-video h-[0.65em] overflow-hidden rounded-full max-md:absolute max-md:bottom-[15%] max-md:right-0 max-md:h-[1.2em]'
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
            className='flex w-full mix-blend-difference max-lg:justify-center lg:pl-[0.5em]'
            style={{ x: xRTL }}
          >
            <h1>{titles[3]}</h1>
          </MotionSpan>
        </motion.div>

        <motion.div className='self-end text-responsive-5xl max-md:absolute max-md:bottom-4 max-md:right-4'>
          <motion.svg
            // className='h-[clamp(3.5rem,_13vw,_11.5rem)] aspect-square'
            viewBox='0 0 24 24'
            className='fill-black'
            height='1.15em'
            width='1.15em'
            style={{ y: arrowY }}
          >
            <path d='M18.707 12.707l-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z' />
          </motion.svg>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroTitles;

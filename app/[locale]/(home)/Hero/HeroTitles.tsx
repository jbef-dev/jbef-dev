'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

import architecture from '@/public/assets/img/architecture_preview.webp';
import colorful_animals from '@/public/assets/img/colorful_animals_preview.webp';

import { myAnimation } from '@/styles/customAnimations';
import { ExplodingLetter } from './ExplodingLetter';
import { MotionSpan } from './MotionSpan';

const HeroTitles = ({ titles }: { titles: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end -200vh'],
  });

  const springDefault = useSpring(scrollYProgress, myAnimation.spring.default);

  const springStiff = useSpring(scrollYProgress, myAnimation.spring.fast);

  const startAnimate = 0.1;
  const xLTR = useTransform(springDefault, [startAnimate, 1], ['0%', '40%']);
  const xRTL = useTransform(springDefault, [startAnimate, 1], ['0%', '-40%']);

  const videoY = useTransform(scrollYProgress, [0, 1], ['0vh', '-105vh']);
  const img1Y = useTransform(scrollYProgress, [0, 1], ['0rem', '-21rem']);
  const img2Y = useTransform(scrollYProgress, [0, 1], ['0rem', '-82rem']);
  const arrowY = useTransform(scrollYProgress, [0, 1], ['0rem', '-25rem']);

  return (
    <div ref={containerRef} className='flex w-full h-[250lvh] justify-center'>
      <div className='fixed h-[100svh] top-0 max-w-screen-3xl font-title flex items-center justify-center w-full bg-white'>
        {/* <CircleSpring containerScroll={scrollYProgress} /> */}

        <motion.div
          className='flex leading-none text-responsive-hero justify-center items-start w-full px-2 flex-col text-white'
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

            <MotionSpan
              className='flex mix-blend-difference'
              style={{ x: xLTR }}
            >
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
              <Image src={colorful_animals} alt='colorful animals' />
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
            <MotionSpan className='mix-blend-difference' style={{ x: xRTL }}>
              <h1>{titles[2]}</h1>
            </MotionSpan>
          </div>

          <MotionSpan
            className='flex w-full max-lg:justify-center lg:pl-[0.5em] mix-blend-difference'
            style={{ x: xRTL }}
          >
            <h1>{titles[3]}</h1>
          </MotionSpan>
        </motion.div>

        <motion.div className='max-md:absolute max-md:bottom-4 text-responsive-hero max-md:right-4 self-end'>
          <motion.svg
            // className='h-[clamp(3.5rem,_13vw,_11.5rem)] aspect-square'
            viewBox='0 0 24 24'
            fill='currentColor'
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

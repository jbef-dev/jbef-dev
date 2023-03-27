'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { ExplodingLetter } from './ExplodingLetter';

import architecture from '@/public/assets/img/architecture_preview.webp';
import colorful_animals from '@/public/assets/img/colorful_animals_preview.webp';
import { myAnimation } from '@/styles/customAnimations';
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

  const videoY = useTransform(springStiff, [0, 1], ['0rem', '-75rem']);
  const img1Y = useTransform(springStiff, [0, 1], ['0rem', '-21rem']);
  const img2Y = useTransform(springStiff, [0, 1], ['0rem', '-62rem']);
  const arrowY = useTransform(springStiff, [0, 1], ['0rem', '-25rem']);

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
                  containerScroll={scrollYProgress}
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
              <video
                src='/assets/vid/test_vid.mp4'
                autoPlay
                muted
                playsInline
              />
              {/* <Image src={colorful_animals} alt='colorful animals' /> */}
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
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.8}
            stroke='currentColor'
            className='h-[clamp(3.5rem,_13vw,_11.5rem)] aspect-square'
            style={{ y: arrowY }}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V5'
            />
          </motion.svg>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroTitles;

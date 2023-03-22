'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { RiArrowDownLine } from 'react-icons/ri';
import { ExplodingLetter } from './ExplodingLetter';

import architecture from '@/public/img/architecture_preview.webp';
import colorful_animals from '@/public/img/colorful_animals_preview.webp';
import { MotionSpan } from './MotionSpan';
import { myAnimation } from '@/styles/customAnimations';
import { AOSText } from '@/ui/Typography/AOSText';
import { Heading1 } from '@/ui/Typography/Heading1';

interface Props {
  titles: string[];
}

export const Hero = ({ titles }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const springInput = useSpring(scrollYProgress, {
    ...myAnimation.spring.default,
    restDelta: 0.001,
  });

  const headingStart = 0.1;
  const xLTR = useTransform(springInput, [headingStart, 1], ['0%', '40%']);
  const xRTL = useTransform(springInput, [headingStart, 1], ['0%', '-40%']);

  const videoY = useTransform(scrollYProgress, [0, 1], ['0rem', '-95rem']);
  const img1Y = useTransform(scrollYProgress, [0, 1], ['0rem', '-29rem']);
  const img2Y = useTransform(scrollYProgress, [0, 1], ['0rem', '-82rem']);
  const arrowY = useTransform(scrollYProgress, [0, 1], ['0rem', '-35rem']);

  return (
    <div ref={containerRef} className='flex w-full h-[250lvh] justify-center'>
      <div className='fixed h-[100svh] top-0 max-w-screen-3xl flex items-center justify-center w-full bg-white'>
        {/* <CircleSpring containerScroll={scrollYProgress} /> */}

        <motion.div
          className='flex justify-center items-start w-full text-responsive-4xl px-2 flex-col text-white'
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

            <AOSText
              className='flex mix-blend-difference'
              style={{ x: xLTR }}
            >
              <Heading1>{titles[0]}</Heading1>
            </AOSText>
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
              <video src='/vid/test_vid.mp4' autoPlay muted playsInline />
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
              {titles[2]}
            </MotionSpan>
          </div>

          <MotionSpan
            className='flex w-full pl-[0.5em] mix-blend-difference'
            style={{ x: xRTL }}
          >
            {titles[3]}
          </MotionSpan>
        </motion.div>

        <motion.div
          className='max-md:absolute max-md:bottom-4 text-responsive-4xl max-md:right-4 self-end'
          style={{ y: arrowY }}
        >
          <RiArrowDownLine />
        </motion.div>

        <div className='flex absolute max-md:left-[15vw] bottom-[18%] lg:right-[6vw] lg:bottom-[45%] font-sans text-responsive-xs gap-1 text-white mix-blend-difference'>
          <div className='pt-1'>
            <svg
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='fill-white w-3 h-3'
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

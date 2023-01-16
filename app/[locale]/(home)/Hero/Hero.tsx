'use client';

import { FlexContainer } from '@/app/ui/Containers/FlexContainer';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { TitleLetter } from './TitleLetter';

import colorful_animals from '@/public/img/colorful_animals.png';
import architecture from '@/public/img/architecture_ai.png';
import { RiArrowDownLine } from 'react-icons/ri';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: mediaElementProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const { scrollYProgress: accentH2Progress } = useScroll({
    target: containerRef,
    offset: ['25% start', 'end 65%'],
  });

  const { scrollYProgress: normalH2Progress } = useScroll({
    target: containerRef,
    offset: ['30% start', 'end start'],
  });

  const headerVariants: { x: string[] }[] = [
    { x: ['0%', '50%'] },
    { x: ['0%', '-50%'] },
  ];

  const headerXLtr = useTransform(
    normalH2Progress,
    [0, 1],
    headerVariants[0].x
  );
  const headerXRtl = useTransform(
    normalH2Progress,
    [0, 1],
    headerVariants[1].x
  );

  const videoY = useTransform(mediaElementProgress, [0, 1], ['0vh', '-50vh']);
  const image1Y = useTransform(mediaElementProgress, [0, 1], ['0vh', '-80vh']);
  const image2Y = useTransform(mediaElementProgress, [0, 1], ['0vh', '-25vh']);
  const arrowY = useTransform(mediaElementProgress, [0, 1], ['0vh', '-45vh']);

  const MotionImage = motion(Image);

  return (
    <FlexContainer ref={containerRef} flexCol className='bg-gray-200'>
      <div className='h-screen -z-20'></div>
      <section className='fixed top-0 flex items-center max-w-screen-2xl justify-center h-screen px-3 md:px-6 w-full bg-gray-200'>
        <div className='flex w-full flex-col font-title leading-none tracking-wide text-responsive-10xl text-white uppercase'>
          <div className='flex items-center gap-[0.6em] pl-[1.2em]'>
            <MotionImage
              src={colorful_animals}
              className='max-md:absolute max-md:right-[48vw] max-md:top-[8vh] max-md:h-[1.8em] h-[1em] object-cover -z-20 justify-self-end w-auto'
              alt='example work'
              style={{ y: image2Y }}
            />
            <motion.h2
              className='mix-blend-difference'
              style={{ x: headerXLtr }}
            >
              BUILDING
            </motion.h2>
          </div>
          <div className='flex items-center pl-[0.25em] md:pl-[0.8em] gap-[0.6em]'>
            <h2 className='flex text-accent-dark font-special justify-end font-semibold'>
              {'CUSTOM'.split('').map((letter, i) => (
                <TitleLetter
                  key={letter + i}
                  containerScroll={accentH2Progress}
                  letter={letter}
                  counter={i}
                />
              ))}
            </h2>
            <motion.video
              className='max-md:absolute max-md:bottom-[5vh] max-md:h-[1.5em] max-md:left-[9vw] h-[1em] bottom-20 object-cover -z-10'
              src='/vid/test_vid.mp4'
              autoPlay
              muted
              playsInline
              style={{ y: videoY }}
            />
          </div>
          <div className='flex pl-[1.6em] md:pl-[0.4em] gap-[0.6em] items-center'>
            <MotionImage
              src={architecture}
              className='max-md:absolute max-md:right-0 max-md:bottom-[20vh] max-md:h-[1.9em] h-[1em] object-cover -z-20 justify-self-end w-auto'
              alt='example work'
              style={{ y: image1Y }}
            />

            <motion.h2
              className='mix-blend-difference -z-20'
              style={{ x: headerXRtl }}
            >
              WEB
            </motion.h2>
          </div>
          <div className='flex justify-between'>
            <motion.h2
              className='-z-10 mix-blend-difference'
              style={{ x: headerXRtl }}
            >
              EXPERIENCES
            </motion.h2>
            <motion.span
              className='max-md:absolute max-md:right-4 max-md:bottom-[5vh] mix-blend-difference'
              style={{ y: arrowY }}
            >
              <RiArrowDownLine />
            </motion.span>
          </div>
        </div>
      </section>
      <div className='relative h-screen -z-20 overflow-hidden'></div>
    </FlexContainer>
  );
};

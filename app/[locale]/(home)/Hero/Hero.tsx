'use client';

import { FlexContainer } from '@/app/ui/Containers/FlexContainer';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { TitleLetter } from './TitleLetter';

import architecture from '@/public/img/architecture_ai.png';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: mediaElementProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const { scrollYProgress: accentH2Progress } = useScroll({
    target: containerRef,
    offset: ['30% start', 'end start'],
  });

  const { scrollYProgress: normalH2Progress } = useScroll({
    target: containerRef,
    offset: ['50% start', 'end start'],
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

  return (
    <FlexContainer ref={containerRef} flexCol>
      <div className='h-screen'></div>
      <section className='fixed top-0 grid place-content-center h-screen w-full -z-10 '>
        <div className='flex flex-col w-fit items-center justify-center font-title leading-none lg:leading-[1.15] tracking-wide text-responsive-10xl uppercase'>
          <div className='flex w-full'>
            <motion.h2 style={{ x: headerXLtr }}>BUILDING</motion.h2>
          </div>
          <div className='flex gap-4 w-full justify-end'>
            <motion.video
              className='h-[1em] object-cover -z-10'
              src='/vid/test_vid.mp4'
              autoPlay
              muted
              playsInline
              style={{ y: videoY }}
            />
            <div className='flex text-accent-main font-medium'>
              {'CUSTOM'.split('').map((letter, i) => (
                <TitleLetter
                  key={letter + i}
                  containerScroll={accentH2Progress}
                  letter={letter}
                  counter={i}
                />
              ))}
            </div>
          </div>
          <div className='flex w-full pl-14 gap-20'>
            <motion.h2 style={{ x: headerXRtl }}>WEB</motion.h2>
            <Image src={architecture} className='h-[1em] object-cover w-auto' alt='example work' />
          </div>
          <div className='flex'>
            <motion.h2 style={{ x: headerXRtl }}>EXPERIENCES</motion.h2>
          </div>
        </div>
      </section>
      <section className='relative h-screen overflow-hidden'>
        <div className='absolute w-full rounded-full'></div>
      </section>
    </FlexContainer>
  );
};

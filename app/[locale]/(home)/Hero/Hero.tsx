'use client';

import { FlexContainer } from '@/app/ui/Containers/FlexContainer';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { TitleLetter } from './TitleLetter';

import colorful_animals from '@/public/img/colorful_animals.png';
import architecture from '@/public/img/architecture_ai.png';
import { RiArrowDownLine } from 'react-icons/ri';
import { useTranslations } from 'next-intl';

export const Hero = () => {
  const t = useTranslations('pages.home.hero');

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
    offset: ['15% start', 'end start'],
  });

  const headerVariants: { x: string[] }[] = [
    { x: ['0%', '40%'] },
    { x: ['0%', '-40%'] },
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

  const videoY = useTransform(mediaElementProgress, [0, 1], ['0vh', '-85vh']);
  const image1Y = useTransform(mediaElementProgress, [0, 1], ['0vh', '-20vh']);
  const image2Y = useTransform(mediaElementProgress, [0, 1], ['0vh', '-65vh']);
  const arrowY = useTransform(mediaElementProgress, [0, 1], ['0vh', '-55vh']);

  const MotionImage = motion(Image);

  return (
    <FlexContainer
      ref={containerRef}
      px={false}
      py={false}
      flexCol
      className='bg-gray-100'
    >
      <section className='fixed top-0 text-responsive-10xl md:text-responsive-9xl flex items-center justify-center h-full w-full bg-gray-100'>
        <div className='flex w-full max-w-screen-3xl justify-between'>
          <div className='flex justify-center items-start w-full px-4 flex-col font-title font-light leading-none text-white uppercase'>
            <div className='flex items-center gap-[0.4em] pl-[1em] md:pl-[0.9em]'>
              <MotionImage
                src={colorful_animals}
                className='max-md:fixed max-md:right-[48vw] max-md:top-[8vh] max-md:h-[1.8em] h-[1em] object-cover -z-20 justify-self-end w-auto'
                alt='example work'
                style={{ y: image1Y }}
              />
              <motion.h2
                className='mix-blend-difference'
                style={{ x: headerXLtr }}
              >
                {t('heading1')}
              </motion.h2>
            </div>
            <div className='flex items-center pl-[0.2em] md:pl-[0.6em] gap-[0.4em]'>
              <h2 className='flex text-accent-main italic font-special'>
                {t('heading2')
                  .split('')
                  // .split(/(\s+)/)
                  .map((letter, i) => (
                    <TitleLetter
                      key={letter + i}
                      containerScroll={accentH2Progress}
                      letter={letter}
                      count={i}
                    />
                  ))}
              </h2>
              <motion.video
                className='max-md:fixed max-md:bottom-[5vh] max-md:h-[1.5em] max-md:left-[9vw] h-[1em] bottom-20 object-cover -z-10'
                src='/vid/test_vid.mp4'
                autoPlay
                muted
                playsInline
                style={{ y: videoY }}
              />
            </div>
            <div className='flex pl-[1.8em] md:pl-[0.3em] gap-[0.4em] items-center'>
              <MotionImage
                src={architecture}
                className='max-md:fixed max-md:right-0 max-md:bottom-[20vh] max-md:h-[1.9em] h-[1em] object-cover -z-20 justify-self-end w-auto'
                alt='example work'
                style={{ y: image2Y }}
              />

              <motion.h2
                className='mix-blend-difference -z-20'
                style={{ x: headerXRtl }}
              >
                {t('heading3')}
              </motion.h2>
            </div>
            <div className='flex w-full max-md:justify-center'>
              <motion.h2
                className='-z-10 mix-blend-difference'
                style={{ x: headerXRtl }}
              >
                {t('heading4')}
              </motion.h2>
            </div>
          </div>

          <motion.span
            className='max-md:fixed max-md:bottom-4 max-md:right-4 self-end'
            style={{ y: arrowY }}
          >
            <RiArrowDownLine />
          </motion.span>
        </div>
      </section>

      <div className='relative h-[200vh] -z-20 overflow-hidden'></div>
    </FlexContainer>
  );
};

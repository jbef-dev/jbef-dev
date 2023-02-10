'use client';

import { use100vh } from '@/util/use100vh';
import clsx from 'clsx';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { RiArrowDownLine } from 'react-icons/ri';
import { ExplodingLetter } from './ExplodingLetter';

import architecture from '@/public/img/architecture_preview.webp';
import colorful_animals from '@/public/img/colorful_animals_preview.webp';
import { Heading1 } from '@/ui/Typography/Heading1';
import { MotionSpan } from './MotionSpan';
// import { myAnimation } from '@/styles/customAnimations';
import { CircleSpring } from './CircleSpring';

export const Hero = () => {
  const t = useTranslations('pages.home.hero');

  const viewportH = use100vh();

  const [vh, setVH] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (vh) return;
    if (viewportH === null) return;
    setVH(viewportH);
  }, [viewportH, vh]);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const headingStart = 0.3;
  const xLTR = useTransform(scrollYProgress, [headingStart, 1], ['0%', '40%']);
  const xRTL = useTransform(scrollYProgress, [headingStart, 1], ['0%', '-40%']);

  const videoY = useTransform(scrollYProgress, [0, 1], ['0rem', '-85rem']);
  const img1Y = useTransform(scrollYProgress, [0, 1], ['0rem', '-19rem']);
  const img2Y = useTransform(scrollYProgress, [0, 1], ['0rem', '-75rem']);
  const arrowY = useTransform(scrollYProgress, [0, 1], ['0rem', '-35rem']);

  const [overflowVisible, setOverflowVisible] = useState(false);

  return (
    <div
      ref={containerRef}
      className='relative flex flex-col items-center justify-center'
    >
      <div
        className='fixed top-0 text-responsive-3xl flex items-center justify-center w-full bg-gray-100'
        style={{
          height: vh || '100vh',
        }}
      >
        <div className='flex relative w-full max-w-screen-3xl justify-between'>
          <CircleSpring containerScroll={scrollYProgress} />

          <Heading1 className='flex w-full'>
            <motion.div
              className='flex justify-center items-start w-full px-2 flex-col text-white'
              variants={{
                initial: {},
                animate: {
                  transition: {
                    staggerChildren: 0.18,
                  },
                },
              }}
              onAnimationComplete={() => setOverflowVisible(true)}
              initial='initial'
              animate='animate'
            >
              <motion.div className='flex items-center gap-[0.2em] pl-[0.9em]'>
                <motion.div
                  className='max-md:fixed max-md:right-[48vw] max-md:top-4 max-md:h-[1.8em] h-[1em] aspect-square overflow-hidden -z-30'
                  style={{ y: img1Y }}
                >
                  <Image
                    src={colorful_animals}
                    className='object-cover'
                    priority
                    loading='eager'
                    alt='example work'
                  />
                </motion.div>
                <MotionSpan
                  className='flex mix-blend-difference'
                  style={{ x: xLTR }}
                >
                  {t('heading1')}
                </MotionSpan>
              </motion.div>

              <div className='flex items-center pl-[0.3em] md:pl-[0.5em] gap-[0.2em]'>
                <MotionSpan className='text-accent-main tracking-wider italic font-special'>
                  {t('heading2')
                    .split('')
                    // .split(/(\s+)/)
                    .map((letter, i) => (
                      <ExplodingLetter
                        key={letter + i}
                        containerScroll={scrollYProgress}
                        letter={letter}
                        count={i}
                      />
                    ))}
                  &nbsp;
                </MotionSpan>
                <motion.div
                  className='max-md:fixed max-md:bottom-0 max-md:h-[1.5em] max-md:left-[9vw] h-[1em] aspect-video object-cover -z-20'
                  style={{ y: videoY }}
                >
                  <video src='/vid/test_vid.mp4' autoPlay muted playsInline />
                </motion.div>
              </div>

              <div className='flex pl-[1.8em] md:pl-[0.3em] gap-[0.2em] items-center'>
                <motion.div
                  className='max-md:fixed max-md:right-0 max-md:bottom-[20%] max-md:h-[1.9em] h-[1em] aspect-video overflow-hidden -z-30'
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
                <MotionSpan
                  className='mix-blend-difference -z-30'
                  style={{ x: xRTL }}
                >
                  {t('heading3')}
                </MotionSpan>
              </div>

              <motion.div
                className={clsx(
                  'flex w-full max-md:justify-center -z-20 mix-blend-difference',
                  overflowVisible ? 'overflow-visible' : 'overflow-hidden'
                )}
                style={{ x: xRTL }}
              >
                <MotionSpan>{t('heading4')}</MotionSpan>
              </motion.div>
            </motion.div>
          </Heading1>

          <motion.div
            className='max-md:fixed max-md:bottom-4 -z-20 max-md:right-4 self-end'
            style={{ y: arrowY }}
          >
            <RiArrowDownLine />
          </motion.div>
        </div>

        <div className='flex absolute max-md:left-[15vw] bottom-[20%] md:right-[15vw] md:bottom-[45%] font-sans text-responsive-xs gap-1 -z-20 text-white mix-blend-difference'>
          <motion.div className='pt-1'>
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
          </motion.div>
          <p>
            Custom websites —<br /> down to earth service
          </p>
        </div>
      </div>

      <div style={{ height: (vh && 2.5 * vh) || '250vh' }}></div>
    </div>
  );
};

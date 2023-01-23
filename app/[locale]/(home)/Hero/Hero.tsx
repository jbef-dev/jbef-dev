'use client';

import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ExplodingLetter } from './ExplodingLetter';

import colorful_animals from '@/public/img/colorful_animals.png';
import architecture from '@/public/img/architecture_ai.png';
import { RiArrowDownLine } from 'react-icons/ri';
import { useTranslations } from 'next-intl';
import { SectionContainer } from '@/ui/Containers/SectionContainer';
import { use100vh } from '@/util/use100vh';
import { myAnimation } from '@/styles/customAnimations';
import clsx from 'clsx';

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
  const { scrollYProgress: mediaElementProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const { scrollYProgress: explodingProgress } = useScroll({
    target: containerRef,
    offset: ['15% start', 'center start'],
  });
  const { scrollYProgress: normalH2Progress } = useScroll({
    target: containerRef,
    offset: ['10% start', 'end start'],
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

  // const videoY = useTransform(mediaElementProgress, [0, 1], ['0%', '-85%']);
  // const image1Y = useTransform(mediaElementProgress, [0, 1], ['0%', '-20%']);
  // const image2Y = useTransform(mediaElementProgress, [0, 1], ['0%', '-65%']);
  // const arrowY = useTransform(mediaElementProgress, [0, 1], ['0%', '-55%']);

  const videoY = useTransform(mediaElementProgress, [0, 1], ['0rem', '-65rem']);
  const image1Y = useTransform(
    mediaElementProgress,
    [0, 1],
    ['0rem', '-10rem']
  );
  const image2Y = useTransform(
    mediaElementProgress,
    [0, 1],
    ['0rem', '-45rem']
  );
  const arrowY = useTransform(mediaElementProgress, [0, 1], ['0rem', '-35rem']);

  const rowVariants: Variants = {
    initial: {
      color: 'white',
    },
    animate: {
      color: 'white',
    },
  };

  const spanVariants: Variants = {
    initial: {
      y: '100%',
    },
    animate: {
      y: 0,
      transition: myAnimation.transition.easeOut,
    },
  };

  const MotionImage = motion(Image);

  const [overflowVisible, setOverflowVisible] = useState(false);

  return (
    <SectionContainer ref={containerRef} px={false} py={false} flexCol>
      <div
        className='fixed top-0 text-responsive-10xl md:text-responsive-9xl flex items-center justify-center w-full bg-gray-100'
        style={{
          height: vh || '100vh',
        }}
      >
        <div className='flex w-full max-w-screen-3xl justify-between'>
          <motion.h1
            className='flex justify-center items-start w-full px-2 flex-col font-title font-light leading-none text-white uppercase'
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            onAnimationComplete={() => setOverflowVisible(true)}
            initial='initial'
            animate='animate'
          >
            <motion.div
              className={clsx(
                'flex items-center gap-[0.3em] pl-[1em] md:pl-[0.9em]',
                overflowVisible ? 'overflow-visible' : 'overflow-hidden'
              )}
              variants={rowVariants}
            >
              <div className='max-md:absolute max-md:right-[48vw] max-md:top-4 max-md:h-[1.8em] h-[1em] overflow-hidden'>
                <MotionImage
                  src={colorful_animals}
                  className='object-cover -z-20 justify-self-end w-auto'
                  alt='example work'
                  style={{ y: image1Y }}
                  // fill={true}
                />
              </div>
              <motion.span
                className='flex mix-blend-difference'
                variants={spanVariants}
                style={{ x: headerXLtr }}
              >
                {t('heading1')}
              </motion.span>
            </motion.div>

            <motion.div
              className={clsx(
                'flex items-center pl-[0.3em] md:pl-[0.5em] gap-[0.3em]',
                overflowVisible ? 'overflow-visible' : 'overflow-hidden'
              )}
              variants={rowVariants}
            >
              <motion.span
                className='flex tracking-widest text-accent-main italic font-special'
                variants={spanVariants}
              >
                {t('heading2')
                  .split('')
                  // .split(/(\s+)/)
                  .map((letter, i) => (
                    <ExplodingLetter
                      key={letter + i}
                      containerScroll={explodingProgress}
                      letter={letter}
                      count={i}
                    />
                  ))}
              </motion.span>
              <motion.video
                className={clsx(
                  'max-md:absolute max-md:bottom-0 max-md:h-[1.5em] max-md:left-[9vw] h-[1em] object-cover -z-10',
                  overflowVisible ? 'overflow-visible' : 'overflow-hidden'
                )}
                src='/vid/test_vid.mp4'
                autoPlay
                muted
                playsInline
                style={{ y: videoY }}
              />
            </motion.div>

            <motion.div
              className={clsx(
                'flex pl-[1.8em] md:pl-[0.3em] gap-[0.3em] items-center',
                overflowVisible ? 'overflow-visible' : 'overflow-hidden'
              )}
              variants={rowVariants}
            >
              <div className='max-md:absolute max-md:right-0 max-md:bottom-[20%] max-md:h-[1.9em] h-[1em] aspect-video overflow-hidden'>
                <MotionImage
                  src={architecture}
                  className='object-cover -z-20 justify-self-end'
                  alt='example work'
                  style={{ y: image2Y }}
                />
              </div>
              <motion.span
                className='flex mix-blend-difference -z-20'
                variants={spanVariants}
                style={{ x: headerXRtl }}
              >
                {t('heading3')}
              </motion.span>
            </motion.div>

            <motion.div
              className={clsx(
                'flex w-full max-md:justify-center -z-10 mix-blend-difference',
                overflowVisible ? 'overflow-visible' : 'overflow-hidden'
              )}
              variants={rowVariants}
              style={{ x: headerXRtl }}
            >
              <motion.span variants={spanVariants}>{t('heading4')}</motion.span>
            </motion.div>
          </motion.h1>

          <motion.div
            className='max-md:absolute max-md:bottom-4 max-md:right-4 self-end'
            style={{ y: arrowY }}
          >
            <RiArrowDownLine />
          </motion.div>
        </div>

        <div className='flex absolute max-md:left-[15vw] bottom-[20%] md:right-[3vw] md:bottom-[40%] font-sans text-responsive-xs gap-1 -z-10 text-white mix-blend-difference'>
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

      <div style={{ height: (vh && 2.5 * vh) || '250vh' }}></div>
    </SectionContainer>
  );
};

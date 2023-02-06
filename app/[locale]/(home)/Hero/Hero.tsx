'use client';

import { myAnimation } from '@/styles/customAnimations';
import { use100vh } from '@/util/use100vh';
import clsx from 'clsx';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { RiArrowDownLine } from 'react-icons/ri';
import { ExplodingLetter } from './ExplodingLetter';

import architecture from '@/public/img/architecture_preview.webp';
import colorful_animals from '@/public/img/colorful_animals_preview.webp';
import { Heading1 } from '@/ui/Typography/Heading1';

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
    offset: ['25% start', '70% start'],
  });
  const { scrollYProgress: normalH2Progress } = useScroll({
    target: containerRef,
    offset: ['30% start', 'end start'],
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

  const videoY = useTransform(mediaElementProgress, [0, 1], ['0rem', '-85rem']);
  const image1Y = useTransform(
    mediaElementProgress,
    [0, 1],
    ['0rem', '-19rem']
  );
  const image2Y = useTransform(
    mediaElementProgress,
    [0, 1],
    ['0rem', '-75rem']
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
      y: '120%',
    },
    animate: {
      y: 0,
      transition: myAnimation.transition.easeOut,
    },
  };

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
        <div className='flex w-full max-w-screen-3xl justify-between'>
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
              <motion.div
                className={clsx(
                  'flex items-center gap-[0.2em] pl-[0.9em]',
                  overflowVisible ? 'overflow-visible' : 'overflow-hidden'
                )}
                variants={rowVariants}
              >
                <motion.div
                  className='max-md:absolute max-md:right-[48vw] max-md:top-4 max-md:h-[1.8em] h-[1em] aspect-square overflow-hidden -z-30'
                  style={{ y: image1Y }}
                >
                  <Image
                    src={colorful_animals}
                    className='object-cover'
                    priority
                    loading='eager'
                    alt='example work'
                    // fill={true}
                  />
                </motion.div>
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
                  'flex items-center pl-[0.3em] md:pl-[0.5em] gap-[0.2em]',
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
                <motion.div
                  className={clsx(
                    'max-md:absolute max-md:bottom-0 max-md:h-[1.5em] max-md:left-[9vw] h-[1em] aspect-video object-cover -z-20',
                    overflowVisible ? 'overflow-visible' : 'overflow-hidden'
                  )}
                  style={{ y: videoY }}
                >
                  <video src='/vid/test_vid.mp4' autoPlay muted playsInline />
                </motion.div>
              </motion.div>

              <motion.div
                className={clsx(
                  'flex pl-[1.8em] md:pl-[0.3em] gap-[0.2em] items-center',
                  overflowVisible ? 'overflow-visible' : 'overflow-hidden'
                )}
                variants={rowVariants}
              >
                <motion.div
                  className='max-md:absolute max-md:right-0 max-md:bottom-[20%] max-md:h-[1.9em] h-[1em] aspect-video overflow-hidden -z-30'
                  style={{ y: image2Y }}
                >
                  <Image
                    src={architecture}
                    className='object-cover '
                    priority
                    loading='eager'
                    alt='example work'
                  />
                </motion.div>
                <motion.span
                  className='flex mix-blend-difference -z-30'
                  variants={spanVariants}
                  style={{ x: headerXRtl }}
                >
                  {t('heading3')}
                </motion.span>
              </motion.div>

              <motion.div
                className={clsx(
                  'flex w-full max-md:justify-center -z-20 mix-blend-difference',
                  overflowVisible ? 'overflow-visible' : 'overflow-hidden'
                )}
                variants={rowVariants}
                style={{ x: headerXRtl }}
              >
                <motion.span variants={spanVariants}>
                  {t('heading4')}
                </motion.span>
              </motion.div>
            </motion.div>
          </Heading1>

          <motion.div
            className='max-md:absolute max-md:bottom-4 -z-20 max-md:right-4 self-end'
            style={{ y: arrowY }}
          >
            <RiArrowDownLine />
          </motion.div>
        </div>

        <div className='flex absolute max-md:left-[15vw] bottom-[20%] md:right-[15vw] md:bottom-[45%] font-sans text-responsive-xs gap-1 -z-20 text-white mix-blend-difference'>
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
    </div>
  );
};

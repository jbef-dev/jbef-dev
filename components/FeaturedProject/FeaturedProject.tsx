'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

import sea_placeholder from '@/public/assets/img/sea.webp';
import * as React from 'react';
import { customSprings } from '@/ui/animation';
import { Heading } from '@/ui/Typography';

interface FeaturedProjectProps {
  title: string[];
  videoURl: string;
  clientName: string;
  workDesc: string;
  workResult: string;
  year: number;
}

const FeaturedProject = ({
  title,
  videoURl,
  clientName,
  workDesc,
  workResult,
  year,
}: FeaturedProjectProps) => {
  const containerRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const springY = useSpring(scrollYProgress, customSprings.default);

  const imgY = useTransform(springY, [0, 1], ['20%', '-20%']);
  const rotateXImage = useTransform(springY, [0, 1], ['0deg', '10deg']);
  const rotateYImage = useTransform(springY, [0, 1], ['-105deg', '105deg']);
  const rotateZImage = useTransform(springY, [0, 1], ['-2deg', '3deg']);

  const imgY2 = useTransform(springY, [0, 1], ['130%', '60%']);
  const imgX2 = useTransform(springY, [0, 1], ['-50%', '-290%']);
  const rotateXImage2 = useTransform(springY, [0, 1], ['10deg', '-10deg']);
  const rotateYImage2 = useTransform(springY, [0, 1], ['215deg', '-225deg']);
  const rotateZImage2 = useTransform(springY, [0, 1], ['5deg', '-30deg']);

  const imgY3 = useTransform(springY, [0, 1], ['-60%', '-130%']);
  const imgX3 = useTransform(springY, [0, 1], ['50%', '290%']);
  const rotateXImage3 = useTransform(springY, [0, 1], ['10deg', '-10deg']);
  const rotateYImage3 = useTransform(springY, [0, 1], ['-275deg', '265deg']);
  const rotateZImage3 = useTransform(springY, [0, 1], ['-5deg', '35deg']);

  const titleY = useTransform(springY, [0, 1], ['-10%', '10%']);
  const titleScale = useTransform(springY, [0, 0.35, 1], [1.6, 1, 1]);
  const pillScale = useTransform(springY, [0, 0.35, 1], [0.85, 1, 1]);

  return (
    <article className='flex w-full max-w-screen-3xl flex-col'>
      <div
        ref={containerRef}
        className='relative grid min-h-[65svh] w-full tracking-tight lg:min-h-[80svh]'
      >
        <motion.div
          className='z-0 flex items-center justify-center text-black [grid-area:1/1]'
          style={{ y: titleY, scale: titleScale }}
        >
          <motion.span className='flex flex-col items-center whitespace-pre'>
            {title.map(t => (
              <Heading
                as='span'
                className='text-responsive-5xl tracking-tighter'
                key={t}
              >
                {t}
              </Heading>
            ))}
          </motion.span>
        </motion.div>

        <motion.div
          className='z-10 flex items-center justify-center text-white mix-blend-soft-light [grid-area:1/1]'
          style={{ y: titleY, scale: titleScale }}
        >
          <motion.span className='flex flex-col items-center whitespace-pre'>
            {title.map(t => (
              <Heading
                as='span'
                className='text-responsive-5xl tracking-tighter'
                key={t}
              >
                {t}
              </Heading>
            ))}
          </motion.span>
        </motion.div>

        <motion.div className='z-0 flex items-center justify-center [grid-area:1/1]'>
          <motion.div
            className='absolute aspect-[10/16] max-h-[25svh] max-w-[20vw] overflow-hidden rounded-full shadow-2xl shadow-neutral-500'
            style={{
              y: imgY2,
              x: imgX2,
              rotateX: rotateXImage2,
              rotateY: rotateYImage2,
              rotateZ: rotateZImage2,
              scale: pillScale,
              translateZ: -500,
            }}
          >
            <Image
              src={sea_placeholder}
              alt='primary image'
              className='h-full object-cover'
            />
            <div className='grayscale/30 absolute inset-0 rounded-full bg-black/30' />
          </motion.div>

          <motion.div
            className='relative z-10 aspect-[10/16] max-h-[70svh] max-w-[58vw] overflow-hidden rounded-full shadow-2xl shadow-neutral-500'
            style={{
              y: imgY,
              rotateX: rotateXImage,
              rotateY: rotateYImage,
              rotateZ: rotateZImage,
              scale: pillScale,
            }}
          >
            <Image
              src={sea_placeholder}
              alt='primary image'
              className='h-full object-cover'
            />
            <div className='grayscale/30 absolute inset-0 rounded-full bg-black/30' />
          </motion.div>

          <motion.div
            className='absolute z-0 aspect-[10/16] max-h-[25svh] max-w-[20vw] overflow-hidden rounded-full shadow-2xl shadow-neutral-500'
            style={{
              y: imgY3,
              x: imgX3,
              rotateX: rotateXImage3,
              rotateY: rotateYImage3,
              rotateZ: rotateZImage3,
              scale: pillScale,
              translateZ: -500,
            }}
          >
            <Image
              src={sea_placeholder}
              alt='primary image'
              className='h-full object-cover'
            />
            <div className='grayscale/30 absolute inset-0 rounded-full bg-black/30' />
          </motion.div>
        </motion.div>
      </div>

      <div className='flex w-full flex-wrap justify-between gap-x-10 px-4 py-4 text-responsive-sm font-light uppercase lg:px-8'>
        <span>— {clientName}</span>
        <span>— {workDesc}</span>
        <span>— {workResult}</span>
        <span>— Year {year}</span>
      </div>
    </article>
  );
};

export default FeaturedProject;

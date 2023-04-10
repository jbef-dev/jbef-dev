'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

import sea_placeholder from '@/public/assets/img/sea.webp';
import * as React from 'react';
import { customSprings } from '@/ui/animation';
import { Heading3 } from '@/ui/Typography';

interface FeaturedProjectProps {
  title: string[];
  videoURl: string;
  clientName: string;
  workDesc: string;
  year: number;
}

const FeaturedProject = ({
  title,
  videoURl,
  clientName,
  workDesc,
  year,
}: FeaturedProjectProps) => {
  const containerRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const springProgress = useSpring(scrollYProgress, customSprings.default);

  // const imgX = useTransform(springProgress, [0, 1], ['30%', '-30%']);
  const imgY = useTransform(springProgress, [0, 1], ['20%', '-20%']);
  const imgRotate = useTransform(springProgress, [0, 1], ['-10deg', '10deg']);

  const titleY = useTransform(springProgress, [0, 1], ['-10%', '10%']);
  const titleScale = useTransform(springProgress, [0, 0.35, 1], [1.8, 1, 1]);

  return (
    <div ref={containerRef} className='relative grid h-[75svh] w-full '>
      <motion.div
        className='z-10 flex items-center justify-center text-black [grid-area:1/1]'
        style={{ y: titleY, scale: titleScale }}
      >
        <motion.span className='flex flex-col items-center whitespace-pre'>
          {title.map(t => (
            <Heading3 key={t}>{t}</Heading3>
          ))}
        </motion.span>
      </motion.div>

      <motion.div
        className='z-10 flex  items-center justify-center [grid-area:1/1]'
        style={{
          // x: imgX,
          y: imgY,
          rotate: imgRotate,
        }}
      >
        <div className='relative aspect-[14/21] max-h-[50svh] max-w-[60vw] overflow-hidden'>
          <Image
            src={sea_placeholder}
            alt='primary image'
            className='h-full rounded-2xl object-cover'
          />
          <div className='grayscale/30 absolute inset-0 rounded-2xl bg-black/30'></div>
        </div>
      </motion.div>

      <motion.div
        className='z-20 flex items-center justify-center text-white mix-blend-soft-light [grid-area:1/1]'
        style={{ y: titleY, scale: titleScale }}
      >
        <motion.span className='flex flex-col items-center whitespace-pre'>
          {title.map(t => (
            <Heading3 key={t}>{t}</Heading3>
          ))}
        </motion.span>
      </motion.div>

      <div className='absolute bottom-0 flex w-full flex-wrap justify-between gap-x-10 px-4 py-4 text-responsive-sm font-light uppercase'>
        <span>{clientName}</span>
        <span>{workDesc}</span>
        <span>Year {year}</span>
      </div>
    </div>
  );
};

export default FeaturedProject;

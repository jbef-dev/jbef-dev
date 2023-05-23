'use client';

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

import * as React from 'react';
import { customSprings } from '@/ui/animation';
import { Heading } from '@/ui/Typography';
import {
  CenterFluidTexture,
  useCenterFluidCtx,
} from '@/components/CenterFluid/CenterFluidCtx';

interface FeaturedProjectProps {
  title: string[];
  clientName: string;
  workDesc: string;
  workResult: string;
  year: number;
  fluidTexture: CenterFluidTexture;
}

const FeaturedProject = ({
  title,
  clientName,
  workDesc,
  workResult,
  year,
  fluidTexture: fluidTextureName,
}: FeaturedProjectProps) => {
  const containerRef = React.useRef(null);

  const { setActiveTexture } = useCenterFluidCtx();

  const isVisible = useInView(containerRef, { once: false, amount: 0.75 });

  React.useEffect(() => {
    if (isVisible) setActiveTexture(fluidTextureName);
  }, [isVisible, fluidTextureName, setActiveTexture]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const springY = useSpring(scrollYProgress, customSprings.default);

  const titleY = useTransform(springY, [0, 1], ['-10%', '10%']);
  const titleScale = useTransform(springY, [0, 0.35, 1], [1.6, 1, 1]);

  return (
    <article className='flex w-full max-w-screen-3xl flex-col'>
      <div
        ref={containerRef}
        className='relative grid min-h-[65svh] w-full lg:min-h-[80svh]'
      >
        <motion.div
          className='-z-10 flex items-center justify-center text-black [grid-area:1/1]'
          style={{ y: titleY, scale: titleScale }}
        >
          <motion.span className='flex flex-col items-center whitespace-pre'>
            {title.map(t => (
              <Heading as='span' className='text-responsive-5xl' key={t}>
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
              <Heading as='span' className='text-responsive-5xl' key={t}>
                {t}
              </Heading>
            ))}
          </motion.span>
        </motion.div>
        <motion.div
          className='z-10 flex items-center justify-center text-transparent opacity-60 [grid-area:1/1]'
          style={{
            y: titleY,
            scale: titleScale,
            WebkitTextStroke: 1,
            WebkitTextStrokeColor: 'rgba(255,255,255,0.5)',
          }}
        >
          <motion.span className='flex flex-col items-center whitespace-pre'>
            {title.map(t => (
              <Heading as='span' className='text-responsive-5xl' key={t}>
                {t}
              </Heading>
            ))}
          </motion.span>
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

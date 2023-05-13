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
  fluidTextureName: CenterFluidTexture;
}

const FeaturedProject = ({
  title,
  clientName,
  workDesc,
  workResult,
  year,
  fluidTextureName,
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

        <motion.div className='-z-10 flex items-center justify-center [grid-area:1/1]'>
          {/* <motion.div */}
          {/*   // className='absolute aspect-[10/16] max-h-[25svh] max-w-[20vw] overflow-hidden rounded-3xl shadow-2xl shadow-neutral-500' */}
          {/*   className='absolute aspect-square max-h-[25svh] max-w-[20vw] overflow-hidden bg-black shadow-2xl shadow-neutral-500' */}
          {/*   style={{ */}
          {/*     y: imgY2, */}
          {/*     x: imgX2, */}
          {/*     rotateX: rotateXImage2, */}
          {/*     rotateY: rotateYImage2, */}
          {/*     rotateZ: rotateZImage2, */}
          {/*     scale: pillScale, */}
          {/*     translateZ: -500, */}
          {/*     borderRadius: fluidRadius2, */}
          {/*   }} */}
          {/* > */}
          {/*   <Image */}
          {/*     src={sea_placeholder} */}
          {/*     alt='primary image' */}
          {/*     className='h-full object-cover opacity-70' */}
          {/*   /> */}
          {/* </motion.div> */}

          {/* <motion.div */}
          {/*   className='relative z-10 aspect-square h-auto max-h-[65svh] w-auto max-w-[58vw] overflow-hidden bg-black shadow-2xl shadow-neutral-500' */}
          {/*   style={{ */}
          {/*     y: imgY, */}
          {/*     rotateX: rotateXImage, */}
          {/*     rotateY: rotateYImage, */}
          {/*     rotateZ: rotateZImage, */}
          {/*     scale: pillScale, */}
          {/*     borderRadius: fluidRadius1, */}
          {/*   }} */}
          {/* > */}
          {/*   <Image */}
          {/*     src={sea_placeholder} */}
          {/*     alt='primary image' */}
          {/*     className='h-full object-cover opacity-70' */}
          {/*   /> */}
          {/* </motion.div> */}

          {/* <motion.div */}
          {/*   className='absolute z-0 aspect-square max-h-[25svh] max-w-[20vw] overflow-hidden bg-black shadow-2xl shadow-neutral-500' */}
          {/*   style={{ */}
          {/*     y: imgY3, */}
          {/*     x: imgX3, */}
          {/*     rotateX: rotateXImage3, */}
          {/*     rotateY: rotateYImage3, */}
          {/*     rotateZ: rotateZImage3, */}
          {/*     scale: pillScale, */}
          {/*     translateZ: -500, */}
          {/*     borderRadius: fluidRadius3, */}
          {/*   }} */}
          {/* > */}
          {/*   <Image */}
          {/*     src={sea_placeholder} */}
          {/*     alt='primary image' */}
          {/*     className='h-full object-cover opacity-70' */}
          {/*   /> */}
          {/* </motion.div> */}
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

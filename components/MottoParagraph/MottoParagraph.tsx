'use client';

import MotionComponent from '@/ui/Animated/MotionComponent';
import { customSprings } from '@/ui/animation';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AmazonLogo } from './AmazonLogo';
import { CNGLawyers } from './CNGLawyersLogo';
import { GuidoAudisioLogo } from './GuidoAudisioLogo';
import Balancer from 'react-wrap-balancer';
import {
  AppearOnScroll,
  AppearOnScrollChild,
  BannerInfinite,
  StaggerText,
} from '@/ui/Animated';

const MottoParagraph = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const springProgress = useSpring(scrollYProgress, customSprings.default);

  // const textY = useTransform(springProgress, [0, 1], ['-10svh', '50svh']);
  const textY = useTransform(springProgress, [0, 1], ['-5svh', '5svh']);

  const logoOpacity = useTransform(
    springProgress,
    [0.1, 0.4, 0.8, 1],
    [0, 0.8, 0.8, 0]
  );
  // const logoScale = useTransform(springProgress, [0, 0.5, 1], [0.85, 1, 0.75]);

  const y1 = useTransform(springProgress, [0, 1], ['45svh', '15svh']);
  const rotateX1 = useTransform(springProgress, [0, 1], ['-20deg', '20deg']);
  const rotateY1 = useTransform(springProgress, [0, 1], ['220deg', '-210deg']);
  const rotateZ1 = useTransform(springProgress, [0, 1], ['-10deg', '15deg']);

  const y2 = useTransform(springProgress, [0, 1], ['-20svh', '-25svh']);
  const rotateX2 = useTransform(springProgress, [0, 1], ['-10deg', '30deg']);
  const rotateY2 = useTransform(springProgress, [0, 1], ['-120deg', '120deg']);
  const rotateZ2 = useTransform(springProgress, [0, 1], ['0deg', '15deg']);

  const y3 = useTransform(springProgress, [0, 1], ['30svh', '15svh']);
  const rotateX3 = useTransform(springProgress, [0, 1], ['0deg', '10deg']);
  const rotateY3 = useTransform(springProgress, [0, 1], ['-180deg', '170deg']);
  const rotateZ3 = useTransform(springProgress, [0, 1], ['-20deg', '5deg']);

  return (
    <MotionComponent
      ref={containerRef}
      asChild
      className='flex w-full flex-col items-center justify-center'
      style={{ y: textY }}
    >
      {/* <div ref={containerRef} className='grid w-full'> */}
      {/*   <h3 className='mx-auto w-full max-w-[90%] text-responsive-xl font-light leading-tight [grid-area:1/1]'> */}
      {/*     <Balancer> */}
      {/*       <StaggerText> */}
      {/*         Worked with companies ranging from local pioneering businesses to */}
      {/*         multi billion-dollar corporations */}
      {/*       </StaggerText> */}
      {/*     </Balancer> */}
      {/*   </h3> */}
      {/*   <div className='bottom-0 flex items-center justify-around opacity-70 [grid-area:1/1]'> */}
      {/*     <motion.div */}
      {/*       style={{ */}
      {/*         y: y1, */}
      {/*         rotateX: rotateX1, */}
      {/*         rotateY: rotateY1, */}
      {/*         rotateZ: rotateZ1, */}
      {/*         opacity: logoOpacity, */}
      {/*         // scale: logoScale, */}
      {/*       }} */}
      {/*     > */}
      {/*       <CNGLawyers className='h-12 lg:h-16' /> */}
      {/*     </motion.div> */}
      {/**/}
      {/*     <motion.div */}
      {/*       style={{ */}
      {/*         y: y2, */}
      {/*         rotateX: rotateX2, */}
      {/*         rotateY: rotateY2, */}
      {/*         rotateZ: rotateZ2, */}
      {/*         opacity: logoOpacity, */}
      {/*         // scale: logoScale, */}
      {/*       }} */}
      {/*     > */}
      {/*       <AmazonLogo className='h-9 lg:h-12' /> */}
      {/*     </motion.div> */}
      {/**/}
      {/*     <motion.div */}
      {/*       className='rounded-full bg-green-400 p-4 shadow-2xl shadow-neutral-500' */}
      {/*       style={{ */}
      {/*         y: y3, */}
      {/*         rotateX: rotateX3, */}
      {/*         rotateY: rotateY3, */}
      {/*         rotateZ: rotateZ3, */}
      {/*         opacity: logoOpacity, */}
      {/*         // scale: logoScale, */}
      {/*       }} */}
      {/*     > */}
      {/*       <GuidoAudisioLogo className='h-14 lg:h-20' /> */}
      {/*     </motion.div> */}
      {/*   </div> */}
      {/* </div> */}

      <div className='flex flex-col gap-y-20 md:gap-y-32'>
        <h3 className='mx-auto flex w-full justify-center text-responsive-xl font-light leading-tight [grid-area:1/1]'>
          <Balancer>
            <StaggerText
              amount={0.75}
              className='flex items-center justify-center'
            >
              Working with companies ranging from local pioneering businesses to
              world-renowned corporations
            </StaggerText>
          </Balancer>
        </h3>

        <AppearOnScroll asChild variants={{}}>
          <div className='relative w-full max-w-screen-sm overflow-hidden'>
            <AppearOnScrollChild asChild>
              <BannerInfinite duration={12} repeat={3}>
                <div className='ml-10 flex gap-x-10 opacity-75 md:ml-20 md:gap-x-20'>
                  <AmazonLogo className='h-12 lg:h-16' />
                  <CNGLawyers className='h-12 lg:h-16' />
                  <GuidoAudisioLogo className='h-12 lg:h-16' />
                </div>
              </BannerInfinite>
            </AppearOnScrollChild>
            <div className='absolute inset-0 border-l border-r border-neutral-300'></div>
          </div>
        </AppearOnScroll>
      </div>
    </MotionComponent>
  );
};

export default MottoParagraph;

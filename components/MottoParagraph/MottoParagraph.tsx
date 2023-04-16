'use client';

import MotionComponent from '@/ui/Animated/MotionComponent';
import { FlexContainer } from '@/ui/Containers';
import { Heading } from '@/ui/Typography';
import { customSprings } from '@/ui/animation';
import { useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AmazonLogo } from './AmazonLogo';
import { CNGLawyers } from './CNGLawyersLogo';
import { GuidoAudisioLogo } from './GuidoAudisioLogo';

const MottoParagraph = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const springProgress = useSpring(scrollYProgress, customSprings.default);

  const textY = useTransform(springProgress, [0, 1], ['0%', '45%']);

  return (
    <MotionComponent
      asChild
      className='min-h-[60svh] items-center'
      style={{ y: textY }}
    >
      <FlexContainer flexCol px ref={containerRef}>
        <Heading
          as='span'
          className='text-responsive-xl font-light lg:max-w-[80%] xl:max-w-[65%]'
        >
          Bringing <span className='font-medium'>high-end</span> web design and
          code to everyone.
        </Heading>

        <div className='mt-10 flex h-full flex-wrap items-center justify-around gap-x-20 gap-y-8 lg:mt-16'>
          <AmazonLogo className='h-10 opacity-70' />
          <CNGLawyers className='h-16 opacity-70' />
          <GuidoAudisioLogo className='h-16 opacity-70' />
        </div>
      </FlexContainer>
    </MotionComponent>
  );
};

export default MottoParagraph;

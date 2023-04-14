'use client';

import MotionComponent from '@/ui/Animated/MotionComponent';
import { FlexContainer } from '@/ui/Containers';
import { customSprings } from '@/ui/animation';
import { useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const MottoParagraph = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const springProgress = useSpring(scrollYProgress, customSprings.default);

  const textY = useTransform(springProgress, [0, 1], ['0%', '45%']);

  return (
    <FlexContainer flexCol px ref={containerRef}>
      <MotionComponent asChild style={{ y: textY }}>
        <span className='font-title text-responsive-xl font-extralight leading-tight lg:max-w-[75%]'>
          Bringing worldwide high-end web design and code to everyone without
          the pretentiousness.
        </span>
      </MotionComponent>
    </FlexContainer>
  );
};

export default MottoParagraph;

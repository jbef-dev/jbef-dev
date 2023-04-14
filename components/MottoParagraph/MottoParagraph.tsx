'use client';

import MotionComponent from '@/ui/Animated/MotionComponent';
import { FlexContainer } from '@/ui/Containers';
import { Heading6 } from '@/ui/Typography';
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
        <Heading6 className='font-extralight'>
          Bringing worldwide high-end web design and code to everyone without the
          pretentiousness.
        </Heading6>
      </MotionComponent>
    </FlexContainer>
  );
};

export default MottoParagraph;

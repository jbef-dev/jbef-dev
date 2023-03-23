'use client';

import { myAnimation } from '@/styles/customAnimations';
import { AOSText } from '@/ui/Typography/AOSText';
import { useScroll, useSpring, useTransform } from 'framer-motion';
import { ComponentPropsWithoutRef, useRef } from 'react';

interface Props extends ComponentPropsWithoutRef<typeof AOSText> {
  xStyle: number;
}

export const EvolveTitle = ({ xStyle, style, ...props }: Props) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ['start end', 'end start'],
    layoutEffect: false,
  });
  const springInput = useSpring(scrollYProgress, myAnimation.spring.default);

  const spanX1 = useTransform(springInput, [0, 1], ['0em', '1.2em']);
  const spanX2 = useTransform(springInput, [0, 1], ['0em', '-0.8em']);
  const spanX3 = useTransform(springInput, [0, 1], ['0.5em', '-0.7em']);
  const spanX4 = useTransform(springInput, [0, 1], ['-0.5em', '1.1em']);

  const spanXStyles = [spanX1, spanX2, spanX3, spanX4];

  return (
    <AOSText ref={titleRef} style={{ x: spanXStyles[xStyle] }} {...props}>
      {props.children}
    </AOSText>
  );
};

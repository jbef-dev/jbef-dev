import { myAnimation } from '@/styles/customAnimations';
import {
  HTMLMotionProps,
  motion,
  MotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

interface TitleLetterProps extends HTMLMotionProps<'span'> {
  containerScroll: MotionValue<number>;
  count: number;
  letter: string;
}

export const ExplodingLetter = ({
  containerScroll,
  count,
  letter,
  ...rest
}: TitleLetterProps) => {
  const outputOpts: { x: string[]; y: string[]; rotate: string[] }[] = [
    { x: ['0%', '-65%'], y: ['0%', '-101%'], rotate: ['0deg', '-35deg'] },
    { x: ['0%', '-95%'], y: ['0%', '70%'], rotate: ['0deg', '25deg'] },
    { x: ['0%', '-45%'], y: ['0%', '-55%'], rotate: ['0deg', '-30deg'] },
    { x: ['0%', '-35%'], y: ['0%', '85%'], rotate: ['0deg', '10deg'] },
    { x: ['0%', '44%'], y: ['0%', '-88%'], rotate: ['0deg', '20deg'] },
    { x: ['0%', '74%'], y: ['0%', '73%'], rotate: ['0deg', '-35deg'] },
    { x: ['0%', '89%'], y: ['0%', '-99%'], rotate: ['0deg', '20deg'] },
    { x: ['0%', '109%'], y: ['0%', '89%'], rotate: ['0deg', '-20deg'] },
  ];

  const ref = useRef<HTMLSpanElement>(null);

  const springOpts = {
    stiffness: myAnimation.values.stiffness.high,
    damping: myAnimation.values.damping.max,
  };

  const springInput = useSpring(containerScroll, springOpts);

  const animationStart = 0.25;

  const y = useTransform(springInput, [animationStart, 1], outputOpts[count].y);
  const x = useTransform(springInput, [animationStart, 1], outputOpts[count].x);
  const rotate = useTransform(springInput, [animationStart, 1], outputOpts[count].rotate);
  const scale = useTransform(springInput, [animationStart, 1], [1, 1.3]);

  // RENDER WHITE SPACE!!!
  if (letter === ' ') {
    return <span>&nbsp;</span>;
  }

  return (
    <motion.span
      className='-mr-1 bg-transparent'
      ref={ref}
      style={{
        y,
        x,
        rotate,
        scale,
      }}
      {...rest}
    >
      {letter}
    </motion.span>
  );
};

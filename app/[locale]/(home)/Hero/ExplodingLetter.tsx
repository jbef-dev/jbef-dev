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
    { x: ['0%', '-45%'], y: ['0%', '-91%'], rotate: ['0deg', '-35deg'] },
    { x: ['0%', '-65%'], y: ['0%', '60%'], rotate: ['0deg', '25deg'] },
    { x: ['0%', '-35%'], y: ['0%', '-45%'], rotate: ['0deg', '-30deg'] },
    { x: ['0%', '-25%'], y: ['0%', '75%'], rotate: ['0deg', '10deg'] },
    { x: ['0%', '34%'], y: ['0%', '-78%'], rotate: ['0deg', '20deg'] },
    { x: ['0%', '64%'], y: ['0%', '63%'], rotate: ['0deg', '-35deg'] },
    { x: ['0%', '79%'], y: ['0%', '-89%'], rotate: ['0deg', '20deg'] },
    { x: ['0%', '89%'], y: ['0%', '79%'], rotate: ['0deg', '-20deg'] },
  ];

  const ref = useRef<HTMLSpanElement>(null);

  const springOpts = {
    stiffness: myAnimation.values.stiffness.high,
    damping: myAnimation.values.damping.max,
  };

  const springInput = useSpring(containerScroll, springOpts);

  const y = useTransform(springInput, [0, 1], outputOpts[count].y);
  const x = useTransform(springInput, [0, 1], outputOpts[count].x);
  const rotate = useTransform(springInput, [0, 1], outputOpts[count].rotate);

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
      }}
      {...rest}
    >
      {letter}
    </motion.span>
  );
};

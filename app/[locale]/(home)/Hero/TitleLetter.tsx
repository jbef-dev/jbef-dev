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
  counter: number;
  letter: string;
}

export const TitleLetter = ({
  containerScroll,
  counter,
  letter,
  ...rest
}: TitleLetterProps) => {
  const motionVariants: { x: string[]; y: string[]; rotate: string[] }[] = [
    { x: ['0%', '-90%'], y: ['0%', '-91%'], rotate: ['0deg', '-40deg'] },
    { x: ['0%', '-70%'], y: ['0%', '60%'], rotate: ['0deg', '30deg'] },
    { x: ['0%', '-50%'], y: ['0%', '-45%'], rotate: ['0deg', '-30deg'] },
    { x: ['0%', '84%'], y: ['0%', '-78%'], rotate: ['0deg', '20deg'] },
    { x: ['0%', '64%'], y: ['0%', '63%'], rotate: ['0deg', '-40deg'] },
    { x: ['0%', '89%'], y: ['0%', '-89%'], rotate: ['0deg', '40deg'] },
  ];

  const ref = useRef<HTMLSpanElement>(null);

  const springOptions = {
    stiffness: 350,
    damping: 100,
  };

  const springProgress = useSpring(containerScroll, springOptions);

  const y = useTransform(
    // containerScroll,
    springProgress,
    [0, 1],
    motionVariants[counter].y
  );

  const x = useTransform(
    springProgress,
    // scrollYProgress,
    [0, 1],
    motionVariants[counter].x
  );

  const rotate = useTransform(
    springProgress,
    // scrollYProgress,
    [0, 1],
    motionVariants[counter].rotate
  );

  return (
    <motion.span
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

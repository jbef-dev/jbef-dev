import { customSprings } from '@/ui/animation';
import {
  HTMLMotionProps,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { forwardRef, RefObject } from 'react';

interface TitleLetterProps extends HTMLMotionProps<'span'> {
  containerRef: RefObject<any>;
  // count: number;
  letter: string;
}

const ExplodingLetter = forwardRef<HTMLSpanElement, TitleLetterProps>(
  ({ containerRef, letter, ...rest }, ref) => {
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start start', 'end start'],
    });

    // const outputOpts: { x: string[]; y: string[]; rotate: string[] }[] = [
    //   { x: ['0%', '-65%'], y: ['0%', '-101%'], rotate: ['0deg', '-35deg'] },
    //   { x: ['0%', '-95%'], y: ['0%', '70%'], rotate: ['0deg', '25deg'] },
    //   { x: ['0%', '-45%'], y: ['0%', '-55%'], rotate: ['0deg', '-30deg'] },
    //   { x: ['0%', '-35%'], y: ['0%', '85%'], rotate: ['0deg', '10deg'] },
    //   { x: ['0%', '44%'], y: ['0%', '-88%'], rotate: ['0deg', '20deg'] },
    //   { x: ['0%', '74%'], y: ['0%', '73%'], rotate: ['0deg', '-35deg'] },
    //   { x: ['0%', '89%'], y: ['0%', '-99%'], rotate: ['0deg', '20deg'] },
    //   { x: ['0%', '109%'], y: ['0%', '89%'], rotate: ['0deg', '-20deg'] },
    // ];

    const xMax = Math.floor(
      (Math.random() * 100 + 70) * (Math.round(Math.random()) * 2 - 1)
    );
    const yMax = Math.floor(
      (Math.random() * 100 + 78) * (Math.round(Math.random()) * 2 - 1)
    );
    const rotateMax = Math.floor(
      (Math.random() * 100 + 30) * (Math.round(Math.random()) * 2 - 1)
    );
    const outputOpts = {
      x: ['0%', `${xMax}%`],
      y: ['0%', `${yMax}%`],
      rotate: ['0deg', `${rotateMax}deg`],
    };

    const springInput = useSpring(scrollYProgress, customSprings.default);

    const animationStart = 0;
    const animationEnd = 1;

    const y = useTransform(
      springInput,
      [animationStart, animationEnd],
      outputOpts.y
    );
    const x = useTransform(
      springInput,
      [animationStart, animationEnd],
      outputOpts.x
    );
    const rotate = useTransform(
      springInput,
      [animationStart, animationEnd],
      outputOpts.rotate
    );

    // RENDER WHITE SPACE!!!
    if (letter === ' ') {
      return <span>&nbsp;</span>;
    }

    // const startLeftColor = Math.floor(Math.random() * 100 - 75);
    // const startRightColor = Math.floor(Math.random() * 100 + 20);
    // const midLeftColor = Math.floor(Math.random() * 100 - 75);
    // const midRightColor = Math.floor(Math.random() * 100 + 20);
    // const endLeftColor = Math.floor(Math.random() * 100 - 75);
    // const endRightColor = Math.floor(Math.random() * 100 + 20);
    // const startRotation = Math.floor(Math.random() * 360 + 90);
    // const midRotation = Math.floor(Math.random() * 360 + 20);
    // const endRotation = Math.floor(Math.random() * 360 + 180);

    return (
      <motion.span
        className='-mr-2 bg-gradient-to-br from-primary via-primary to-secondary bg-clip-text pr-1 text-transparent'
        ref={ref}
        animate={
          {
            // backgroundImage: ['#E7277B', '#F59A2C'],
            // backgroundImage: [
            //   `linear-gradient(${startRotation}deg, rgba(245,154,44,0.7) ${startLeftColor}%, rgba(231,39,123,1) ${startRightColor}%)`,
            //   `linear-gradient(${midRotation}deg, rgba(245,154,44,0.7) ${midLeftColor}%, rgba(231,39,123,1) ${midRightColor}%)`,
            //   `linear-gradient(${endRotation}deg, rgba(245,154,44,0.7) ${endLeftColor}%, rgba(231,39,123,1) ${endRightColor}%)`,
            // ],
          }
        }
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 3.5,
          ease: 'easeInOut',
        }}
        style={{
          y: y,
          x: x,
          rotate: rotate,
          // opacity: opacity,
        }}
        {...rest}
      >
        {letter}
      </motion.span>
    );
  }
);

ExplodingLetter.displayName = 'ExplodingLetter';

export { ExplodingLetter };

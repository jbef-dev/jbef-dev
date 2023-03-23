'use client';

import { HTMLMotionProps } from 'framer-motion';

import { myAnimation } from '@/styles/customAnimations';
import clsx from 'clsx';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ComponentPropsWithoutRef, useRef } from 'react';

export interface SeparatorProps extends HTMLMotionProps<'div'> {
  position: 'top' | 'bottom';
}

const SeparatorRounded = ({
  position = 'top',
  className,
  ...props
}: SeparatorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: containerProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const springInput = useSpring(containerProgress, myAnimation.spring.default);
  const containerScaleY = useTransform(springInput, [0, 1], [1, 1.8]);
  const circleScaleX = useTransform(springInput, [0, 1], [1.2, 2.1]);

  return (
    <motion.div
      ref={containerRef}
      className={clsx([
        'absolute overflow-hidden left-0 flex items-center justify-center w-full h-[clamp(5rem,10vw,18rem)]',
        position === 'top' ? 'bottom-[99.9%]' : 'top-full',
      ])}
      style={{
        originY: '100%',
        scaleY: containerScaleY,
      }}
    >
      <motion.div
        className={clsx([
          'absolute w-full h-[200%]',
          position === 'top' ? 'top-0' : 'bottom-0',
          className,
        ])}
        style={{
          borderRadius: '100% 100% 0 0',
          originX: '50%',
          originY: '0%',
          scaleX: circleScaleX,
        }}
        {...props}
      ></motion.div>
    </motion.div>
  );
};

const SeparatorMargin = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={clsx('relative py-[clamp(5rem,10vw,11rem)]', className)}
      {...props}
    ></div>
  );
};

// const SquareSeparator = (props: SeparatorProps) => {
//   const { className, ...rest } = props;
//
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress: separatorProgress } = useScroll({
//     target: containerRef,
//     offset: ['start end', 'start start'],
//   });
//
//   const arrLen = 10;
//
//   return (
//     <motion.div
//       className={clsx([
//         'relative flex items-center justify-center w-full h-[25vh] overflow-hidden',
//         className,
//       ])}
//       ref={containerRef}
//       {...rest}
//     >
//       <Square
//         counter={0}
//         containerProgress={separatorProgress}
//         className='bg-black'
//       />
//       {/* {[...new Array(arrLen)].map((_, i) => ( */}
//       {/*   <Square */}
//       {/*     key={i} */}
//       {/*     counter={i / (arrLen / 5)} */}
//       {/*     containerProgress={scrollYProgress} */}
//       {/*   /> */}
//       {/* ))} */}
//     </motion.div>
//   );
// };

export {
  SeparatorMargin,
  SeparatorRounded,
  // SquareSeparator
};

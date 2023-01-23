'use client';

import clsx from 'clsx';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { SeparatorProps } from '../Separator';
import { Square } from './Square';

const SquareSeparator = (props: SeparatorProps) => {
  const { className, ...rest } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: separatorProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const arrLen = 10;

  return (
    <motion.div
      className={clsx([
        'relative flex items-center justify-center w-full h-[25vh] overflow-hidden',
        className,
      ])}
      ref={containerRef}
      {...rest}
    >
      <Square
        counter={0}
        containerProgress={separatorProgress}
        className='bg-black'
      />
      {/* {[...new Array(arrLen)].map((_, i) => ( */}
      {/*   <Square */}
      {/*     key={i} */}
      {/*     counter={i / (arrLen / 5)} */}
      {/*     containerProgress={scrollYProgress} */}
      {/*   /> */}
      {/* ))} */}
    </motion.div>
  );
};

export default SquareSeparator;

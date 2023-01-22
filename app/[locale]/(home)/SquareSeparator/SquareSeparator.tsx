'use client';

import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { Square } from './Square';

const SquareSeparator = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: separatorProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const arrLen = 10;

  return (
    <div className='relative flex w-screen h-[50vh] overflow-hidden' ref={containerRef}>
      <div className='flex w-full h-full overflow-visible items-center justify-center'>
        <Square counter={1} containerProgress={separatorProgress} />
        {/* {[...new Array(arrLen)].map((_, i) => ( */}
        {/*   <Square */}
        {/*     key={i} */}
        {/*     counter={i / (arrLen / 5)} */}
        {/*     containerProgress={scrollYProgress} */}
        {/*   /> */}
        {/* ))} */}
      </div>
    </div>
  );
};

export default SquareSeparator;

import { myAnimation } from '@/styles/customAnimations';
import clsx from 'clsx';
import { HTMLMotionProps, motion, Variants } from 'framer-motion';
// import { useState } from 'react';

export const MotionSpan = ({
  children,
  className,
  ...props
}: HTMLMotionProps<'span'>) => {
  // const [overflowVisible, setOverflowVisible] = useState(false);

  // const spanVariants: Variants = {
  //   initial: {
  //     y: '120%',
  //   },
  //   animate: {
  //     y: 0,
  //     transition: myAnimation.transition.easeOut,
  //   },
  // };

  // const spanVariants: Variants = {
  //   initial: {
  //     // y: '120%',
  //     opacity: 0,
  //     rotateX: '75deg',
  //     rotateY: '4deg',
  //     rotateZ: '-10deg',
  //     // transform: 'rotateX(75deg) rotateY(10deg) rotateZ(-9deg)',
  //     transformOrigin: 'bottom',
  //     transition: myAnimation.transition.easeOutSlow,
  //   },
  //   animate: {
  //     // y: 0,
  //     opacity: 1,
  //     rotateX: '0deg',
  //     rotateY: '0deg',
  //     rotateZ: '0deg',
  //     transition: {
  //       delay: myAnimation.values.duration.fastest,
  //       // duration: 4,
  //       ...myAnimation.transition.easeOutSlow,
  //     },
  //   },
  // };

  return (
    <motion.span
      className={clsx(
        'flex',
        // overflowVisible ? 'overflow-visible' : 'overflow-hidden',
        className
      )}
      {...props}
    >
      <motion.span
        className='flex'
        // onAnimationComplete={() => setOverflowVisible(true)}
        variants={myAnimation.variants.appear3d}
        transition={myAnimation.transition.easeOutSlow}
      >
        {children}
      </motion.span>
    </motion.span>
  );
};

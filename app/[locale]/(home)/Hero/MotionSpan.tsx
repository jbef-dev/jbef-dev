import { myAnimation } from '@/styles/customAnimations';
import clsx from 'clsx';
import { HTMLMotionProps, motion, Variants } from 'framer-motion';
import { useState } from 'react';

export const MotionSpan = ({
  children,
  className,
  ...props
}: HTMLMotionProps<'span'>) => {
  const [overflowVisible, setOverflowVisible] = useState(false);

  const spanVariants: Variants = {
    initial: {
      y: '120%',
    },
    animate: {
      y: 0,
      transition: myAnimation.transition.easeOut,
    },
  };

  return (
    <motion.span
      className={clsx(
        'flex',
        overflowVisible ? 'overflow-visible' : 'overflow-hidden',
        className
      )}
      {...props}
    >
      <motion.span
        className='flex'
        onAnimationComplete={() => setOverflowVisible(true)}
        variants={spanVariants}
      >
        {children}
      </motion.span>
    </motion.span>
  );
};

import { myAnimation } from '@/styles/customAnimations';
import clsx from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import { forwardRef, ReactNode } from 'react';

const MotionSpan = forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'> & { children: ReactNode }
>(({ children, className, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={clsx('flex', className)}
      variants={myAnimation.variants.appear3d}
      transition={myAnimation.transition.easeOutSlow}
      {...props}
    >
      {children}
    </motion.div>
  );
});

// MotionSpan.displayName = 'MotionSpan';

export { MotionSpan };

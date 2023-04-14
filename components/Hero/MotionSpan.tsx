import { customTransitions, customVariants } from '@/ui/animation';
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
      variants={customVariants.appear3d}
      transition={customTransitions.easeOutSlow}
      {...props}
    >
      {children}
    </motion.div>
  );
});

MotionSpan.displayName = 'MotionSpan';

export { MotionSpan };

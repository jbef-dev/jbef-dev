import { myAnimation } from '@/styles/customAnimations';
import { Heading1 } from '@/ui/Typography/Heading1';
import clsx from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import { ReactNode } from 'react';

export const MotionSpan = ({
  children,
  className,
  ...props
}: HTMLMotionProps<'div'> & { children: ReactNode }) => {
  return (
    <motion.div
      className={clsx('flex', className)}
      variants={myAnimation.variants.appear3d}
      transition={myAnimation.transition.easeOutSlow}
      {...props}
    >
      <Heading1>{children}</Heading1>
    </motion.div>
  );
};

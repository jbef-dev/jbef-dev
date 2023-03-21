import { myAnimation } from '@/styles/customAnimations';
import { Heading1 } from '@/ui/Typography/Heading1';
import clsx from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';

export const MotionSpan = forwardRef<
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
      <Heading1>{children}</Heading1>
    </motion.div>
  );
});

// export const MotionSpan = forwardRef<
//   HTMLSpanElement,
//   ComponentPropsWithoutRef<'span'>
// >(({ children, className, ...props }, ref) => {
//   return (
//     <span ref={ref} className={clsx('flex', className)} {...props}>
//       <motion.span
//         className='flex leading-none'
//         variants={myAnimation.variants.appear3d}
//         transition={myAnimation.transition.easeOutSlow}
//         style={props.style}
//       >
//         {children}
//       </motion.span>
//     </span>
//   );
// });

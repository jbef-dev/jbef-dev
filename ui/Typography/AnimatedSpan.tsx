'use client';

import { useRef } from 'react';
import { HTMLMotionProps, motion, useInView, Variants } from 'framer-motion';
import { myAnimation } from '@/styles/customAnimations';
import clsx from 'clsx';

interface Props extends HTMLMotionProps<'span'> {
  children: string;
}

export const AnimatedSpan = ({ children, className, ...props }: Props) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const isVisible = useInView(spanRef, { once: false, amount: 0.6 });

  const spanVariants: Variants = {
    initial: {
      // y: '120%',
      opacity: 0,
      rotateX: '75deg',
      rotateY: '4deg',
      rotateZ: '-10deg',
      // transform: 'rotateX(75deg) rotateY(10deg) rotateZ(-9deg)',
      transformOrigin: 'bottom',
      transition: myAnimation.transition.easeOut,
    },
    animate: {
      // y: 0,
      opacity: 1,
      rotateX: '0deg',
      rotateY: '0deg',
      rotateZ: '0deg',
      transition: {
        delay: myAnimation.values.duration.fastest,
        ...myAnimation.transition.easeOut,
      },
    },
  };

  return (
    <motion.span ref={spanRef} className={clsx('flex', className)} {...props}>
      <motion.span
        className='flex w-full'
        initial='initial'
        animate={isVisible ? 'animate' : 'initial'}
        variants={spanVariants}
      >
        {children}
      </motion.span>
    </motion.span>
  );
};

// 'use client';
//
// import { ComponentPropsWithoutRef, useRef } from 'react';
// import clsx from 'clsx';
// import { useInView } from '@/hooks/useInView';
//
// interface Props extends ComponentPropsWithoutRef<'span'> {
//   children: string;
// }
//
// export const AnimatedSpan = ({ children, className, ...props }: Props) => {
//   const spanRef = useRef<HTMLSpanElement>(null);
//
//   const isVisible = useInView(spanRef, {
//     once: false,
//     root: null,
//     rootMargin: '0px 0px 0% 0px',
//     threshold: 1,
//   });
//   return (
//     <span ref={spanRef} className={clsx('flex', className)} {...props}>
//       <span
//         className={clsx(
//           'flex w-full will-change-transform transition-all duration-1000',
//           isVisible
//             ? 'opacity-100 [transform:_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)]'
//             : 'opacity-0 [transform:_rotateX(75deg)_rotateY(10deg)_rotateZ(-9deg)]'
//         )}
//       >
//         {children}
//       </span>
//     </span>
//   );
// };

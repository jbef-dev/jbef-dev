'use client';

import { forwardRef, ReactNode, useState } from 'react';
import clsx, { ClassValue } from 'clsx';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { customTransitions, customVariants } from '@/ui/animation';

type ButtonFlavors =
  | 'basic'
  | 'gradientOutline'
  | 'transparent'
  | 'square'
  | 'outlined'
  | 'glass';
type ButtonSizes = 'sm' | 'md' | 'lg';
type ButtonColorModes = 'light' | 'dark';

interface ButtonProps extends HTMLMotionProps<'button'> {
  flavor?: ButtonFlavors;
  icon?: boolean | ReactNode;
  isLoading?: boolean;
  buttonSize?: ButtonSizes;
  glow?: boolean;
  colorMode?: ButtonColorModes;
}

const flavors: {
  [k in ButtonFlavors]: ClassValue | undefined;
} = {
  basic: undefined,

  gradientOutline: clsx(
    'bg-gradient-to-r from-primary to-secondary text-black'
  ),
  transparent: clsx('bg-transparent'),
  glass: clsx('backdrop-blur-lg bg-grayscale-800/40'),
  square: undefined,
  outlined: clsx('ring-1 ring-inset'),
};

const size: { [s in ButtonSizes]: ClassValue } = {
  sm: clsx('px-3 py-[6px] text-sm'),
  md: clsx('px-4 py-2 text-base'),
  lg: clsx('px-5 py-3 text-lg'),
};

const mode: { [m in ButtonColorModes]: ClassValue } = {
  light: clsx('text-white ring-neutral-400 fill-white'),
  dark: clsx('text-black ring-neutral-600 fill-black'),
};

const DefaultIcon = () => {
  return (
    <motion.svg
      viewBox='1 0 5 9'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-[9px] overflow-visible'
    >
      <motion.path
        d='M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8'
        stroke='currentColor'
        strokeWidth='1.0'
        variants={{
          hover: {
            translateX: '1px',
          },
          active: {
            translateX: '1px',
          },
        }}
      />
      <motion.path
        d='M7 4.5H0'
        stroke='currentColor'
        strokeWidth='1.0'
        className='-translate-x-0.5'
        variants={{
          initial: {
            opacity: 0,
          },
          hover: {
            opacity: 1,
          },
          active: {
            opacity: 1,
          },
        }}
      />
    </motion.svg>
  );
};

const LoadingSpinner = () => (
  <div aria-label='Loading...' role='status'>
    <svg className='h-5 w-5 animate-spin' viewBox='3 3 18 18'>
      <path
        className='opacity-20'
        d='M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z'
      ></path>
      <path
        className='opacity-100'
        d='M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z'
      ></path>
    </svg>
  </div>
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      flavor = 'basic',
      icon = false,
      isLoading = false,
      buttonSize = 'md',
      colorMode = 'dark',
      glow = false,
      className,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const [isHover, setIsHover] = useState(false);

    // const ref = useForwardedRef(forwardedRef);

    const toggleHover = () => {
      setIsHover(h => !h);
    };

    // useOutsideClick(toggleHover, isHover, ref);

    return (
      <motion.button
        ref={forwardedRef}
        className={clsx(
          'relative cursor-pointer touch-none select-none overflow-hidden rounded-full',
          flavors[flavor],
          size[buttonSize],
          mode[colorMode],
          className
        )}
        initial='initial'
        whileHover='animate'
        onTapStart={toggleHover}
        onTouchCancel={() => {
          setTimeout(() => setIsHover(false), 300);
          console.log('touch cancel');
        }}
        onTouchMove={() => {
          setTimeout(() => setIsHover(false), 300);
          console.log('touch move');
        }}
        onTouchEnd={() => setTimeout(() => setIsHover(false), 300)}
        onTap={() => setTimeout(() => setIsHover(false), 300)}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onMouseUp={() => setIsHover(false)}
        {...props}
      >
        {/* THIS IS THE ANIMATED BACKGROUND TO APPEAR */}
        <AnimatePresence mode='wait'>
          {isHover ? (
            <motion.div
              className='absolute inset-0 z-10 flex items-center justify-center overflow-hidden rounded-full'
              initial='initial'
              animate='animate'
              exit='exit'
            >
              <motion.div
                className='h-[200%] w-full rounded-[400%] bg-primary'
                variants={customVariants.fromBottom}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 40,
                  bounce: 0,
                }}
              ></motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {flavor == 'gradientOutline' ? (
          <motion.div
            className='absolute inset-0.5 z-0 rounded-full bg-white'
            variants={{
              hover: {
                left: '3px',
                top: '3px',
                bottom: '3px',
                right: '3px',
              },
            }}
            transition={customTransitions.easeInOut}
          ></motion.div>
        ) : null}
        <motion.div className='relative z-20 flex h-full w-full items-center justify-center gap-x-4 leading-none'>
          <>
            {children}
            {icon !== false ? (
              <motion.div
                className='relative z-20 flex items-center justify-center'
                variants={{
                  active: {
                    translateX: '0.25rem',
                  },
                  hover: {
                    translateX: '0.25rem',
                  },
                }}
                transition={customTransitions.easeInOut}
              >
                {isLoading ? (
                  <LoadingSpinner />
                ) : icon === true ? (
                  <DefaultIcon />
                ) : (
                  icon
                )}
              </motion.div>
            ) : null}
          </>
        </motion.div>
      </motion.button>
    );
  }
);

export { Button, type ButtonProps };

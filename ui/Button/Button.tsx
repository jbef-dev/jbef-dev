import React, { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';
import clsx, { ClassValue } from 'clsx';

type ButtonFlavors =
  | 'basic'
  | 'gradientOutline'
  | 'transparent'
  | 'square'
  | 'outlined'
  | 'glass';
type ButtonSizes = 'sm' | 'md' | 'lg';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  flavor?: ButtonFlavors;
  icon?: boolean | React.ReactNode;
  isLoading?: boolean;
  buttonSize?: ButtonSizes;
  glow?: boolean;
}

const flavors: { [k in ButtonFlavors]: ClassValue } = {
  basic: clsx('bg-accent-main text-white rounded-sm hover:bg-accent-main'),
  gradientOutline: clsx('bg-gradient-to-r from-primary to-secondary text-black'),
  transparent: clsx('bg-transparent'),
  glass: clsx('backdrop-blur-lg bg-grayscale-800/40'),
  square: undefined,
  outlined: clsx('ring-1 text-black ring-black hover:ring-2'),
};

const size: { [s in ButtonSizes]: ClassValue } = {
  sm: clsx('px-3 py-[6px] text-sm'),
  md: clsx('px-4 py-2 text-base'),
  lg: clsx('px-5 py-3 text-lg'),
};

const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: {
  condition: boolean;
  wrapper: (c: ReactNode) => any; // WARNING FIX THIS ANY
  children: ReactNode;
}) => (condition ? wrapper(children) : children);

const DefaultIcon = () => {
  return (
    <svg
      viewBox='1 0 5 9'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-[9px] overflow-visible duration-[inherit]'
    >
      <g className='duration-[inherit] group-active:translate-x-[1px] group-hover:translate-x-[1px]'>
        <path
          d='M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8'
          stroke='currentColor'
          strokeWidth='1.0'
        />
      </g>
      <g className='translate-x-[-2px] opacity-0 duration-[inherit] group-active:opacity-100 group-hover:opacity-100'>
        <path d='M7 4.5H0' stroke='currentColor' strokeWidth='1.0' />
      </g>
    </svg>
  );
};

const LoadingSpinner = () => (
  <div aria-label='Loading...' role='status'>
    <svg className='h-5 w-5 animate-spin' viewBox='3 3 18 18'>
      <path
        className='fill-white/20'
        d='M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z'
      ></path>
      <path
        className='fill-white'
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
      glow = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'group relative flex cursor-pointer items-center justify-center gap-4 duration-200 ease-in-out leading-none',
          flavors[flavor],
          size[buttonSize],
          className
        )}
        {...props}
      >
        <ConditionalWrapper
          condition={flavor === 'gradientOutline'}
          wrapper={children => (
            <>
              <div className='absolute top-0.5 left-0.5 right-0.5 bottom-0.5 group-hover:left-[3px] group-hover:top-[3px] group-hover:bottom-[3px] group-hover:right-[3px] bg-white z-0 duration-200 ease-in-out'></div>
              <div className='z-10'>{children}</div>
            </>
          )}
        >
          {children}
          {icon !== false ? (
            <div className='flex items-center justify-center transition-all group-hover:translate-x-1 group-active:translate-x-1'>
              {isLoading ? (
                <LoadingSpinner />
              ) : icon === true ? (
                <DefaultIcon />
              ) : (
                icon
              )}
            </div>
          ) : null}
        </ConditionalWrapper>
      </button>
    );
  }
);

export { Button, type ButtonProps };

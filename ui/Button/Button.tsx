import React, { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';
import clsx, { ClassValue } from 'clsx';
import { DefaultIcon } from './DefaultIcon';
import { LoadingSpinner } from './LoadingSpinner';

type ButtonFlavors =
  | 'basic'
  | 'gradient'
  | 'transparent'
  | 'square'
  | 'outlined'
  | 'glass';
type ButtonSizes = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  flavor?: ButtonFlavors;
  icon?: boolean | React.ReactNode;
  isLoading?: boolean;
  buttonSize?: ButtonSizes;
  glow?: boolean;
}

const flavors: { [k in ButtonFlavors]: ClassValue } = {
  basic: clsx('bg-accent-main text-white rounded-sm hover:bg-accent-main'),
  gradient: clsx('bg-gradient-to-r from-primary to-secondary text-black'),
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
          condition={flavor === 'gradient'}
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

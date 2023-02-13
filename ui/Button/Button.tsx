import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
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
  gradient: clsx(
    'bg-gradient-to-r from-primary to-secondary text-black font-medium'
  ),
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      flavor = 'basic',
      icon = false,
      isLoading = false,
      buttonSize = 'md',
      glow = false,
      className,
      children,
      ...rest
    } = props;

    return (
      <button
        ref={ref}
        className={clsx(
          'group relative flex cursor-pointer items-center justify-center gap-4 duration-200 ease-in-out leading-none',
          flavors[flavor],
          size[buttonSize],
          className
        )}
        {...rest}
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
      </button>
    );
  }
);

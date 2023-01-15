import type { ComponentPropsWithRef, PropsWithChildren } from 'react';
import { ButtonFlavors, ButtonProps, ButtonSizes } from './Button';
import React from 'react';
import clsx, { ClassValue } from 'clsx';
import { defaultValues } from './Button';

const flavors: { [k in ButtonFlavors]: ClassValue } = {
  basic: clsx(
    // 'gradient-primary text-grayscale-50 rounded-sm hover:gradient-primary-light'
    'bg-accent-dark text-white rounded-sm hover:bg-accent-main'
  ),
  transparent: clsx('bg-transparent'),
  black: clsx(
    'bg-gradient-to-br from-black to-black rounded-sm hover:bg-primary-900'
  ),
  glass: clsx('backdrop-blur-lg bg-grayscale-800/40'),
  square: undefined,
  outlined: clsx('ring-1 text-black ring-black hover:ring-2'),
};

const size: { [s in ButtonSizes]: ClassValue } = {
  sm: clsx('px-3 py-[6px]'),
  md: clsx('px-4 py-2'),
  lg: clsx('px-5 py-3'),
};

export const ButtonContainer = (
  props: PropsWithChildren<ButtonProps> & ComponentPropsWithRef<'button'>
) => {
  const {
    isLoading = defaultValues['isLoading'],
    flavor = defaultValues['flavor'],
    direction = defaultValues['direction'],
    buttonSize = defaultValues['buttonSize'],
    glow = defaultValues['glow'],
    icon, // unused in ButtonContainer
    className,
    children,
    ...rest
  } = props;

  return (
    <button
      className={clsx(
        'group relative flex cursor-pointer items-center justify-center gap-4 duration-200 ease-in-out',
        direction === 'ltr' ? 'flex-row' : 'flex-row-reverse',
        size[buttonSize],
        flavors[flavor],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

import { PropsWithChildren } from 'react';
import { ButtonProps, ButtonSizes } from './Button';
import clsx, { ClassValue } from 'clsx';
import { defaultValues } from './Button';

export const ButtonText = (props: PropsWithChildren<ButtonProps>) => {
  const { buttonSize = defaultValues['buttonSize'], children } = props;

  const size: { [s in ButtonSizes]: ClassValue } = {
    sm: clsx('text-sm'),
    md: clsx('text-base'),
    lg: clsx('text-lg'),
  };

  return (
    <span
      className={clsx(
        'flex items-center leading-none justify-center',
        size[buttonSize]
      )}
    >
      {children}
    </span>
  );
};

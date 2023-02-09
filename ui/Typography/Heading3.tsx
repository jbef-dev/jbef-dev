import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface Heading3Props extends HTMLAttributes<HTMLHeadingElement> {}

export const Heading3 = (props: PropsWithChildren<Heading3Props>) => {
  const { className, children, ...rest } = props;
  return (
    <h1
      className={clsx(
        'leading-[1.1] uppercase font-light text-responsive-xl',
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  );
};

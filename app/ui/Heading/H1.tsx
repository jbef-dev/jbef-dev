import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface H1Props extends HTMLAttributes<HTMLHeadingElement> {}

export const Heading1 = (props: PropsWithChildren<H1Props>) => {
  const { className, children, ...rest } = props;
  return (
    <h1
      className={clsx(
        'text-responsive-6xl leading-none tracking-tight',
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  );
};

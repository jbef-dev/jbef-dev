import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface Heading1Props extends HTMLAttributes<HTMLHeadingElement> {}

export const Heading1 = (props: PropsWithChildren<Heading1Props>) => {
  const { className, children, ...rest } = props;
  return (
    <h1
      className={clsx(
        'flex text-responsive-4xl leading-none font-title',
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  );
};

import clsx from 'clsx';
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

interface Heading1Props extends HTMLAttributes<HTMLHeadingElement> {}

export const Heading1 = forwardRef<HTMLHeadingElement, Heading1Props>(
  (props: PropsWithChildren<Heading1Props>, ref) => {
    const { className, children, ...rest } = props;
    return (
      <h1
        ref={ref}
        className={clsx(
          'text-responsive-3xl leading-tight font-title',
          className
        )}
        {...rest}
      >
        {children}
      </h1>
    );
  }
);

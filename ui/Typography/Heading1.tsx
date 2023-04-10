import clsx from 'clsx';
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

interface Heading1Props extends HTMLAttributes<HTMLHeadingElement> {}

const Heading1 = forwardRef<HTMLHeadingElement, Heading1Props>(
  (props: PropsWithChildren<Heading1Props>, forwardedRef) => {
    const { className, children, ...rest } = props;
    return (
      <h1
        ref={forwardedRef}
        className={clsx(
          'font-title text-responsive-5xl leading-tight',
          className
        )}
        {...rest}
      >
        {children}
      </h1>
    );
  }
);

export default Heading1;

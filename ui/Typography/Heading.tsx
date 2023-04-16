import clsx from 'clsx';
import * as React from 'react';

type HeadingTag = ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span') &
  keyof JSX.IntrinsicElements;

interface HeadingProps<T extends HeadingTag> {
  as: T;
}

const Heading = React.forwardRef(
  <T extends HeadingTag>(
    {
      className,
      as,
      children,
      ...props
    }: HeadingProps<T> & React.ComponentPropsWithoutRef<T>,
    forwardedRef: React.ForwardedRef<HTMLHeadingElement>
  ) => {
    const Comp = as;

    return (
      <Comp
        ref={forwardedRef}
        className={clsx('block pb-[0.12em] font-title leading-none', className)}
        {...(props as any)}
      >
        {children}
      </Comp>
    );
  }
);

export { Heading };

import clsx from 'clsx';
import * as React from 'react';

const Heading2 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<'h2'>
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <h2
      ref={forwardedRef}
      className={clsx(
        'font-title text-responsive-5xl leading-[1.1]',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
});

export default Heading2;

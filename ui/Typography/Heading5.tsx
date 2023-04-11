import clsx from 'clsx';
import * as React from 'react';

const Heading5 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<'h5'>
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <h5
      ref={forwardedRef}
      className={clsx(
        'font-title text-responsive-3xl leading-tight',
        className
      )}
      {...props}
    >
      {children}
    </h5>
  );
});

export default Heading5;

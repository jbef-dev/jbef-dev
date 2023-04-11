import clsx from 'clsx';
import * as React from 'react';

const Heading6 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<'h6'>
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <h6
      ref={forwardedRef}
      className={clsx(
        'font-title text-responsive-xl leading-tight',
        className
      )}
      {...props}
    >
      {children}
    </h6>
  );
});

export default Heading6;

import clsx from 'clsx';
import * as React from 'react';

const Heading3 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<'h3'>
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <h3
      ref={forwardedRef}
      className={clsx(
        'font-title text-responsive-3xl leading-tight',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
});

export default Heading3;

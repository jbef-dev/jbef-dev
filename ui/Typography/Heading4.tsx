import clsx from 'clsx';
import * as React from 'react';

const Heading4 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<'h4'>
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <h4
      ref={forwardedRef}
      className={clsx(
        'font-title text-responsive-3xl leading-tight',
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
});

export default Heading4;

import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

const SeparatorMargin = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={clsx('relative pt-[clamp(5rem,10vw,18rem)]', className)}
      {...props}
    ></div>
  );
};

export default SeparatorMargin;

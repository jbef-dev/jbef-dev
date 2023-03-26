import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

const SeparatorMargin = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={clsx('relative py-[clamp(5rem,10vw,11rem)]', className)}
      {...props}
    ></div>
  );
};

export default SeparatorMargin;

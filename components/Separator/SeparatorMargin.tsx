import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

const SeparatorMargin = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={clsx('relative pt-[clamp(3.5rem,10vw,16rem)]', className)}
      {...props}
    ></div>
  );
};

export default SeparatorMargin;

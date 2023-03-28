import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

const SeparatorMargin = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={clsx('relative py-[clamp(1.5rem,5vw,8rem)]', className)}
      {...props}
    ></div>
  );
};

export default SeparatorMargin;

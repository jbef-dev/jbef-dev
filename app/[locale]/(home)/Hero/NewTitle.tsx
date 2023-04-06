import { myAnimation } from '@/styles/customAnimations';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { ComponentPropsWithoutRef } from 'react';

const NewTitle = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={clsx(
        'overflow-hidden leading-none -mt-[0.13em] pb-[0.13em]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default NewTitle;

import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface Heading3Props extends HTMLAttributes<HTMLHeadingElement> {}

const Heading3 = (props: PropsWithChildren<Heading3Props>) => {
  const { className, children, ...rest } = props;
  return (
    <h3
      className={clsx('leading-tight font-title text-responsive-xl', className)}
      {...rest}
    >
      {children}
    </h3>
  );
};

export default Heading3;

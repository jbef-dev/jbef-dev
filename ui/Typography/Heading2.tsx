import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface Heading2Props extends HTMLAttributes<HTMLHeadingElement> {}

const Heading2 = (props: PropsWithChildren<Heading2Props>) => {
  const { className, children, ...rest } = props;
  return (
    <h2
      className={clsx(
        'text-responsive-2xl leading-[1.1] font-title',
        className
      )}
      {...rest}
    >
      {children}
    </h2>
  );
};

export default Heading2;

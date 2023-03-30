import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface PageContainerProps extends HTMLAttributes<HTMLElement> {
  mt?: boolean;
  mb?: boolean;
  py?: boolean;
  pb?: boolean;
  pt?: boolean;
  gap?: boolean;
}

const PageContainer = (props: PropsWithChildren<PageContainerProps>) => {
  const {
    children,
    mt = false,
    mb = false,
    py = false,
    pb = false,
    pt = false,
    gap = false,
    className,
    ...rest
  } = props;

  return (
    <main
      className={clsx(
        'block overflow-hidden',
        { 'mt-28 lg:mt-36': mt },
        { 'mb-32': mb },
        (py || pb || pt) && {
          'pt-4 lg:pt-10 first:pt-0': pt || py,
          'pb-4 lg:pb-10': pb || py,
        },
        className
      )}
      {...rest}
    >
      {children}
    </main>
  );
};

export default PageContainer;

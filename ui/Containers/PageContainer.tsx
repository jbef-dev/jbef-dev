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

export const PageContainer = ({
  children,
  mt = true,
  mb = true,
  py = false,
  pb = true,
  pt = true,
  gap = false,
  ...props
}: PropsWithChildren<PageContainerProps>) => {
  const { className, ...rest } = props;

  return (
    <main
      className={clsx(
        'block',
        { 'mt-28 lg:mt-36': mt },
        { 'mb-32': mb },
        py && {
          'pt-4 lg:pt-10 first:pt-0': pt,
          'pb-4 lg:pb-10': pb,
        },
        className
      )}
      {...rest}
    >
      {children}
    </main>
  );
};

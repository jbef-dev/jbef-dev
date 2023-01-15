import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {
  mt?: boolean;
  mb?: boolean;
  py?: boolean;
  gap?: boolean;
}

export const PageContainer = ({
  children,
  mt = true,
  mb = true,
  py = false,
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
        { 'pt-4 lg:pt-10': py },
        className
      )}
      {...rest}
    >
      {children}
    </main>
    // <main
    //   className={clsx(
    //     'relative flex w-full flex-col items-center',
    //     { 'gap-36 lg:gap-48': gap },
    //     { 'mt-28 lg:mt-36': mt },
    //     // '[nth-last-child]:mb-20',
    //     { 'mb-32': mb },
    //     { 'pt-4 lg:pt-10': py },
    //     className
    //   )}
    //   {...rest}
    // >
    //   {/* <Head> */}
    //   {/*   <title>{title}</title> */}
    //   {/*   <meta name='description' content={description} /> */}
    //   {/* </Head> */}
    //   {children}
    // </main>
  );
};

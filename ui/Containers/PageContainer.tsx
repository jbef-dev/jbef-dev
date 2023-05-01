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

const PageContainer = ({
  children,
  mt = false,
  mb = false,
  py = false,
  pb = false,
  pt = false,
  gap = false,
  className,
  ...props
}: PropsWithChildren<PageContainerProps>) => {
  return (
    // <main className='overflow-hidden bg-black p-1.5 lg:p-3'>
    <main>
      {/* <div */}
      {/*   className='fixed inset-0 z-10 h-20 bg-red-400' */}
      {/*   style={{ backgroundClip: '#clip' }} */}
      {/* ></div> */}
      {/* <div id='clip' className='fixed inset-2 z-10 h-20 bg-transparent'></div> */}
      {/* <div className='pointer-events-none fixed left-0 right-0 top-0 z-50 h-14 overflow-hidden after:absolute after:inset-1.5 after:h-20 after:rounded-t-2xl after:content-[""] after:[box-shadow:_0px_0px_0px_2000px_rgb(0,0,0)] after:lg:inset-3' /> */}
      <div
        className={clsx(
          // 'relative rounded-2xl bg-white',
          'relative',
          { 'mt-28 lg:mt-36': mt },
          { 'mb-32': mb },
          (py || pb || pt) && {
            'pt-4 first:pt-0 lg:pt-10': pt || py,
            'pb-4 lg:pb-10': pb || py,
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    </main>
  );
};

export default PageContainer;

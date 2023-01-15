// 'use client';

import clsx from 'clsx';
import { PropsWithChildren } from 'react';
// import useNavbar from './useNavbar';

const NavbarContainer = (props: PropsWithChildren) => {
  // const { showNavbar, navbarTransparent } = useNavbar();

  return (
    <header
      className={clsx([
        'fixed top-0 left-0 right-0 flex h-12 items-center justify-center px-6',

        // navbarTransparent
        //   ? 'bg-white/0 backdrop-blur-xs'
        //   : 'bg-white/40 backdrop-blur-sm',
        // showNavbar
        //   ? navbarTransparent
        //     ? 'bg-transparent backdrop-blur-sm'
        //     : 'bg-black/40 backdrop-blur-sm'
        //   : 'bg-black/40 backdrop-blur-sm',
      ])}
    >
      <div className='flex max-w-screen-lg'>{props.children}</div>
    </header>
  );
};

export default NavbarContainer;

'use client';

import { MenuButton } from './MenuButton';
import { NavbarLogo } from './NavbarLogo';
import { NavMenu } from './NavMenu';
import useNavbar from './useNavbar';
import { LocalizedLink } from 'next-intl';

export const Navbar = () => {
  const { openMenu, toggleOpen, handleClose } = useNavbar();

  return (
    <>
      <header className='fixed top-0 flex items-center justify-between px-5 lg:px-10 h-16 left-0 w-full right-0 z-40 mix-blend-difference'>
        <LocalizedLink href='/' onClick={() => window.scrollTo({ top: 0 })}>
          <NavbarLogo />
        </LocalizedLink>
        <MenuButton open={openMenu} toggleOpen={toggleOpen} />
      </header>
      <NavMenu open={openMenu} handleClose={handleClose} />
    </>
  );
};

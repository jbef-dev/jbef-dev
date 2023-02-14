'use client';

import { ComponentProps, createContext, useContext } from 'react';
import useNavbar from './useNavbar';

interface Props extends ComponentProps<'header'> {}

interface INavBarCtx {
  open: boolean;
  toggleOpen: () => void;
  handleClose: () => void;
}

export const NavbarCtx = createContext<INavBarCtx>({} as INavBarCtx);
export const useNavbarCtx = () => useContext<INavBarCtx>(NavbarCtx);

export const NavbarContainer = ({ children, ...props }: Props) => {
  const { openMenu: open, toggleOpen, handleClose } = useNavbar();

  return (
    <>
      <NavbarCtx.Provider value={{ open, toggleOpen, handleClose }}>
        <header {...props}>{children}</header>
      </NavbarCtx.Provider>
    </>
  );
};

'use client';

import { ComponentProps, createContext, useContext } from 'react';
import useNavbar from './useNavbar';

interface Props extends ComponentProps<'header'> {}

interface INavBarCtx {
  open: boolean;
  toggleOpen: () => void;
  handleClose: () => void;
}

export const NavBarCtx = createContext<INavBarCtx>({} as INavBarCtx);
export const useNavBarContext = () => useContext<INavBarCtx>(NavBarCtx);

export const NavBarContainer = ({ children, ...props }: Props) => {
  const { openMenu: open, toggleOpen, handleClose } = useNavbar();

  return (
    <>
      <NavBarCtx.Provider value={{ open, toggleOpen, handleClose }}>
        <header {...props}>{children}</header>
      </NavBarCtx.Provider>
    </>
  );
};

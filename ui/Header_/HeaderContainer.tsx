'use client';

import { useScroll } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { ComponentProps, createContext, useContext } from 'react';

interface Props extends ComponentProps<'header'> {}

interface HeaderCtxI {
  open: boolean;
  toggleOpen: () => void;
  handleClose: () => void;
  showNavbar: boolean;
  y: number;
  scrollDir: 'up' | 'down' | undefined;
}

export const HeaderCtx = createContext<HeaderCtxI>({} as HeaderCtxI);
export const useHeaderCtx = () => useContext<HeaderCtxI>(HeaderCtx);

export const HeaderContainer = ({ children, ...props }: Props) => {
  const pathName = usePathname();

  const [open, setOpen] = useState(false);
  const [y, setY] = useState<number>(0);
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  // const [active, setActive] = useState<string | undefined>(router.asPath);
  const [directionChangeY, setDirectionChangeY] = useState<number>(0);
  const [scrollDir, setScrollDir] = useState<'down' | 'up'>();

  const { scrollY } = useScroll();

  useEffect(() => {
    scrollY.on('change', () => {
      setY(scrollY.get());
      setScrollDir(scrollY.getPrevious() < scrollY.get() ? 'down' : 'up');
    });
    return () => scrollY.destroy();
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathName, pathName, setOpen]);

  const toggleOpen = () => setOpen(o => !o);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    setDirectionChangeY(y);
  }, [scrollDir]);

  const navbarControl = useCallback(() => {
    const deltaTriggerDown = 50;
    const deltaTriggerUp = 90;
    const topShowThreshold = 400;
    if (scrollDir === 'down') {
      if (y > directionChangeY + deltaTriggerDown && y > topShowThreshold) {
        setShowNavbar(false);
      }
    } else {
      if (y < directionChangeY - deltaTriggerUp) {
        setShowNavbar(true);
      }
      if (y <= topShowThreshold) setShowNavbar(true);
    }
  }, [y, directionChangeY, scrollDir]);

  useEffect(() => {
    navbarControl();
  }, [y]);

  // const isHomeTop = () => y <= 30 && pathName == '/';

  return (
    <HeaderCtx.Provider
      value={{
        open: open,
        toggleOpen: toggleOpen,
        handleClose: handleClose,
        y: y,
        showNavbar: showNavbar,
        scrollDir: scrollDir,
      }}
    >
      <header {...props}>{children}</header>
    </HeaderCtx.Provider>
  );
};

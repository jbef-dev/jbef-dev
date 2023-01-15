'use client';

import { useScroll } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { NAVBAR_LINKS } from '@/config/constants/pageContent';
import { usePathname } from 'next/navigation';

export default function useNavbar() {
  const pathName = usePathname();

  const [y, setY] = useState<number>(0);
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [hover, setHover] = useState<string | null>(pathName);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [navbarTransparent, setNavbarTransparent] = useState<boolean>(true);
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
    setOpenMenu(false);
  }, [pathName, pathName, setOpenMenu]);

  const toggleOpen = () => setOpenMenu(o => !o);

  const handleClose = () => setOpenMenu(false);

  useEffect(() => {
    setDirectionChangeY(y);
  }, [scrollDir]);

  const navbarControl = useCallback(() => {
    const deltaTriggerDown = 50;
    const deltaTriggerUp = 90;
    const topShowThreshold = 400;
    const backgroundTopThreshold = 10;
    setNavbarTransparent(y <= backgroundTopThreshold);
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

  const isActive = (link: string) => pathName === link;

  const hoverControl = (value: string | null) => setHover(value);

  const isHomeTop = () => y <= 30 && pathName == '/';

  return {
    y,
    hover,
    showNavbar,
    navbarTransparent,
    openMenu,
    toggleOpen,
    handleClose,
    hoverControl,
    isHomeTop,
    isActive,
    NAVBAR_LINKS,
  };
}

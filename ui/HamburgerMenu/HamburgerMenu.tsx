'use client';

import clsx from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import { myAnimation } from '@/styles/customAnimations';
import { createContext, useContext, useEffect, useState } from 'react';

interface HamburgerMenuCtxI {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const HamburgerMenuCtx = createContext<HamburgerMenuCtxI>(
  {} as HamburgerMenuCtxI
);
const useHamburgerMenuCtx = () =>
  useContext<HamburgerMenuCtxI>(HamburgerMenuCtx);
interface HamburgerMenuProps {
  children: React.ReactNode;
}

const HamburgerMenu = ({ children }: HamburgerMenuProps) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : 'scroll';
    document.body.style.overflowX = 'hidden';
  }, [open]);
  return (
    <HamburgerMenuCtx.Provider value={{ open, setOpen }}>
      {children}
    </HamburgerMenuCtx.Provider>
  );
};

const HamburgerMenuButton = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'button'>) => {
  const { open, setOpen } = useHamburgerMenuCtx();
  const pathBase = clsx('h-0.5 w-7 bg-white transition-all duration-500');
  const pathClosed = clsx('scale-x-100 rotate-0 translate-y-0');
  const pathOpen = [
    clsx('-rotate-45 scale-x-75 translate-y-[3px]'),
    clsx('rotate-45 scale-x-75 -translate-y-[3px]'),
  ];
  return (
    <button onClick={() => setOpen(o => !o)} {...props}>
      <div className='flex w-7 flex-col items-center justify-center gap-1'>
        <div className={clsx(pathBase, open ? pathOpen[0] : pathClosed)}></div>
        <div className={clsx(pathBase, open ? pathOpen[1] : pathClosed)}></div>
      </div>
      {children}
    </button>
  );
};

const HamburgerMenuContent = ({
  className,
  children,
  ...props
}: HTMLMotionProps<'nav'>) => {
  const { open } = useHamburgerMenuCtx();
  return (
    <motion.nav
      className={clsx('fixed top-0 left-0 z-30 h-full w-full', className)}
      initial='initial'
      variants={{ initial: { y: '-100%' }, animate: { y: 0 } }}
      animate={open ? 'animate' : 'initial '}
      transition={{
        type: 'keyframes',
        ease: 'easeInOut',
        duration: myAnimation.values.duration.verySlow,
      }}
      style={{
        transform: 'translate3d(0px, 0px, 0px)',
      }}
      {...props}
    >
      {children}
    </motion.nav>
  );
};

const HambugerMenuNavigation = ({
  children,
  ...props
}: HTMLMotionProps<'div'>) => {
  const { open } = useHamburgerMenuCtx();
  return (
    <motion.div
      initial='initial'
      animate={open ? 'animate' : 'initial'}
      variants={{
        animate: {
          transition: {
            delayChildren: 0.4,
            staggerChildren: 0.2,
            ...myAnimation.transition.easeOut,
          },
        },
        initial: {
          transition: {
            delay: 1,
            when: 'afterChildren',
            staggerDirection: -1,
            staggerChildren: 0.2,
            ...myAnimation.transition.tween,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const HambugerMenuLink = ({ children, ...props }: HTMLMotionProps<'div'>) => (
  <motion.div
    variants={myAnimation.variants.appear3d}
    transition={myAnimation.transition.easeOut}
    {...props}
  >
    {children}
  </motion.div>
);
export {
  HamburgerMenu,
  HamburgerMenuContent,
  HamburgerMenuButton,
  HambugerMenuNavigation,
  HambugerMenuLink,
};

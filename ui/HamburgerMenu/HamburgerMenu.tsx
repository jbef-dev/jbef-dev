'use client';

import clsx from 'clsx';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { myAnimation } from '@/styles/customAnimations';
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from 'react';
import Link from 'next/link';

interface HamburgerMenuCtxI {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeSubmenu: string | undefined;
  setActiveSubmenu: React.Dispatch<React.SetStateAction<string | undefined>>;
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
  const [activeSubmenu, setActiveSubmenu] = useState<string | undefined>(
    undefined
  );
  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : 'scroll';
    document.body.style.overflowX = 'hidden';
  }, [open]);
  return (
    <HamburgerMenuCtx.Provider
      value={{ open, setOpen, activeSubmenu, setActiveSubmenu }}
    >
      {children}
    </HamburgerMenuCtx.Provider>
  );
};

const HamburgerMenuButton = ({
  className,
  openText,
  closedText,
  ...props
}: React.ComponentPropsWithoutRef<'button'> & {
  openText: string;
  closedText: string;
}) => {
  const { open, setOpen } = useHamburgerMenuCtx();
  const [isRendered, setIsRendered] = useState(false);
  // const pathBase = clsx('h-0.5 w-7 bg-white transition-all duration-500');
  // const pathClosed = clsx('scale-x-100 rotate-0 translate-y-0');
  // const pathOpen = [
  //   clsx('-rotate-45 scale-x-75 translate-y-[3px]'),
  //   clsx('rotate-45 scale-x-75 -translate-y-[3px]'),
  // ];

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <button
      className={clsx(
        'flex items-center h-min group overflow-hidden text-white justify-center gap-x-2',
        className
      )}
      onClick={() => setOpen(o => !o)}
      {...props}
    >
      {/* <div className='flex w-7 flex-col items-center justify-center gap-1'> */}
      {/*   <div className={clsx(pathBase, open ? pathOpen[0] : pathClosed)}></div> */}
      {/*   <div className={clsx(pathBase, open ? pathOpen[1] : pathClosed)}></div> */}
      {/* </div> */}

      <AnimatePresence mode='wait'>
        {open ? (
          <motion.div
            key={'open'}
            className='overflow-hidden'
            initial={isRendered ? 'initial' : 'false'}
            animate='animate'
            exit='exit'
            whileHover='hover'
            variants={myAnimation.variants.fromBelow}
            // transition={myAnimation.transition.normal}
            transition={{ stiffness: 250, damping: 100 }}
          >
            <motion.div
              className='relative flex flex-col transition duration-500 group-target:-translate-y-full group-hover:-translate-y-full group-active:-translate-y-full'
              variants={{
                hover: {
                  y: '-100%',
                },
              }}
            >
              <span>{openText}</span>
              <span className='absolute top-full'>{openText}</span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key={'closed'}
            className='overflow-hidden'
            initial={isRendered ? 'initial' : 'false'}
            animate='animate'
            exit='exit'
            variants={myAnimation.variants.fromBelow}
            transition={{ stiffness: 250, damping: 100 }}
          >
            <div className='relative flex flex-col transition duration-500 group-target:-translate-y-full group-hover:-translate-y-full group-active:-translate-y-full'>
              <span>{closedText}</span>
              <span className='absolute top-full'>{closedText}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

const HamburgerMenuContent = forwardRef<HTMLElement, HTMLMotionProps<'nav'>>(
  ({ className, children, ...props }, ref) => {
    const { open } = useHamburgerMenuCtx();
    return (
      <motion.nav
        ref={ref}
        className={clsx(className)}
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
  }
);

const HamburgerMenuNavigation = forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'nav'>
>(({ children, ...props }, ref) => {
  const { open } = useHamburgerMenuCtx();
  return (
    <motion.div
      ref={ref}
      initial='initial'
      animate={open ? 'animate' : 'initial'}
      variants={{
        animate: {
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1,
            ...myAnimation.transition.easeOut,
          },
        },
        initial: {
          transition: {
            delay: 1,
            when: 'afterChildren',
            staggerDirection: -1,
            staggerChildren: 0.1,
            ...myAnimation.transition.normal,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
});

const HamburgerMenuSubNavigation = forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'nav'> & { value: string }
>(({ value, children, ...props }, ref) => {
  const { activeSubmenu } = useHamburgerMenuCtx();
  return (
    <AnimatePresence>
      {activeSubmenu === value ? (
        <motion.div
          ref={ref}
          initial='initial'
          animate={activeSubmenu === value ? 'animate' : 'initial'}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
                ...myAnimation.transition.easeOut,
              },
            },
            initial: {
              transition: {
                delay: 1,
                when: 'afterChildren',
                staggerDirection: -1,
                staggerChildren: 0.1,
                ...myAnimation.transition.normal,
              },
            },
          }}
          {...props}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
});

const HamburgerMenuNavItem = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(
  ({ children, ...props }, ref) => (
    <motion.div
      ref={ref}
      variants={myAnimation.variants.appearFromTop}
      transition={myAnimation.transition.easeOut}
      {...props}
    >
      {children}
    </motion.div>
  )
);

const HamburgerMenuNavTrigger = forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'> & { value: string; indicator?: boolean }
>(({ value, indicator = false, className, children, ...props }, ref) => {
  const { activeSubmenu, setActiveSubmenu } = useHamburgerMenuCtx();
  return (
    <motion.div
      ref={ref}
      className={clsx(
        'cursor-pointer',
        value === activeSubmenu && 'text-accent-main',
        className
      )}
      onClick={() => setActiveSubmenu(a => (a === value ? undefined : value))}
      {...props}
    >
      <>
        {children}
        {indicator && (
          <motion.svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={clsx(
              'h-6 w-6 self-center group-hover:stroke-accent-main',
              activeSubmenu === value ? 'stroke-accent-main' : 'stroke-white'
            )}
            initial='initial'
            animate={activeSubmenu === value ? 'animate' : 'initial'}
            variants={{
              initial: { rotate: '0deg' },
              animate: { rotate: '180deg' },
            }}
            transition={myAnimation.transition.easeInOut}
          >
            <motion.path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 8.25l-7.5 7.5-7.5-7.5'
            />
          </motion.svg>
        )}
      </>
    </motion.div>
  );
});

const HamburgerMenuNavLink = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ children, ...props }, ref) => {
  const { setOpen, setActiveSubmenu } = useHamburgerMenuCtx();
  return (
    <motion.div
      ref={ref}
      variants={myAnimation.variants.appearFromTop}
      transition={myAnimation.transition.easeOut}
    >
      <Link
        onClick={() => {
          setOpen(false);
          setActiveSubmenu(undefined);
        }}
        {...props}
      >
        {children}
      </Link>
    </motion.div>
  );
});

export {
  HamburgerMenu,
  HamburgerMenuContent,
  HamburgerMenuButton,
  HamburgerMenuNavigation,
  HamburgerMenuSubNavigation,
  HamburgerMenuNavItem,
  HamburgerMenuNavTrigger,
  HamburgerMenuNavLink,
};

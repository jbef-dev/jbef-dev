'use client';

import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import clsx from 'clsx';
import { FaChevronDown } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ComponentPropsWithoutRef,
  createContext,
  ElementRef,
  forwardRef,
  useContext,
  useState,
} from 'react';
import { myAnimation } from '@/styles/customAnimations';

interface NavigationCtxI {
  value: string;
  setValue: (v: string) => void;
}
const NavigationCtx = createContext<NavigationCtxI>({} as NavigationCtxI);
const useNavigationCtx = () => useContext(NavigationCtx);

const NavigationMenu = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Root>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => {
  const [value, setValue] = useState('');

  return (
    <NavigationCtx.Provider value={{ value, setValue }}>
      <NavigationMenuPrimitive.Root
        ref={ref}
        value={value}
        onValueChange={setValue}
        className={clsx(
          'relative z-50 flex items-center justify-center',
          className
        )}
        {...props}
      >
        {children}
      </NavigationMenuPrimitive.Root>
    </NavigationCtx.Provider>
  );
});
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

export const NavigationMenuList = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={clsx(
      'group flex flex-1 list-none items-center justify-center',
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const navigationItemStyles = clsx(
  'transition-colors focus:outline-none focus:bg-white disabled:opacity-50 dark:focus:bg-black/50 disabled:pointer-events-none hover:bg-white dark:hover:bg-black/50 dark:text-white dark:hover:text-white data-[state=open]:bg-white dark:data-[state=open]:bg-black/50 data-[active]:bg-white dark:data-[active]:bg-black/50 py-2 px-4 group items-center justify-center rounded-md text-sm font-medium w-max uppercase'
);

const NavigationMenuItem = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Item>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>
>(({ children, className, ...props }, ref) => (
  <NavigationMenuPrimitive.Item
    ref={ref}
    className={clsx('relative flex items-center justify-center', className)}
    asChild
    {...props}
  >
    <motion.li>{children}</motion.li>
  </NavigationMenuPrimitive.Item>
));

const NavigationMenuTrigger = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={clsx(
      'inline-flex gap-x-1 group z-10',
      navigationItemStyles,
      className
    )}
    {...props}
  >
    {children}
    <FaChevronDown
      className='relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180'
      aria-hidden='true'
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { value } = useNavigationCtx();

  return (
    <AnimatePresence mode='wait'>
      {value !== '' && (
        <NavigationMenuPrimitive.Content
          ref={ref}
          className={clsx(
            'absolute top-full self-center z-0 w-max mt-2 bg-black/50 backdrop-blur-lg rounded-lg py-2 px-3',
            className
          )}
          asChild
          {...props}
        >
          <motion.div
            initial='initial'
            animate='animate'
            exit='exit'
            variants={myAnimation.variants.appearFromTop}
            transition={{
              type: 'keyframes',
              ease: 'easeOut',
              duration: myAnimation.values.duration.slow,
            }}
          >
            {children}
          </motion.div>
        </NavigationMenuPrimitive.Content>
      )}
    </AnimatePresence>
  );
});
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={clsx('absolute left-0 top-full flex justify-center')}>
    <NavigationMenuPrimitive.Viewport
      className={clsx(
        'origin-top-center relative mt-1.5 w-full overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800',
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={clsx(
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=visible]:fade-in data-[state=hidden]:fade-out',
      className
    )}
    {...props}
  >
    <div className='relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-white/80 shadow-md dark:bg-black/50' />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationItemStyles,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};

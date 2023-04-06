'use client';

import { Locale, i18n } from '@/i18n/config';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, useRef, useState } from 'react';

import useOutsideClick from '@/hooks/useOutsideClick';
import { AnimatePresence, motion } from 'framer-motion';
import { MdOutlineTranslate } from 'react-icons/md';
import { myAnimation } from '@/styles/customAnimations';
import { IoTriangle } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
// import { getUnlocalizedPath } from '@/i18n/getUnlocalizedPath';

interface LocaleSwitcherProps extends ComponentPropsWithoutRef<'button'> {
  currentLocale: Locale;
}
export const LocaleSwitcher = ({
  currentLocale,
  className,
  children,
  ...props
}: LocaleSwitcherProps) => {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    console.log(segments[1]);
    segments[1] = locale;
    console.log(segments.join('/'));
    return segments.join('/');
  };

  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => setOpen(open => !open);

  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(toggleOpen, open, ref);
  const otherLocales = i18n.locales.filter(locale => locale != currentLocale);

  // const dropdownVariants: Variants = {
  //   initial: { opacity: 0, y: '-10%', scale: 0.95 },
  //   animate: { opacity: 1, y: 0, scale: 1 },
  //   exit: { opacity: 0, y: '-10%', scale: 0.95 },
  // };

  return (
    <button
      className={clsx(
        'group relative flex items-center py-1 justify-center font-title',
        // open ? 'bg-black/50 backdrop-blur-lg' : '',
        className
      )}
      onClick={() => toggleOpen()}
      {...props}
    >
      <div
        className='grid place-items-center leading-none grid-cols-3 gap-x-1 lg:gap-x-2'
        ref={ref}
      >
        <IoTriangle
          className={clsx([
            'text-[10px] transition-transform duration-300',
            open ? 'rotate-0' : 'rotate-180',
          ])}
        />
        {
          <div className='overflow-hidden'>
            <div className='relative flex flex-col transition duration-500 group-target:-translate-y-full group-hover:-translate-y-full group-active:-translate-y-full'>
              <div>{currentLocale.toUpperCase()}</div>
              <div className='absolute top-full'>
                {currentLocale.toUpperCase()}
              </div>
            </div>
          </div>
        }{' '}
        <MdOutlineTranslate />
      </div>
      {children}
      <AnimatePresence mode='wait'>
        {open && (
          <motion.div
            className='absolute top-full mt-1 py-2 gap-3 -z-10 flex bg-black/50 backdrop-blur-lg w-full flex-col overflow-hidden items-center justify-center'
            initial='initial'
            animate={open ? 'animate' : 'initial'}
            exit='initial'
            // variants={dropdownVariants}
            variants={myAnimation.variants.appearMenu}
            transition={myAnimation.transition.appearMenu}
          >
            {otherLocales.map(locale => (
              <Link
                key={locale}
                className='flex w-full items-center justify-center disabled:hidden'
                // href={pathName || '/'}
                href={redirectedPathName(locale)}
                // href={getUnlocalizedPath(pathName)}
                // locale={locale}
              >
                {locale.toUpperCase()}
              </Link>
            ))}
            {/* </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

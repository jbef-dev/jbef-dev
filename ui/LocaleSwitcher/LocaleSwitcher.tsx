'use client';

import { I18nLocales, LOCALES } from '@/util/i18n/config';
// import { LOCALES } from '@/config/constants/i18n';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, useRef, useState } from 'react';

import useOutsideClick from '@/hooks/useOutsideClick';
import { AnimatePresence, motion } from 'framer-motion';
import { customTransitions, customVariants } from '@/ui/animation';
import { FaChevronUp } from 'react-icons/fa';
import { usePathname } from 'next-intl/client';
import Link from 'next-intl/link';

export const LocaleSwitcher = ({
  currentLocale,
  className,
  ...props
}: ComponentPropsWithoutRef<'button'> & { currentLocale: I18nLocales }) => {
  const pathName = usePathname();

  // const redirectedPathName = (locale: string) => {
  //   if (!pathName) return '/';
  //   const segments = pathName.split('/');
  //   console.log(segments[1]);
  //   segments[1] = locale;
  //   console.log(segments.join('/'));
  //   return segments.join('/');
  // };

  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => setOpen(open => !open);

  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(toggleOpen, open, ref);
  const otherLocales = LOCALES.filter(locale => locale != currentLocale);

  return (
    <button
      className={clsx(
        'group relative flex items-center justify-center py-1',
        className
      )}
      onClick={() => toggleOpen()}
      {...props}
    >
      <div
        className='grid grid-cols-2 place-items-center gap-x-1 leading-none lg:gap-x-2'
        ref={ref}
      >
        <FaChevronUp
          className={clsx([
            'text-[10px] transition-transform duration-300',
            open ? 'rotate-0' : 'rotate-180',
          ])}
        />

        <div className='overflow-hidden'>
          <div className='relative flex flex-col transition duration-500 group-target:-translate-y-full group-hover:-translate-y-full group-active:-translate-y-full'>
            <div>{currentLocale.toUpperCase()}</div>
            <div className='absolute top-full'>
              {currentLocale.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence mode='wait'>
        {open && (
          <motion.div
            className='absolute top-full -z-10 mt-1 grid w-full grid-cols-2 overflow-hidden bg-black py-1 backdrop-blur-lg'
            initial='initial'
            animate={open ? 'animate' : 'initial'}
            exit='initial'
            // variants={dropdownVariants}
            variants={customVariants.appearMenu}
            transition={customTransitions.appearMenu}
          >
            <div></div>
            <div className='flex flex-col items-end justify-center gap-3 px-0.5'>
              {otherLocales.map(locale => (
                <Link key={locale} href={pathName}>
                  {locale.toUpperCase()}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

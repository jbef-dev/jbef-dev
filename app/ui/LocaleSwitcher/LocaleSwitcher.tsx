'use client';

import useOutsideClick from '@/hooks/useOutsideClick';
import { locales } from '@i18n/config';
import { motion, Variants } from 'framer-motion';
import { MdOutlineTranslate } from 'react-icons/md';
import { useLocaleSwitcher } from './useLocaleSwitcher';
import { animations } from '@styles/customAnimations';
import { LocalizedLink, useLocale } from 'next-intl';
import { IoTriangle } from 'react-icons/io5';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { unlocalizedPath } from '@/util/i18n';

export const LocaleSwitcher = () => {
  const locale = useLocale();

  const { open, toggleOpen } = useLocaleSwitcher();
  const [ref] = useOutsideClick(toggleOpen, open);

  const pathName = usePathname();

  const dropdownVariants: Variants = {
    open: {
      display: 'flex',
      height: 'auto',
      y: '100%',
      transition: {
        delayChildren: animations.values.duration.fastest,
        staggerChildren: 0.09,
        staggerDirection: 1,
        ...animations.transition.menuOpen,
      },
    },
    closed: {
      transitionEnd: { display: 'none' },
      height: 0,
      y: 0,
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
        delay: animations.values.duration.normal,
        ...animations.transition.menuClose,
      },
    },
  };

  const langItemVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { ...animations.transition.normal },
    },
    closed: {
      y: '-50%',
      opacity: 0,
      transition: { ...animations.transition.normal },
    },
  };

  const otherLocales = locales.filter(l => l != locale);

  const [path, setPath] = useState<string>('');

  useEffect(() => {
    setPath(unlocalizedPath(pathName));
  }, [pathName]);

  return (
    <button className='relative flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <div
          className='grid place-items-center grid-cols-3 gap-1.5 py-1 text-white'
          ref={ref}
          onClick={() => toggleOpen()}
        >
          <IoTriangle
            className={clsx([
              'text-[10px] transition-transform duration-500',
              open ? 'rotate-0' : 'rotate-180',
            ])}
          />{' '}
          {locale.toUpperCase()} <MdOutlineTranslate />
        </div>
        <motion.div
          className='absolute bottom-0 gap-1 -z-10 flex w-full flex-col items-center justify-center'
          initial='closed'
          animate={open ? 'open' : 'closed'}
          variants={dropdownVariants}
        >
          {otherLocales.map(l => (
            <motion.div
              className='flex w-full items-center justify-center text-white disabled:hidden'
              key={l}
              animate
              variants={langItemVariants}
            >
              <LocalizedLink href={path} locale={l}>
                {/* <LocalizedLink href={'/'} locale={l}> */}
                {l.toUpperCase()}
              </LocalizedLink>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </button>
  );
};

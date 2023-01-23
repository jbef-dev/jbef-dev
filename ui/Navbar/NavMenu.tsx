'use client';

import { useModal } from '@/hooks/useModal';
import clsx from 'clsx';
import { LocaleSwitcher } from 'ui/LocaleSwitcher/LocaleSwitcher';
import Link from 'next/link';
import { NAVBAR_LINKS, SOCIALS } from '@/config/constants/pageContent';
import { LocalizedLink, useTranslations } from 'next-intl';
import { unlocalizedPath } from '@/util/i18n';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, Variants } from 'framer-motion';
import { myAnimation } from '@/styles/customAnimations';

export const NavMenu = ({
  open,
  handleClose: handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const pathName = usePathname();
  const t = useTranslations('ui.navbar');

  // const path = unlocalizedPath(pathName);
  const [path, setPath] = useState<string>('');

  useEffect(() => {
    setPath(unlocalizedPath(pathName));
  }, [pathName]);

  useModal({
    open: open,
    handleClose: handleClose,
  });

  const menuVariants: Variants = {
    open: {
      y: 0,
    },
    close: {
      y: '-100%',
    },
  };

  return (
    <motion.nav
      className={clsx([
        'fixed top-0 left-0 z-30 h-full w-full px-4 md:px-12 bg-white flex flex-col items-center justify-around font-title',
      ])}
      initial='close'
      variants={menuVariants}
      animate={open ? 'open' : 'close '}
      transition={myAnimation.transition.easeOutSlow}
      style={{
        transform: 'translate3d(0px, 0px, 0px)',
      }}
    >
      <div className='flex w-full items-center justify-around'>
        <LocaleSwitcher />
      </div>
      <motion.div
        className='flex items-start justify-center w-full flex-col gap-5'
        animate={open ? 'open' : 'close'}
        variants={{
          open: {
            transition: {
              delayChildren: 0.4,
              staggerChildren: 0.2,
              ...myAnimation.transition.easeOut,
            },
          },
          close: {
            transition: {
              delay: 1,
              when: 'afterChildren',
              staggerDirection: -1,
              staggerChildren: 0.2,
              ...myAnimation.transition.tween,
            },
          },
        }}
      >
        {NAVBAR_LINKS.map((link, i) => (
          <motion.div
            key={link.label}
            className='overflow-hidden'
            animate
            variants={{
              open: {
                x: 0,
                opacity: 1,
              },
              close: {
                x: '-30%',
                opacity: 0,
              },
            }}
            transition={myAnimation.transition.easeOut}
          >
            <LocalizedLink
              key={link.label}
              href={link.url}
              className={clsx([
                'group',
                path === link.url ? 'text-black' : 'text-black',
              ])}
              onClick={() => window.scrollTo({ top: 0 })}
            >
              <div className='flex gap-4 relative w-fit group-hover:text-accent-main leading-none tracking-wide'>
                <span className='text-responsive-xs pt-[2.5%] self-start transition-colors duration-500'>
                  0{i + 1}.
                </span>
                <div className='flex relative text-responsive-3xl lg:text-responsive-4xl group-hover:-translate-y-full transition-all duration-500'>
                  <span>{t(link.label).toUpperCase()}</span>
                  <span className='absolute top-full'>
                    {t(link.label).toUpperCase()}
                  </span>
                </div>
              </div>
            </LocalizedLink>
          </motion.div>
        ))}
      </motion.div>
      <div className='flex gap-12 text-xl text-black items-center justify-center'>
        {SOCIALS.map(social => (
          <Link
            key={social.name}
            href={social.url}
            title={social.name}
            target='_blank'
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

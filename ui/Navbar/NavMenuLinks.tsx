'use client';

import clsx from 'clsx';
import { NAVBAR_LINKS } from '@/config/constants/pageContent';
import { LocalizedLink } from 'next-intl';
import { motion } from 'framer-motion';
import { myAnimation } from '@/styles/customAnimations';
import { usePathname } from 'next/navigation';

export const NavMenuLinks = () => {
  const path = usePathname();

  return (
    <motion.div
      className='flex items-start justify-center w-full flex-col gap-5'
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
    >
      {NAVBAR_LINKS.map((link, i) => (
        <motion.div
          key={link.label}
          className='overflow-hidden'
          variants={{
            initial: {
              x: '-30%',
              opacity: 0,
            },
            animate: {
              x: 0,
              opacity: 1,
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
              <div className='flex relative text-responsive-xl group-hover:-translate-y-full transition-all duration-500'>
                <span>{link.label.toUpperCase()}</span>
                <span className='absolute top-full'>
                  {link.label.toUpperCase()}
                </span>
              </div>
            </div>
          </LocalizedLink>
        </motion.div>
      ))}
    </motion.div>
  );
};

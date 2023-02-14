'use client';

import clsx from 'clsx';
// import { useTranslations } from 'next-intl';
import { ComponentPropsWithoutRef } from 'react';
import { useNavBarContext } from './NavBarContainer';

interface Props extends ComponentPropsWithoutRef<'button'> {
  // open: boolean;
}

export const MenuButton = ({ className, ...props }: Props) => {
  // const t = useTranslations('common');

  const { open, toggleOpen } = useNavBarContext();

  const conditionalStyle = {
    1: clsx('-rotate-45 scale-x-75 translate-y-[3px]'),
    2: clsx('rotate-45 scale-x-75 -translate-y-[3px]'),
  };

  const pathStyles = (
    isOpen: boolean,
    elementNumber: keyof typeof conditionalStyle
  ) => {
    const baseStyle = clsx('h-0.5 w-7 bg-white transition-all duration-500');

    const closedStyle = clsx('scale-x-100 rotate-0 translate-y-0');

    if (isOpen) {
      return clsx(baseStyle, conditionalStyle[elementNumber]);
    } else {
      return clsx(baseStyle, closedStyle);
    }
  };

  return (
    <button
      className={clsx(
        'flex gap-1 group relative font-title overflow-hidden items-center z-50 rounded-full',
        className
      )}
      // aria-label={open ? t('open') : t('close')}
      // title={open ? t('open') : t('close')}
      onClick={toggleOpen}
      {...props}
    >
      <div className='flex w-7 flex-col items-center justify-center gap-1'>
        <div className={pathStyles(open, 1)}></div>
        <div className={pathStyles(open, 2)}></div>
      </div>
      <div className='relative transition-transform duration-500 group-hover:-translate-y-full'>
        <span className='text-white font-medium'>MENU</span>
        <span className='absolute top-full right-0 text-white font-medium'>
          MENU
        </span>
      </div>
    </button>
  );
};

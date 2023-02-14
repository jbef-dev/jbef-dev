'use client';

import { useModal } from '@/hooks/useModal';
import clsx from 'clsx';
import { HTMLMotionProps, motion, Variants } from 'framer-motion';
import { myAnimation } from '@/styles/customAnimations';
import { useNavBarContext } from './NavBarContainer';

interface Props extends HTMLMotionProps<'nav'> {}

export const NavMenuContainer = ({ className, children, ...props }: Props) => {
  const { open, handleClose } = useNavBarContext();

  useModal({
    open: open,
    handleClose: handleClose,
  });

  const menuVariants: Variants = {
    initial: {
      y: '-100%',
    },
    animate: {
      y: 0,
    },
  };

  return (
    <motion.nav
      className={clsx([
        'fixed top-0 left-0 z-30 h-full w-full px-4 md:px-12 bg-white flex flex-col items-center justify-around font-title',
      ])}
      initial='initial'
      variants={menuVariants}
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

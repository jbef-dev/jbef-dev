'use client';

import { useModal } from './useModal';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { HTMLAttributes, PropsWithChildren, MouseEvent } from 'react';
import { IoClose } from 'react-icons/io5';
import { myAnimation } from '@/styles/customAnimations';
import { useTranslations } from 'next-intl';
import { Button } from '@/ui/Button/Button';

export interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

export const Modal = ({
  open,
  handleClose,
  children,
}: PropsWithChildren<ModalProps> & HTMLAttributes<HTMLDivElement>) => {
  const t = useTranslations('common');

  const { onOverlayClick } = useModal({ open: open, handleClose: handleClose });

  // const overlayVariants: Variants = {
  //   initial: {
  //     opacity: 0,
  //   },
  //   show: {
  //     opacity: 1,
  //   },
  //   exit: {
  //     opacity: 0,
  //   },
  // };

  const modalVariants: Variants = {
    initial: {
      // y: '-100%',
      opacity: 0,
    },
    show: {
      // y: 0,
      opacity: 1,
    },
    // exit: {
    //   y: '100%',
    //   opacity: 0,
    //   transition: {
    //     duration: customAnimations.duration.fast,
    //   },
    // },
  };

  return (
    <AnimatePresence mode='wait'>
      {open && (
        <motion.div
          className='fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-black/60 backdrop-blur-sm [&*]:touch-none'
          onClick={(e: MouseEvent) => onOverlayClick(e)}
          // variants={overlayVariants}
          variants={modalVariants}
          initial='initial'
          animate='show'
          // exit='exit'
          exit='initial'
          transition={{ duration: myAnimation.values.duration.fast }}
        >
          <motion.div
            className='relative h-[85vh] w-[90vw] max-w-xl overflow-hidden'
            variants={modalVariants}
            transition={myAnimation.transition.modalInOut}
          >
            {children}
            <Button
              flavor='outlined'
              buttonSize='lg'
              className='!absolute !p-1.5 !top-4 !right-4'
              onClick={() => handleClose()}
              title={t('close')}
            >
              <IoClose />
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

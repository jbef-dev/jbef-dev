import {myAnimation} from '@/styles/customAnimations';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/ui/Button/Button';
import clsx from 'clsx';
import { FaWhatsapp } from 'react-icons/fa';
import { usePopup } from './usePopup';
import { useTranslations } from 'next-intl';

export default function ContactPopup() {
  const t = useTranslations('common');

  const { show, minimized, toggleShow } = usePopup();

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          layout
          className='fixed bottom-0 right-0 flex items-center justify-end p-5'
          key='ContactPopup'
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={myAnimation.transition.normal}
        >
          <motion.div
            // className='relative flex w-10/12 min-w-[10rem] max-w-screen-sm justify-around gap-3 rounded-xl bg-grayscale-300 p-5'
            className={clsx(
              'relative flex w-full items-center justify-center gap-5 rounded-2xl lg:max-w-sm',
              minimized
                ? 'gradient-primary'
                : 'bg-grayscale-200 ring-1 ring-grayscale-400'
            )}
            layout
            initial='initial'
            animate={minimized ? 'animate' : 'initial'}
            transition={myAnimation.transition.normal}
            variants={{
              initial: {
                padding: '1rem 1.5rem',
                borderRadius: '1rem',
              },
              animate: {
                borderRadius: '2rem',
                padding: '0.5rem',
              },
            }}
          >
            <motion.div
              layout
              className='flex aspect-square h-12 items-center justify-center'
              onClick={() => (minimized ? toggleShow() : null)}
            >
              <svg
                viewBox='0 0 24 24'
                className={clsx(
                  'aspect-square h-12 fill-transparent stroke-[1.5px]',
                  minimized ? 'stroke-grayscale-50' : 'stroke-grayscale-500'
                )}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
                />
              </svg>
            </motion.div>

            {minimized ? null : (
              <>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p className='flex flex-col items-center justify-center gap-2 font-medium text-gray-800'>
                    <span>How can we help you?</span>
                    <Button
                      buttonSize='sm'
                      icon={<FaWhatsapp className='text-xl' />}
                      className='w-full'
                    >
                      Open in WhatsApp
                    </Button>
                  </p>
                </motion.div>

                <motion.div
                  className='absolute top-0 right-0 aspect-square h-7'
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <button
                    aria-label={t( 'close' )}
                    onClick={() => toggleShow()}
                  >
                    <svg
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      className='aspect-square h-7 fill-transparent stroke-grayscale-500'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </button>
                </motion.div>
              </>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

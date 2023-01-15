import { animations } from '@/styles/customAnimations';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { setCookie, parseCookies } from 'nookies';
import { useEffect, useState } from 'react';
import { FaCookieBite } from 'react-icons/fa';
import { Button } from '../Button/Button';

export const CookiePopup = () => {
  const t = useTranslations('common');

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const cookies = parseCookies();
    cookies.NEXT_COOKIE_CONSENT === undefined && setOpen(true);
  }, []);

  const handleButtonClick = (cookieList: 'true' | 'false') => {
    setCookie(null, 'NEXT_COOKIE_CONSENT', cookieList, {
      maxAge: 99999999,
      path: '/',
    });
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className='fixed bottom-0 left-0 right-0 flex w-full items-center justify-center p-4'
          key='cookiePopup'
          // initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={animations.transition.normal}
        >
          <div className='flex w-10/12 min-w-[10rem] max-w-screen-sm justify-around gap-3 rounded-lg bg-primary-500 p-4'>
            <div className='flex items-center justify-center'>
              <FaCookieBite className='text-3xl text-gray-900' />
            </div>

            <div className='flex items-center justify-center text-sm font-medium text-gray-800'>
              We use third party cookies to improve user experience.
            </div>

            <div className='flex flex-col items-stretch justify-center gap-3'>
              <Button
                flavor='basic'
                buttonSize='sm'
                onClick={() => handleButtonClick('true')}
              >
                {t('close')}
              </Button>
              <Button
                buttonSize='sm'
                flavor='outlined'
                onClick={() => handleButtonClick('false')}
              >
                {t('close')}
              </Button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import * as React from 'react';
import { customVariants } from '../animation';
import { Heading } from '../Typography';

const PageTransition = () => {
  const router = useRouter();
  const pathName = usePathname();

  const [isChanged, setIsChanged] = React.useState(false);

  React.useEffect(() => {
    setIsChanged(true);
  }, [pathName]);

  React.useEffect(() => {
    setTimeout(() => setIsChanged(false), 1000);
  }, [isChanged]);

  return (
    <AnimatePresence>
      {isChanged ? (
        <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          className='fixed inset-0 z-[100] bg-white/10 backdrop-blur-2xl'
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
              transition: { duration: 0.2 },
            },
            exit: {
              opacity: 0,
              transition: { duration: 1 },
            },
          }}
        >
          {/* <Heading as='span' className='text-responsive-6xl text-black'> */}
          {/*   PAGE TRANTISION LOL */}
          {/* </Heading> */}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export { PageTransition };

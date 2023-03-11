import { AnimatePresence, motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ServiceType } from './ServicesList';
import { use100vh } from '@/util/use100vh';
import { myAnimation } from '@/styles/customAnimations';
import { useTranslations } from 'next-intl';

interface ServiceSectionProps {
  active: number;
  count: number;
  setActive: Dispatch<SetStateAction<number>>;
  service: ServiceType;
}

const ServiceSection = ({
  count,
  active,
  setActive,
  service,
}: ServiceSectionProps) => {
  const t = useTranslations(`data.services.${service.service}`);

  const viewportH = use100vh();
  const [vh, setVh] = useState<number>(0);
  useEffect(() => {
    if (vh > 0 || !viewportH) return;
    setVh(viewportH);
  }, [viewportH, vh]);

  const elRef = useRef<HTMLDivElement>(null);

  const [activeImg, setActiveImg] = useState<number>(0);

  const increaseCycle = useCallback(() => {
    const arrLen = service.imgArray.length;
    setActiveImg(a => (a < arrLen - 1 ? a + 1 : 0));
  }, [service.imgArray.length]);

  const { scrollYProgress } = useScroll({
    target: elRef,
    // Offset: element-screen relation
    // eg: 'start end' = start of element with end of screen
    offset: ['end end', 'start 0.45'],
  });

  const { scrollY } = useScroll();

  useEffect(() => {
    scrollY.on('change', () => {
      const delta = scrollY.getPrevious() - scrollY.get();
      const dir = delta < 0 ? 'down' : 'up';
      if (dir === 'down') {
        if (scrollYProgress.get() >= 1) {
          setActive(count);
        }
      }
      if (dir === 'up') {
        if (scrollYProgress.get() >= 1) {
          setActive(count);
        }
      }
    });
  }, [count, scrollY, scrollYProgress, setActive]);

  useEffect(() => {
    if (count !== active) return;
    const cycleImages = setTimeout(() => increaseCycle(), 3500);
    return () => clearTimeout(cycleImages);
  }, [active, count, increaseCycle, activeImg]);

  const isCurrentEl = () => active === count;

  return (
    <div
      ref={elRef}
      className='relative flex w-full cursor-pointer overflow-hidden'
      style={{
        height: vh ? vh * 0.46 : '46vh',
      }}
    >
      <motion.div
        className='flex w-full'
        initial='initial'
        animate={isCurrentEl() ? 'animate' : 'initial'}
        exit='exit'
        variants={{
          initial: {
            scale: 1,
          },
          animate: {
            scale: 1.07,
          },
          exit: {
            scale: 1,
          },
        }}
        transition={myAnimation.transition.easeOutSlow}
      >
        <AnimatePresence mode='popLayout'>
          {service.imgArray.map((imgSrc, i) =>
            activeImg === i ? (
              <motion.div
                key={i}
                className='flex w-full'
                initial='initial'
                animate='animate'
                exit='exit'
                variants={{
                  initial: {
                    opacity: 1,
                  },
                  animate: {
                    opacity: 1,
                  },
                  exit: {
                    opacity: 0,
                  },
                }}
                transition={myAnimation.transition.easeOutSlow}
              >
                <Image
                  src={imgSrc}
                  alt='innovation'
                  className='h-auto w-full object-cover object-center'
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </motion.div>
      <div
        className={clsx([
          'absolute flex h-full w-full items-center p-4 transition-all duration-500',
          isCurrentEl() ? 'bg-black/20' : 'bg-black/60',
        ])}
      >
        <h2
          className={clsx([
            'relative text-responsive-4xl font-bold',
            isCurrentEl() ? 'text-white' : 'text-grayscale-400',
          ])}
        >
          {/* {intl('hero.welcome')} */}
          {t.rich('title', { hl: chunk => chunk })}
        </h2>
      </div>
    </div>
  );
};

export default ServiceSection;

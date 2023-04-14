import { LayoutGroup, motion, Variants } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useCarouselFixed } from './useFixedCarousel';
import { CarouselProps } from '../Carousel';
import clsx from 'clsx';
import { customTransitions, customValues } from '@/ui/animation';

interface CarouselFixedVariantProps<T>
  extends Omit<CarouselProps<T>, 'variant'> {}

export const FixedCarousel = <T extends Record<string, any>>(
  props: PropsWithChildren<CarouselFixedVariantProps<T>>
) => {
  const {
    items,
    minwidth = '16rem',
    midwidth = '75vw',
    maxwidth = '32rem',
    elementGap = '0rem',
    onElementClick,
    children,
    autoScroll,
    ...rest
  } = props;

  const {
    elementSizeCss,
    handleElClick,
    handleDrag,
    handleDragEnd,
    handleNavClick,
    position,
    setCounter,
  } = useCarouselFixed<T>({
    items: items,
    minwidth: minwidth,
    midwidth: midwidth,
    maxwidth: maxwidth,
    autoScroll: autoScroll,
    onElementClick: onElementClick,
  });

  const containerVariants: Variants = {
    rest: { y: 0 },
    hover: { y: '-3%' },
  };

  // ////////////////////////////////////////////////////////////////////
  // CHECKING THE LENGTH OF THE CHILDREN TO BE THE SAME AS ITEMS PASSED
  if (items.length !== children.length) return null;
  // ////////////////////////////////////////////////////////////////////

  return (
    <>
      <div
        className='relative flex w-full max-w-screen-2xl items-center overflow-hidden'
        {...rest}
      >
        <button
          className='absolute bottom-0 left-5 top-0 z-10 my-auto h-min rounded bg-purple-400 p-2 text-lg transition-all hover:-translate-x-1 hover:scale-125'
          onClick={() => {
            handleNavClick('left');
            setCounter(undefined);
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          className='absolute bottom-0 right-5 top-0 z-10 my-auto h-min rounded bg-purple-400 p-2 text-lg transition-all hover:translate-x-1 hover:scale-125'
          onClick={() => {
            handleNavClick('right');
            setCounter(undefined);
          }}
        >
          <FaChevronRight />
        </button>
        <LayoutGroup id='carousel'>
          <motion.div
            className={clsx([
              'relative flex cursor-grab pb-5 pt-5',
              { 'gap-2': !elementGap },
            ])}
            style={{
              left: `calc(50% - (0.5 * ${elementSizeCss}))`,
            }}
            drag='x'
            dragSnapToOrigin
            dragTransition={{
              bounceStiffness: customValues.stiffness.max,
              bounceDamping: customValues.damping.max,
            }}
            onDrag={handleDrag}
            transition={customTransitions.fast}
            onDragEnd={(_, info) => handleDragEnd(info)}
          >
            {items &&
              children.map((child, index) => (
                <motion.div
                  className='group relative flex h-full cursor-pointer overflow-hidden rounded shadow '
                  style={{
                    width: elementSizeCss,
                  }}
                  key={items[index]?.id}
                  initial={{ left: 0, scale: 1 }}
                  animate={{
                    left: `calc(${
                      position * -1
                    } *(${elementSizeCss} + ${elementGap}))`,
                    scale: position === index ? 1 : 0.85,
                  }}
                  transition={customTransitions.normal}
                  variants={containerVariants}
                  whileTap='hover'
                  whileHover='hover'
                  onTouchStart={() => setCounter(undefined)}
                  onHoverStart={() => setCounter(undefined)}
                  onTouchEnd={e => handleElClick(e, index, items[index])}
                  onMouseUp={e => handleElClick(e, index, items[index])}
                >
                  {child}
                </motion.div>
              ))}
          </motion.div>
        </LayoutGroup>
      </div>
    </>
  );
};

'use client';

import { ComponentProps, createContext, RefObject, useContext } from 'react';
import { myAnimation } from '@/styles/customAnimations';
import { MotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Props extends ComponentProps<'div'> {}

interface IEvolveCtx {
  containerRef: RefObject<any>;
  standOutX: MotionValue<string>;
  spanXArr: MotionValue<string>[];
}

export const EvolveSectionCtx = createContext<IEvolveCtx>({} as IEvolveCtx);
export const useEvolveSectionCtx = () =>
  useContext<IEvolveCtx>(EvolveSectionCtx);

export const EvolveContainer = ({ children, ...props }: Props) => {
  const dotContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: dotContainerRef,
    offset: ['start end', 'end start'],
  });
  const springInput = useSpring(scrollYProgress, myAnimation.spring.default);
  const circlesX = useTransform(springInput, [0, 1], ['0%', '-20%']);

  const spanX1 = useTransform(springInput, [0, 1], ['0%', '8%']);
  const spanX2 = useTransform(springInput, [0, 1], ['0%', '-5%']);
  const spanX3 = useTransform(springInput, [0, 1], ['5%', '-10%']);
  const spanX4 = useTransform(springInput, [0, 1], ['0%', '10%']);

  const spanXStyles = [spanX1, spanX2, spanX3, spanX4];

  return (
    <EvolveSectionCtx.Provider
      value={{
        containerRef: dotContainerRef,
        standOutX: circlesX,
        spanXArr: spanXStyles,
      }}
    >
      <div ref={dotContainerRef} {...props}>
        {children}
      </div>
    </EvolveSectionCtx.Provider>
  );
};

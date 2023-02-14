'use client';

import { AnimatedSpan, AnimatedSpanProps } from '@/ui/Typography/AnimatedSpan';
import { useEvolveSectionCtx } from './EvolveContainer';

interface Props extends AnimatedSpanProps {
  xStyle: number;
}

export const AOSText = ({ xStyle, style, ...props }: Props) => {
  const { spanXArr } = useEvolveSectionCtx();

  return (
    <AnimatedSpan style={{ x: spanXArr[xStyle] }} {...props}>
      {props.children}
    </AnimatedSpan>
  );
};

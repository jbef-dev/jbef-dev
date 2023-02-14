import { HTMLMotionProps } from 'framer-motion';
import { RoundedSeparator } from './RoundedSeparator/RoundedSeparator';
import SquareSeparator from './SquareSeparator/SquareSeparator';

export interface SeparatorProps extends HTMLMotionProps<'div'> {
  flavor?: 'square' | 'rounded';
  position: 'top' | 'bottom';
}

export const Separator = (props: SeparatorProps) => {
  const { flavor = 'rounded', ...rest } = props;

  return flavor === 'rounded' ? (
    <RoundedSeparator {...rest} />
  ) : (
    <SquareSeparator {...rest} />
  );
};

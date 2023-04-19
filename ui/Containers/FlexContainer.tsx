import { ForwardedRef, forwardRef, HTMLAttributes, RefObject } from 'react';
import clsx from 'clsx';

interface FlexContainerProps extends HTMLAttributes<HTMLDivElement> {
  center?: boolean;
  // gap?: boolean;
  gap?: 'sm' | 'md' | 'lg' | false;
  grow?: boolean;
  px?: boolean;
  pr?: boolean;
  pl?: boolean;
  py?: boolean;
  pb?: boolean;
  pt?: boolean;
  maxW?: boolean;
  flexCol?: boolean;
  altRef?: RefObject<HTMLDivElement>;
}

const FlexContainer = forwardRef<HTMLDivElement, FlexContainerProps>(
  // export const FlexContainer = (props: FlexContainerProps) => {
  (props: FlexContainerProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      center = false,
      gap = 'md',
      px = false,
      pr = false,
      pl = false,
      py = false,
      pb = false,
      pt = false,
      maxW = true,
      grow = true,
      flexCol = false,
      className,
      children,
      ...rest
    } = props;

    return (
      <div
        ref={ref}
        className={clsx([
          'flex',
          flexCol ? 'flex-col' : 'flex-row',
          {
            'pr-5 lg:pr-12': pr || px,
            'pl-5 lg:pl-12': pl || px,
            'pt-12 lg:pt-20': pt || py,
            'pb-12 lg:pb-20': pb || py,
            'gap-8 lg:gap-10': gap === 'sm',
            'gap-10 lg:gap-20': gap === 'md',
            'gap-14 lg:gap-28': gap === 'lg',

            'max-w-screen-2xl': maxW,
            'items-center justify-center': center,
            'w-full': grow,
          },
          className,
        ])}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

export default FlexContainer;

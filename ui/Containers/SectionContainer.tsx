import { forwardRef, HTMLAttributes, RefObject } from 'react';
import clsx from 'clsx';

interface FlexContainerProps extends HTMLAttributes<HTMLElement> {
  center?: boolean;
  gap?: boolean;
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

export const SectionContainer = forwardRef<HTMLElement, FlexContainerProps>(
  (props, ref) => {
    const {
      center = true,
      gap = true,
      px = true,
      pr = true,
      pl = true,
      py = true,
      pb = true,
      pt = true,
      maxW = false,
      grow = true,
      flexCol = false,
      className,
      children,
      ...rest
    } = props;

    return (
      <section
        ref={ref}
        className={clsx([
          'relative flex',
          flexCol ? 'flex-col' : 'flex-row',
          px && {
            'pr-5 lg:pr-12': pr,
            'pl-5 lg:pl-12': pl,
          },
          py && {
            'pt-16 lg:pt-24 first:pt-0': pt,
            'pb-16 lg:pb-24': pb,
          },
          {
            'gap-y-12 lg:gap-y-20': gap,
            'max-w-screen-xl': maxW,
            'items-center justify-center': center,
            'w-full': grow,
          },
          className,
        ])}
        {...rest}
      >
        {children}
      </section>
    );
  }
);

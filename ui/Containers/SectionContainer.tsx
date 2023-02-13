import { ComponentPropsWithoutRef, forwardRef, RefObject } from 'react';
import clsx from 'clsx';

interface SectionContainerProps extends ComponentPropsWithoutRef<'section'> {
  center?: boolean;
  gap?: boolean;
  wFull?: boolean;
  px?: boolean;
  pr?: boolean;
  pl?: boolean;
  py?: boolean;
  pb?: boolean;
  pt?: boolean;
  maxW?: boolean;
  flex?: boolean;
  flexCol?: boolean;
  altRef?: RefObject<HTMLDivElement>;
}

export const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
  (props, ref) => {
    const {
      center = false,
      gap = true,
      px = true,
      pr = true,
      pl = true,
      py = true,
      pb = true,
      pt = true,
      maxW = false,
      wFull = true,
      flex = true,
      flexCol = false,
      className,
      children,
      ...rest
    } = props;

    return (
      <section
        ref={ref}
        className={clsx([
          'relative',
          flex ? 'flex' : 'block',
          flexCol ? 'flex-col' : 'flex-row',
          {
            'pr-5 lg:pr-12': pr && px,
            'pl-5 lg:pl-12': pl && px,
            'pt-20 lg:pt-48 first:pt-0': pt && py,
            'pb-20 lg:pb-48': pb && py,
            'gap-y-24 lg:gap-y-48': gap,
            'max-w-screen-xl': maxW,
            'items-center justify-center': center,
            'w-full': wFull,
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

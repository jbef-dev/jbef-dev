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
  my?: boolean;
  mb?: boolean;
  mt?: boolean;
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
      my = false,
      mb = false,
      mt = false,
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
            'pt-16 lg:pt-32 first:pt-0': pt && py,
            'pb-16 lg:pb-32': pb && py,
            'mt-16 lg:mt-32': mt || my,
            'mb-16 lg:mb-32': mb || my,
            'gap-y-16 lg:gap-y-32': gap,
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

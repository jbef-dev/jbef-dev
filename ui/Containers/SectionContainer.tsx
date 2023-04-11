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
  overflow?: boolean;
}

const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
  (props, ref) => {
    const {
      center = true,
      gap = true,
      px = false,
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
      overflow = false,
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
          flexCol ? 'flex-col' : null,
          {
            'pr-5 lg:pr-12': pr && px,
            'pl-5 lg:pl-12': pl && px,
            // 'pt-16 lg:pt-32 first:pt-28 lg:first:pt-36': pt && py,
            'pt-20 lg:pt-40': pt && py,
            'pb-20 lg:pb-40': pb && py,
            'mt-20 lg:mt-40': mt || my,
            'mb-20 lg:mb-40': mb || my,
            'gap-y-28 lg:gap-y-52': gap,
            'max-w-screen-xl': maxW,
            'overflow-hidden': !overflow,
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

export default SectionContainer;

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
            'pt-32 lg:pt-64': pt && py,
            'pb-32 lg:pb-64': pb && py,
            'mt-12 lg:mt-24': mt || my,
            'mb-12 lg:mb-24': mb || my,
            'gap-y-32 lg:gap-y-60': gap,
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

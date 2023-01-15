import { CSSProperties, HTMLAttributes, ReactNode } from 'react'
import { FixedCarousel } from './FixedCarousel/FixedCarousel'
// import { FreeCarousel } from './FreeCarousel/FreeCarousel'

export interface CarouselProps<T> extends HTMLAttributes<HTMLDivElement> {
  variant: 'free' | 'fixed'
  items: Array<T>
  minwidth?: string
  midwidth?: string
  maxwidth?: string
  children: ReactNode[]
  elementGap?: CSSProperties['gap']
  autoScroll?: boolean
  onElementClick?: (p: any) => void // Add extra functionality on element click
}

export const Carousel = <T extends Record<string, any>>(
  props: CarouselProps<T>
) => {
  const { variant, autoScroll, children, ...rest } = props

  switch (variant) {
    case 'fixed':
      return (
        <FixedCarousel autoScroll={autoScroll} {...rest}>
          {children}
        </FixedCarousel>
      )
    case 'free':
      // return <FreeCarousel {...rest}>{children}</FreeCarousel>
      return null
  }
}

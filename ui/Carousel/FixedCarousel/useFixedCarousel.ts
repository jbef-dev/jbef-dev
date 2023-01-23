import { PanInfo } from 'framer-motion'
import { useEffect, useState } from 'react'

interface useCarouselProps<T> {
  items: T[]
  minwidth: string
  midwidth: string
  maxwidth: string
  autoScroll?: boolean
  onElementClick?: (p: any) => void
}

export const useCarouselFixed = <T extends Record<string, any>>({
  items,
  minwidth,
  midwidth,
  maxwidth,
  onElementClick,
  autoScroll,
}: useCarouselProps<T>) => {
  const [isDrag, setIsDrag] = useState<boolean>(false)
  const [position, setPosition] = useState<number>(0)
  // TODO SHOULD CONVERT THIS TO USEREDUCER INSTEAD OF USESTATE
  const [counter, setCounter] = useState<number | undefined>(
    autoScroll ? 0 : undefined
  )

  const handleElClick = (
    e:
      | MouseEvent
      | React.MouseEvent<HTMLDivElement>
      | React.TouchEvent<HTMLDivElement>
      | TouchEvent
      | PointerEvent,
    index: number,
    item: T | undefined
  ) => {
    e.preventDefault()
    if (!isDrag) {
      setPosition(index)
      onElementClick && onElementClick(item) // run extra functionality only if provided
    }
    setIsDrag(false)
  }

  const handleDrag = () => {
    setIsDrag(true)
  }

  const handleNavClick = (direction: 'left' | 'right', loop?: boolean) => {
    switch (direction) {
      case 'left':
        if (position === 0) {
          !loop ? setPosition(0) : setPosition(items.length - 1)
        } else {
          setPosition(pos => pos - 1)
        }
        break
      case 'right':
        if (position === items.length - 1) {
          !loop ? setPosition(items.length - 1) : setPosition(0)
        } else {
          setPosition(pos => pos + 1)
        }
        break
    }
  }

  const handleDragEnd = (dragInfo: PanInfo) => {
    const { offset } = dragInfo
    const threshold = 100
    if (offset.x > threshold) handleNavClick('left')
    if (offset.x < -threshold) handleNavClick('right')
  }

  const elementSizeCss = `clamp(${minwidth}, ${midwidth}, ${maxwidth})`

  useEffect(() => {
    if (counter === undefined) return
    const timer = setTimeout(() => {
      // TODO SHOULD CONVERT THIS TO USEREDUCER INSTEAD OF USESTATE
      setCounter(c => (c! >= items.length - 1 ? 0 : c! + 1))
      handleNavClick('right', true)
    }, 4 * 1000)
    return () => clearTimeout(timer)
  }, [counter, handleNavClick, setCounter])

  return {
    elementSizeCss,
    handleDrag,
    handleDragEnd,
    handleElClick,
    handleNavClick,
    position,
    setCounter,
  }
}

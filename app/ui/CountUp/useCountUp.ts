import { useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface useCountUpProps {
  number: number
  duration?: number
  increment?: number
}

export const useCountUp = (props: useCountUpProps) => {
  const { duration = 1.5, increment = 1, number } = props

  const ref = useRef<HTMLDivElement>(null)

  const inview = useInView(ref, { once: true, amount: 0.8 })

  // /////////////////////////////////////////////////
  // NEW METHOD
  // /////////////////////////////////////////////////
  const [count, setCount] = useState<number | undefined>(undefined)
  const incrementTime = (duration / number) * 1000 * increment

  useEffect(() => {
    inview && setCount(0)
  }, [inview])

  useEffect(() => {
    if (count === undefined) return
    const timer = setTimeout(() => {
      count + increment > number
        ? setCount(count => count! + (number % increment))
        : setCount(count => count! + increment)
    }, incrementTime)
    if (count >= number) clearTimeout(timer)
    return () => clearTimeout(timer)
  }, [count])

  return { count, ref } as const
}

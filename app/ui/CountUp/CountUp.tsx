import { useCountUp } from '@ui/CountUp/useCountUp'
import { CSSProperties } from 'react'

/**
 * Custom component that displays a countup animation
 */
interface FeatureDivProps {
  /**
   * number - number to reach
   */
  number: number
  /**
   * duration? - the duration of the countup
   * @defaultvalue `1.5`
   */
  duration?: number
  /**
   * increment? - the amount by which it increments
   * @defaultvalue `1`
   */
  increment?: number
  textBefore?: string
  textAfter?: string
  color?: CSSProperties['color']
}

/**
 * Custom component that displays a countup animation
 *
 * @prop number - target number
 * @prop duration? - duration of the countup (default: 1.5)
 * @prop increment? - amount by which it increments (deafult: 1)
 */
export const CountUp = (props: FeatureDivProps) => {
  // const theme = useTheme()

  const { color, textBefore = '+', textAfter, ...rest } = props

  const { count, ref } = useCountUp(rest)

  return (
    <div
      className='m-0 text-5xl font-black text-primary-500'
      ref={ref}
      // style={{
      //   color: color,
      // }}
    >
      {textBefore}
      {count}
      {textAfter}
    </div>
  )
}

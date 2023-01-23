import { myAnimation } from '@/styles/customAnimations';
import clsx from 'clsx';
import {
  HTMLMotionProps,
  motion,
  MotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';

// interface SquareProps extends HTMLAttributes<HTMLDivElement> {
interface SquareProps extends HTMLMotionProps<'div'> {
  containerProgress: MotionValue<number>;
  counter: number;
}

export const Square = (props: SquareProps) => {
  const { containerProgress, counter, className, ...rest } = props;

  const springOpts = {
    stiffness: myAnimation.values.stiffness.high,
    damping: myAnimation.values.damping.max,
  };
  const springInput = useSpring(containerProgress, springOpts);
  // const squareY = useTransform(
  //   springInput,
  //   [0, 1],
  //   [`${Math.sin(counter) * 20}vh`, '0vh']
  //   // [`${Math.sinh(counter)}vh`, '0vh']
  // );
  const squareRadius = useTransform(springInput, [0, 1], ['100%', '0%']);

  return (
    <motion.div
      className={clsx('absolute top-0 w-[175%] h-[200%]', className)}
      // style={{ y: squareY }}
      // style={{ borderRadius: `${squareRadius} 0px` }}
      // style={{ borderRadius: `40% ${Math.ceil(Number(squareRadius))} 0% 0%`}}
      style={{ borderRadius: squareRadius }}
      {...rest}
    ></motion.div>
  );
};

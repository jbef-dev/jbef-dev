import { myAnimation } from '@/styles/customAnimations';
import { motion, MotionValue, useSpring, useTransform } from 'framer-motion';

export const Square = ({
  containerProgress,
  counter,
}: {
  containerProgress: MotionValue<number>;
  counter: number;
}) => {
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
  const squareRadius = useTransform(containerProgress, [0, 1], ['100%', '0%']);

  return (
    <motion.div
      className='absolute top-0 w-[100%] h-[200%] text-white bg-black'
      // style={{ y: squareY }}
      // style={{ borderRadius: `${squareRadius} 0px` }}
      // style={{ borderRadius: `40% ${Math.ceil(Number(squareRadius))} 0% 0%`}}
      style={{ borderRadius: squareRadius }}
    ></motion.div>
  );
};

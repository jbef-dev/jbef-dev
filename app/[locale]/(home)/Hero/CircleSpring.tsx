import { myAnimation } from '@/styles/customAnimations';
import { motion, MotionValue, useSpring, useTransform } from 'framer-motion';

interface CircleSpringProps {
  containerScroll: MotionValue<number>;
}

export const CircleSpring = ({ containerScroll }: CircleSpringProps) => {
  const spring = myAnimation.spring.default;
  const springInput = useSpring(containerScroll, spring);

  const circleStart = 0.1;
  const x = useTransform(
    springInput,
    [circleStart, 0.3, 1],
    ['0%', '-30%', '50%']
  );
  const y = useTransform(
    springInput,
    [circleStart, 0.5, 1],
    ['-100%', '-130%', '-100%']
  );
  const opacity = useTransform(
    springInput,
    [circleStart, 0.5, 1],
    [0.15, 0.1, 0.05]
  );
  const scale = useTransform(springInput, [circleStart, 0.5, 1], [1, 2.3, 4]);
  // const bgColor = useTransform(
  //   springInput,
  //   [circleStart, 1],
  //   ['#E8175D', '#E8175D']
  // );

  return (
    <motion.div
      className='absolute top-0 right-0 rounded-full filter blur-2xl bg-accent-main w-[clamp(9rem,80vw,45rem)] aspect-square -z-30'
      style={{
        // x: x,
        // y: y,
        opacity: opacity,
        scale: scale,
        // backgroundColor: bgColor,
      }}
    ></motion.div>
  );
};

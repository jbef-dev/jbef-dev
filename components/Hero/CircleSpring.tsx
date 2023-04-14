import { customSprings, customTransitions } from '@/ui/animation';
import { motion, MotionValue, useSpring, useTransform } from 'framer-motion';

interface CircleSpringProps {
  containerScroll: MotionValue<number>;
}

export const CircleSpring = ({ containerScroll }: CircleSpringProps) => {
  const spring = customSprings.default;
  const springInput = useSpring(containerScroll, spring);

  const circleStart = 0.1;
  // const x = useTransform(
  //   springInput,
  //   [circleStart, 0.3, 1],
  //   ['0%', '-40%', '-10%']
  // );
  const y = useTransform(
    springInput,
    [circleStart, 0.5, 1],
    ['0%', '130%', '50%']
  );
  const opacity = useTransform(
    springInput,
    [circleStart, 0.5, 1],
    [0.2, 0.15, 0.3]
  );
  const scale = useTransform(springInput, [circleStart, 0.5, 1], [1, 2.3, 4]);
  // const bgColor = useTransform(
  //   springInput,
  //   [circleStart, 1],
  //   ['#E8175D', '#E8175D']
  // );

  return (
    <motion.div
      className='absolute -top-[120%] lg:-top-1/3 right-5 lg:right-20 rounded-full filter blur-3xl bg-accent-main w-[clamp(6rem,60vw,25rem)] aspect-square -z-30'
      initial={{
        borderRadius: '50% 40% 50% 60%',
        translateX: 0,
        scale: 1,
      }}
      animate={{
        borderRadius: [
          '50% 40% 50% 60%',
          '45% 50% 40% 45%',
          '60% 45% 50% 50%',
          '45% 50% 65% 40%',
        ],
        translateX: [0, 20, -10, -30],
        scale: [1, 1.7, 1.1, 1.4],
      }}
      transition={{
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 6,
        ease: customTransitions.easeOutSlow.ease,
        type: customTransitions.easeOutSlow.type,
      }}
      style={{
        y: y,
        opacity: opacity,
      }}
    ></motion.div>
  );
};

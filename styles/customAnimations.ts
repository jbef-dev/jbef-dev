import type { Transition, Variants } from 'framer-motion';

interface CustomValues {
  [k: string]: {
    [m: string]: number;
  };
}

const values = {
  duration: {
    fastest: 0.1,
    veryFast: 0.19,
    fast: 0.28,
    normal: 0.39,
    slow: 0.51,
    verySlow: 0.73,
    slowest: 0.95,
    long: 2,
  },
  bounce: {
    none: 0,
    low: 0.2,
    mid: 0.4,
    high: 0.65,
    max: 0.8,
  },
  stiffness: {
    low: 180,
    mid: 250,
    default: 400,
    high: 650,
    max: 900,
  },
  damping: {
    min: 20,
    low: 35,
    mid: 60,
    high: 85,
    max: 120,
  },
} as const satisfies CustomValues;

interface CustomTransitions {
  [k: string]: Transition;
}

interface CustomVariants {
  [k: string]: Variants;
}

const variants = {
  appearFromLeft: {
    initial: { opacity: 0, x: '-2rem' },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '2rem' },
  },
  appearFromTop: {
    initial: { opacity: 0, y: '-10%' },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '-10%' },
  },
  appearFromBottom: {
    initial: { opacity: 0, y: '15%' },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '-15%' },
  },
  enterBottomExitTop: {
    initial: { opacity: 0, translateY: '10%' },
    animate: { opacity: 1, translateY: 0 },
    exit: { opacity: 0, translateY: '-10%' },
  },
  zoomIn: {
    initial: { scale: 0.85 },
    animate: { scale: 1 },
    exit: { scale: 1.15 },
  },
  zoomOut: {
    initial: { scale: 1.3 },
    animate: { scale: 1 },
    exit: { scale: 0.75 },
  },
  fromBelow: {
    initial: { y: '120%' },
    animate: { y: 0 },
    exit: { y: '-120%' },
  },
  appearMenu: {
    initial: { opacity: 0, y: '-10%', scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: '-10%', scale: 0.95 },
  },
  appear3d: {
    initial: {
      opacity: 0,
      scaleX: '85%',
      scaleY: '35%',
      skewX: '-20deg',
      // rotateX: '75deg',
      // rotateY: '4deg',
      // rotateZ: '-10deg',
      transformOrigin: 'bottom',
    },
    animate: {
      opacity: 1,
      // scale: '100%',
      scaleX: '100%',
      scaleY: '100%',
      skewX: '0deg',
      // rotateX: '0deg',
      // rotateY: '0deg',
      // rotateZ: '0deg',
      transformOrigin: 'bottom',
    },
    exit: {
      opacity: 0,
      scaleX: '85%',
      scaleY: '35%',
      skewX: '-20deg',
      // rotateX: '75deg',
      // rotateY: '4deg',
      // rotateZ: '-10deg',
      transformOrigin: 'bottom',
    },
  },
} as const satisfies CustomVariants;

interface VelocityOptions {
  velocity?: number;
  restSpeed?: number;
  restDelta?: number;
}

interface DurationSpringOptions {
  duration?: number;
  bounce?: number;
}

interface SpringOptions extends DurationSpringOptions, VelocityOptions {
  stiffness?: number;
  damping?: number;
  mass?: number;
}

interface CustomSprings {
  [k: string]: SpringOptions;
}

const springs = {
  slow: {
    stiffness: 280,
    damping: 70,
  },
  normal: {
    stiffness: values.stiffness.default,
    damping: values.damping.mid,
  },
  default: {
    stiffness: values.stiffness.default,
    bounce: values.bounce.none,
    damping: values.damping.max,
  },
  fast: {
    stiffness: 900,
    bounce: values.bounce.none,
    damping: values.damping.max,
  },
} as const satisfies CustomSprings;

const transition = {
  fastest: {
    type: 'spring',
    duration: values.duration.fastest,
    bounce: values.bounce.none,
  },
  easeInOut: {
    type: 'keyframes',
    ease: 'easeInOut',
    duration: values.duration.normal,
  },
  easeOut: {
    type: 'keyframes',
    ease: 'easeInOut',
    duration: values.duration.verySlow,
  },
  easeOutSlow: {
    type: 'keyframes',
    ease: 'easeInOut',
    duration: values.duration.slowest,
  },
  veryFast: {
    type: 'spring',
    duration: values.duration.veryFast,
    bounce: values.bounce.low,
  },
  fast: {
    type: 'spring',
    duration: values.duration.fast,
    bounce: values.bounce.low,
  },
  normal: {
    type: 'spring',
    stiffness: values.stiffness.mid,
    damping: values.damping.mid,
  },
  default: {
    type: 'spring',
    ...springs.default,
  },
  slow: {
    type: 'spring',
    duration: values.duration.slow,
    bounce: values.bounce.mid,
  },
  modalInOut: {
    type: 'spring',
    duration: values.duration.verySlow,
    bounce: values.bounce.low,
  },
  appearMenu: {
    type: 'keyframes',
    ease: 'easeInOut',
    duration: values.duration.normal,
  },
  menuClose: {
    type: 'spring',
    duration: values.duration.slow,
    bounce: values.bounce.none,
  },
} as const satisfies CustomTransitions;

interface CustomAnimations {
  values: CustomValues;
  transition: CustomTransitions;
  variants: CustomVariants;
  spring: CustomSprings;
}

export const myAnimation = {
  values: values,
  transition: transition,
  variants: variants,
  spring: springs,
} as const satisfies CustomAnimations;

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
    normal: 0.35,
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
    high: 380,
    max: 550,
  },
  damping: {
    min: 20,
    low: 35,
    mid: 60,
    high: 85,
    max: 100,
  },
} as const satisfies CustomValues;

interface CustomTransitions {
  [k: string]: Transition;
}

const transition = {
  tweenFast: { type: 'tween', duration: values.duration.fastest },
  tween: { type: 'tween', duration: values.duration.slow },
  tweenSlow: { type: 'tween', duration: values.duration.verySlow },
  fastest: {
    type: 'spring',
    duration: values.duration.fastest,
    bounce: values.bounce.none,
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
  appear: {
    type: 'spring',
    duration: values.duration.verySlow,
    bounce: values.bounce.low,
  },
  menuOpen: {
    type: 'spring',
    duration: values.duration.normal,
    bounce: values.bounce.none,
  },
  menuClose: {
    type: 'spring',
    duration: values.duration.slow,
    bounce: values.bounce.none,
  },
  bouncy: {
    type: 'spring',
    duration: values.duration.normal,
    bounce: values.bounce.high,
  },
} as const satisfies CustomTransitions;

interface CustomVariants {
  [k: string]: Variants;
}

const variants = {
  appearFromLeft: {
    initial: { opacity: 0, x: '-2rem' },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '2rem' },
  },
  fromBelow: {
    initial: { y: '120%' },
    animate: { y: 0 },
    exit: { y: '120%' },
  },
  appear3d: {
    initial: {
      opacity: 0,
      rotateX: '75deg',
      rotateY: '4deg',
      rotateZ: '-10deg',
      transformOrigin: 'bottom',
    },
    animate: {
      opacity: 1,
      rotateX: '0deg',
      rotateY: '0deg',
      rotateZ: '0deg',
    },
    exit: {
      opacity: 0,
      rotateX: '75deg',
      rotateY: '4deg',
      rotateZ: '-10deg',
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
  default: {
    stiffness: values.stiffness.high,
    damping: values.damping.max,
  },
} as const satisfies CustomSprings;

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

import { Transition } from 'framer-motion';
import { customValues } from './customValues';
import { customSprings } from './customSprings';

interface CustomTransitions {
  [k: string]: Transition;
}

const customTransitions = {
  fastest: {
    type: 'spring',
    duration: customValues.duration.fastest,
    bounce: customValues.bounce.none,
  },
  easeInOut: {
    type: 'keyframes',
    ease: 'easeInOut',
    duration: customValues.duration.normal,
  },
  easeOut: {
    type: 'keyframes',
    ease: 'easeInOut',
    duration: customValues.duration.verySlow,
  },
  easeOutSlow: {
    type: 'keyframes',
    ease: 'easeInOut',
    duration: customValues.duration.slowest,
  },
  veryFast: {
    type: 'spring',
    duration: customValues.duration.veryFast,
    bounce: customValues.bounce.low,
  },
  fast: {
    type: 'spring',
    duration: customValues.duration.fast,
    bounce: customValues.bounce.low,
  },
  normal: {
    type: 'spring',
    stiffness: customValues.stiffness.mid,
    damping: customValues.damping.mid,
  },
  default: {
    type: 'spring',
    ...customSprings.default,
  },
  slow: {
    type: 'spring',
    duration: customValues.duration.slow,
    bounce: customValues.bounce.mid,
  },
  modalInOut: {
    type: 'spring',
    duration: customValues.duration.verySlow,
    bounce: customValues.bounce.low,
  },
  appearMenu: {
    type: 'keyframes',
    ease: 'easeInOut',
    duration: customValues.duration.normal,
  },
  menuClose: {
    type: 'spring',
    duration: customValues.duration.slow,
    bounce: customValues.bounce.none,
  },
} as const satisfies CustomTransitions;

export { customTransitions, type CustomTransitions };

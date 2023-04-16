import { VelocityOptions } from 'framer-motion';
import { customValues } from './customValues';

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

const customSprings = {
  loose: {
    stiffness: 250,
    damping: 100,
  },
  normal: {
    stiffness: customValues.stiffness.default,
    damping: customValues.damping.mid,
  },
  default: {
    stiffness: 400,
    bounce: 0,
    damping: 100,
  },
  stiff: {
    stiffness: 600,
    bounce: 0,
    damping: 75,
  },
} as const satisfies CustomSprings;

export { customSprings, type CustomSprings };

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
  slow: {
    stiffness: 280,
    damping: 70,
  },
  normal: {
    stiffness: customValues.stiffness.default,
    damping: customValues.damping.mid,
  },
  default: {
    stiffness: customValues.stiffness.default,
    bounce: customValues.bounce.none,
    damping: customValues.damping.max,
  },
  fast: {
    stiffness: 900,
    bounce: customValues.bounce.none,
    damping: customValues.damping.max,
  },
} as const satisfies CustomSprings;

export { customSprings, type CustomSprings };

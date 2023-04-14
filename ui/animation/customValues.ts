interface CustomValues {
  [k: string]: {
    [m: string]: number;
  };
}

const customValues = {
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
    max: 100,
  },
} as const satisfies CustomValues;

export { customValues, type CustomValues };

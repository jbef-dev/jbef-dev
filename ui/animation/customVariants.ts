import { Variants } from 'framer-motion';

interface CustomVariants {
  [k: string]: Variants;
}

const customVariants = {
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
    initial: { scale: 0.75 },
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

export { customVariants, type CustomVariants };

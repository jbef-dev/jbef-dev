import { myAnimation } from '@/styles/customAnimations';
import { HTMLMotionProps, motion } from 'framer-motion';
import * as React from 'react';

const NewTitle = React.forwardRef<HTMLHeadingElement, HTMLMotionProps<'h1'>>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <motion.h1
        ref={forwardedRef}
        variants={myAnimation.variants.appearFromBottom}
        transition={myAnimation.transition.default}
        {...props}
      >
        {children}
      </motion.h1>
    );
  }
);

NewTitle.displayName = 'NewTitle';

export default NewTitle;

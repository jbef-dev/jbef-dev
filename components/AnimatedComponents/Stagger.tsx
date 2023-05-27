'use client';

import { HTMLMotionProps, motion } from 'framer-motion';
import { customVariants, customTransitions } from '@/ui/animation';
import * as React from 'react';

const renderChar = (char: string) => {
  if (char === ' ') {
    return <span>&nbsp;</span>;
  } else {
    return char;
  }
};

export const Stagger = ({
  divide = 'letter',
  children,
  variants = customVariants.appearFromBottom,
  transition = customTransitions.default,
  ...props
}: HTMLMotionProps<'span'> & { divide?: 'word' | 'letter' }) => {
  if (!children) {
    throw new Error('must contain children!!!');
  }

  const divisionCharacter = divide === 'letter' ? '' : ' ';

  if (Array.isArray(children) && React.Children.count(children) > 1) {
    const childrenAsStringsArray = children.map(child =>
      typeof child === 'string' ? child : String(child.props.children)
    );

    const childrenAsString = childrenAsStringsArray.join(divisionCharacter);

    return (
      <>
        {childrenAsString.split(divisionCharacter).map((kek, i) => (
          <motion.span
            key={kek + i}
            variants={customVariants.appearFromBottom}
            transition={customTransitions.default}
            {...props}
          >
            {renderChar(kek)}
          </motion.span>
        ))}
      </>
    );
  }

  if (typeof children === 'string' && React.Children.count(children) === 1) {
    return (
      <>
        {children.split(divisionCharacter).map((kek, i) => (
          <motion.span
            key={kek + i}
            variants={variants}
            transition={transition}
            {...props}
          >
            {renderChar(divisionCharacter)}
            {renderChar(kek)}
          </motion.span>
        ))}
      </>
    );
  } else {
    return null;
  }
};

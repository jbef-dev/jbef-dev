'use client';

import { myAnimation } from '@/styles/customAnimations';
import {
  AppearOnScroll,
  AppearOnScrollChild,
} from '@/ui/Animated/AppearOnScroll';
import { FlexContainer } from '@/ui/Containers';
import { AnimatedParagraph, Heading3 } from '@/ui/Typography';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  icons: ReactNode[];
  titles: ReactNode[];
  paragraph: string;
  align: 'left' | 'right';
}

const FeatureRow = ({ icons, titles, paragraph, align }: Props) => {
  return (
    <FlexContainer flexCol>
      <FlexContainer
        flexCol
        grow={false}
        className={clsx(align === 'left' ? 'self-start' : 'self-end')}
      >
        <Heading3 className='flex items-center gap-x-4'>
          <div className='flex flex-col gap-y-6'>
            {icons.map((icon, i) => (
              <svg
                key={i}
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                className='w-6 lg:w-14 aspect-square'
              >
                {icon}
              </svg>
            ))}
          </div>
          <div className='flex flex-col w-full'>
            {titles.map((title, i) => (
              <AppearOnScroll key={i} className='overflow-hidden' variants={{}}>
                <AppearOnScrollChild>{title}</AppearOnScrollChild>
              </AppearOnScroll>
            ))}
          </div>
        </Heading3>

        <AppearOnScroll
          className='flex text-neutral-300 w-full max-w-md lg:max-w-screen-sm font-light text-responsive-md'
          variants={myAnimation.variants.appearFromBottom}
          transition={myAnimation.transition.easeOutSlow}
        >
          {paragraph}
        </AppearOnScroll>
        {/* <AnimatedParagraph className='flex text-neutral-300 w-full max-w-md lg:max-w-screen-sm font-light text-responsive-md'> */}
        {/*   {paragraph} */}
        {/* </AnimatedParagraph> */}
      </FlexContainer>
    </FlexContainer>
  );
};

export default FeatureRow;

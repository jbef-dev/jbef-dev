import {
  AppearOnScroll,
  AppearOnScrollChild,
} from '@/ui/Animated/AppearOnScroll';
import { FlexContainer } from '@/ui/Containers';
import { AnimatedParagraph, Heading3 } from '@/ui/Typography';
import { customTransitions, customVariants } from '@/ui/animation';
import clsx from 'clsx';
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
                className='aspect-square w-6 lg:w-14'
              >
                {icon}
              </svg>
            ))}
          </div>
          <div className='flex w-full flex-col'>
            {titles.map((title, i) => (
              <AppearOnScroll
                key={i}
                amount={0.85}
                variants={{}}
                transition={{}}
                className='overflow-hidden'
              >
                <AppearOnScrollChild>{title}</AppearOnScrollChild>
              </AppearOnScroll>
            ))}
          </div>
        </Heading3>

        <AppearOnScroll
          amount={0.35}
          className='flex w-full max-w-md text-responsive-md font-light text-neutral-300 lg:max-w-screen-sm'
          variants={customVariants.appearFromBottom}
          transition={customTransitions.easeOutSlow}
        >
          {paragraph}
        </AppearOnScroll>
      </FlexContainer>
    </FlexContainer>
  );
};

export default FeatureRow;

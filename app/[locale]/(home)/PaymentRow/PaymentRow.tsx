import { FlexContainer } from '@/ui/Containers/FlexContainer';
import { AnimatedParagraph } from '@/ui/Typography/AnimatedParagraph';
import { Heading3 } from '@/ui/Typography/Heading3';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  icons: ReactNode[];
  title: ReactNode;
  paragraph: string;
  align: 'left' | 'right';
}

export const PaymentRow = ({ icons, title, paragraph, align }: Props) => {
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
          <div className='flex flex-col w-full'>{title}</div>
        </Heading3>

        <AnimatedParagraph className='flex text-neutral-300 w-full max-w-md lg:max-w-screen-sm font-light text-responsive-md'>
          {paragraph}
        </AnimatedParagraph>
      </FlexContainer>
    </FlexContainer>
  );
};

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
    <div
      className={clsx(
        'flex w-full max-w-screen-2xl',
        align === 'left' ? 'justify-start' : 'justify-end'
      )}
    >
      <FlexContainer flexCol grow={false}>
        <Heading3 className='flex items-center gap-x-4'>
          <div className='flex flex-col gap-y-4'>
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
          <span className='flex flex-col gap-y-2 w-full'>{title}</span>
        </Heading3>

        <AnimatedParagraph className='flex text-neutral-300 w-full max-w-md lg:max-w-screen-sm font-light text-responsive-md'>
          {paragraph}
        </AnimatedParagraph>
      </FlexContainer>
    </div>
  );
};

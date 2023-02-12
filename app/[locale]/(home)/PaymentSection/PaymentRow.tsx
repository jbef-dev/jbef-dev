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
        'flex flex-col gap-y-8 max-w-screen-2xl w-full',
        align === 'left' ? 'items-start' : 'items-end'
      )}
    >
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
        <span className='flex flex-col w-full'>{title}</span>
      </Heading3>

      <AnimatedParagraph className='flex w-full max-w-screen-md font-light text-responsive-md'>
        {paragraph}
      </AnimatedParagraph>
    </div>
  );
};

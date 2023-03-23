import { Button } from '@/ui/Button/Button';
import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { FaCheck } from 'react-icons/fa';

interface PricingTableProps extends ComponentPropsWithoutRef<'ul'> {
  pricingStrategy: {
    title: string;
    features: { name: string; included?: boolean }[];
    price: { amount: string; frequency?: string };
  }[];
}

export const PricingTable = ({
  pricingStrategy,
  className,
  ...props
}: PricingTableProps) => {
  return (
    <ul
      className={clsx(
        'flex flex-col max-w-screen-xl w-full divide-y divide-black border-t border-b border-1 border-black',
        className
      )}
      {...props}
    >
      {pricingStrategy.map(({ title, features, price }, i) => (
        <li key={title + i} className='flex flex-col gap-y-4 py-10'>
          <h6 className='font-medium text-responsive-lg'>{title}</h6>
          <div className='flex justify-center gap-x-4'>
            <ul className='grid lg:grid-cols-2 w-full gap-2 justify-between font-light text-responsive-md'>
              {features.map((feature, i) => (
                <li key={i} className='flex items-center gap-x-2'>
                  {feature.included ? (
                    <FaCheck className='text-responsive-xs' />
                  ) : null}
                  <span>{feature.name}</span>
                </li>
              ))}
            </ul>
            <div className='flex flex-col items-center gap-y-2'>
              <h4 className='text-responsive-lg font-medium'>
                {price.amount}
                {price.frequency ? (
                  <span className='text-xl'>{price.frequency}</span>
                ) : null}
              </h4>
              <Button
                flavor={i === 1 ? 'gradientOutline' : 'outlined'}
                buttonSize='lg'
                className='font-medium whitespace-nowrap'
              >
                Start now
              </Button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

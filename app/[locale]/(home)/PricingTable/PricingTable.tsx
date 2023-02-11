import { AnimatedParagraph } from '@/ui/Typography/AnimatedParagraph';
import { AnimatedSpan } from '@/ui/Typography/AnimatedSpan';
import { Heading2 } from '@/ui/Typography/Heading2';
import { FaCheck } from 'react-icons/fa';

export const PricingTable = () => {
  return (
    <>
      <Heading2 className='flex flex-col max-w-screen-2xl items-start gap-x-4'>
        <AnimatedSpan>Transparent</AnimatedSpan>
        <AnimatedSpan className='font-special italic tracking-wider'>
          Pricing
        </AnimatedSpan>
      </Heading2>

      <AnimatedParagraph className='flex w-full max-w-screen-md font-light text-responsive-md'>
        Clear and transparent pricing, no hidden costs or extra charges!
      </AnimatedParagraph>

      <div className='flex w-full max-w-screen-lg flex-col gap-y-10'>
        <div className='flex flex-col w-full p-5 border-t border-b border-1 border-black'>
          <h6 className='uppercase text-responsive-lg'>STANDARD</h6>
          <div className='flex'>
            <ul className='grid grid-cols-2 w-2/3 gap-2 justify-between font-light text-responsive-md'>
              {[...new Array(8)].map((k,i) => (
                <li key={i} className='flex items-center gap-x-2'>
                  <FaCheck className='text-responsive-xs' />
                  <span>Feature</span>
                </li>
              ))}
            </ul>
            <div className='flex items-center justify-center grow'>
              <h4 className='text-responsive-lg'>100$/mo</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

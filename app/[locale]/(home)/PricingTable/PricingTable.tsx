import { Button } from '@/ui/Button/Button';
import { AnimatedParagraph } from '@/ui/Typography/AnimatedParagraph';
import { AOSText } from '@/ui/Typography/AOSText';
import { Heading3 } from '@/ui/Typography/Heading3';
import { FaCheck } from 'react-icons/fa';

export const PricingTable = () => {
  return (
    <>
      <div className='flex flex-col pb-12 lg:pb-20 w-full gap-y-4 max-w-screen-xl'>
        <Heading3 className='flex flex-col items-start gap-x-4'>
          {/* <AnimatedSpan className='bg-transparent backdrop-blur-xl shadow-lg'>Transparent</AnimatedSpan> */}
          <AOSText className='font-medium'>Transparent</AOSText>
          <AOSText className='font-extralight tracking-wider'>
            Pricing
          </AOSText>
        </Heading3>

        <AnimatedParagraph className='flex w-full font-extralight text-responsive-lg'>
          Clear and transparent pricing, no hidden costs or extra charges!
        </AnimatedParagraph>
      </div>

      <ul className='flex flex-col max-w-screen-xl w-full divide-y divide-black border-t border-b border-1 border-black'>
        <li className='flex gap-x-2 py-10'>
          <div className='flex flex-col gap-y-4 w-2/3'>
            <h6 className='font-medium text-responsive-lg'>Full website</h6>
            <ul className='grid grid-cols-2 w-full gap-2 justify-between font-light text-responsive-md'>
              {[...new Array(8)].map((k, i) => (
                <li key={i} className='flex items-center gap-x-2'>
                  <FaCheck className='text-responsive-xs' />
                  <span>Feature</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col items-center gap-y-4 justify-center grow'>
            <h4 className='text-4xl font-medium'>
              150€<span className='text-xl'>/mo</span>
            </h4>
            <Button flavor='outlined' buttonSize='lg' className='font-medium'>
              Start now
            </Button>
          </div>
        </li>

        <li className='flex gap-x-2 py-10'>
          <div className='flex flex-col gap-y-4 w-2/3'>
            <h6 className='font-medium text-responsive-lg'>
              Full website + Blog
            </h6>
            <ul className='grid grid-cols-2 w-full gap-2 justify-between font-light text-responsive-md'>
              {[...new Array(8)].map((k, i) => (
                <li key={i} className='flex items-center gap-x-2'>
                  <FaCheck className='text-responsive-xs' />
                  <span>Feature</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col items-center gap-y-4 justify-center grow'>
            <h4 className='text-4xl font-medium'>
              250€<span className='text-xl'>/mo</span>
            </h4>
            <Button
              flavor='gradientOutline'
              buttonSize='lg'
              className='font-medium'
            >
              Start now
            </Button>
          </div>
        </li>

        <li className='flex gap-x-2 py-10'>
          <div className='flex flex-col gap-y-4 w-2/3'>
            <h6 className='font-medium text-responsive-lg'>E-commerce</h6>
            <ul className='grid grid-cols-2 w-full gap-2 justify-between font-light text-responsive-md'>
              {[...new Array(8)].map((k, i) => (
                <li key={i} className='flex items-center gap-x-2'>
                  <FaCheck className='text-responsive-xs' />
                  <span>Feature</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col items-center gap-y-4 justify-center grow'>
            <h4 className='text-4xl font-medium'>Custom</h4>
            <Button flavor='outlined' buttonSize='lg' className='font-medium'>
              Contact
            </Button>
          </div>
        </li>
      </ul>
    </>
  );
};

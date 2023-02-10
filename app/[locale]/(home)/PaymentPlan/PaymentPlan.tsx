import { AnimatedParagraph } from '@/ui/Typography/AnimatedParagraph';
import { AnimatedSpan } from '@/ui/Typography/AnimatedSpan';
import { Heading3 } from '@/ui/Typography/Heading3';
import clsx from 'clsx';

export const PaymentPlan = () => {
  const iconStyles = clsx('w-6 lg:w-14 aspect-square');

  return (
    <>
      <div className='flex flex-col items-start gap-y-8 max-w-screen-2xl w-full'>
        <Heading3 className='flex items-center gap-x-4'>
          <div className='flex flex-col gap-y-4'>
            <svg
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={iconStyles}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <svg
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={iconStyles}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          <span className='flex flex-col w-full'>
            <AnimatedSpan>No upfront</AnimatedSpan>
            <AnimatedSpan className='font-special italic tracking-wider'>
              payment
            </AnimatedSpan>
          </span>
        </Heading3>

        <AnimatedParagraph className='flex w-full max-w-screen-md font-light text-responsive-md'>
          No up front payment, instead, we establish a relationship and pay
          monthly to include all work done on the website.
        </AnimatedParagraph>
      </div>

      <div className='flex justify-end items-end flex-col gap-y-8 max-w-screen-2xl w-full'>
        <Heading3 className='flex items-center gap-x-4'>
          <div className='flex flex-col gap-y-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={iconStyles}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={iconStyles}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
              />
            </svg>
          </div>

          <span className='flex flex-col'>
            <AnimatedSpan>Developer</AnimatedSpan>
            <AnimatedSpan className='font-special italic tracking-wider'>
              on duty
            </AnimatedSpan>
          </span>
        </Heading3>

        <AnimatedParagraph className='flex w-full max-w-screen-md justify-end font-light text-responsive-md'>
          Keep your website updated! Update to your website when needed, within
          48h, as many times as you need. It's like having a web developer in
          your team on payroll.
        </AnimatedParagraph>
      </div>

      <div className='flex flex-col items-start gap-y-8 max-w-screen-2xl w-full'>
        <Heading3 className='flex items-center gap-x-4'>
          <div className='flex flex-col gap-y-4'>
            <svg
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={iconStyles}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <svg
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={iconStyles}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          <span className='flex flex-col w-full'>
            <AnimatedSpan>hand coded</AnimatedSpan>
            <AnimatedSpan className='font-special italic tracking-wider'>
              website
            </AnimatedSpan>
          </span>
        </Heading3>

        <AnimatedParagraph className='flex w-full max-w-screen-md font-light text-responsive-md'>
          Forget about cookie-cutter websites, we hand code all our work, using
          the most modern technologies used by all major companies. We make
          billion-dollar company technologies accessible to everyone. From the
          largest layout to the smallest button, everything is custom coded and
          the performance benefits are obvious.
        </AnimatedParagraph>
      </div>
    </>
  );
};

import { AnimatedSpan } from '@/ui/Typography/AnimatedSpan';

export const BookMeeting = () => {
  return (
    <div className='flex flex-col w-full items-start'>
      <h3 className='flex uppercase font-light text-responsive-xl'>
        <AnimatedSpan>Book a meeting</AnimatedSpan>
      </h3>
    </div>
  );
};

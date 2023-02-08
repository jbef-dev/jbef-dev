import { AppearingSpan } from '@/ui/Typography/AppearingSpan';

export const BookMeeting = () => {
  return (
    <div className='flex flex-col w-full items-start'>
      <h3 className='flex uppercase font-light text-responsive-xl'>
        <AppearingSpan>Book a meeting</AppearingSpan>
      </h3>
    </div>
  );
};

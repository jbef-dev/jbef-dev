import {
  AppearOnScroll,
  AppearOnScrollChild,
} from '@/ui/Animated/AppearOnScroll';

export const BookMeeting = () => {
  return (
    <div className='flex flex-col w-full items-start'>
      <h3 className='flex uppercase font-light text-responsive-xl'>
        <AppearOnScroll>
          <AppearOnScrollChild>Book a meeting</AppearOnScrollChild>
        </AppearOnScroll>
      </h3>
    </div>
  );
};

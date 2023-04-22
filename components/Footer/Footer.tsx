import { Heading3 } from '@/ui/Typography';
import { Button } from '@/ui/Button/Button';
import { FlexContainer } from '@/ui/Containers';

export const Footer = () => {
  const time = new Intl.DateTimeFormat('default', {
    timeZone: 'Europe/Madrid',
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date());

  return (
    <footer className='relative flex w-full flex-col items-center justify-center gap-y-16 bg-black py-10'>
      <FlexContainer flexCol center px>
        <div className='flex flex-col items-center gap-y-6 text-white'>
          <Heading3 className='flex items-center gap-x-2'>
            {/* <Logo /> */}
            Get in touch
          </Heading3>
          <div className='flex items-center justify-around gap-4 max-lg:flex-col'>
            <a href='mailto:jorge@jbef.dev' target='_blank'>
              <Button buttonSize='lg' flavor='outlined' colorMode='light'>
                jorge@jbef.dev
              </Button>
            </a>
            <a href='tel:+34606516718' target='_blank'>
              <Button buttonSize='lg' flavor='outlined' colorMode='light'>
                +34 606 516 718
              </Button>
            </a>
          </div>
        </div>

        <div className='flex w-full max-w-screen-2xl justify-between text-white max-lg:flex-col-reverse'>
          <div className='flex gap-x-10'>
            <div className='flex flex-col gap-y-2'>
              <span className='text-neutral-500'>Design and development</span>
              <span>
                <a href='https://jbef.dev'>jbef.dev</a> © 2023
              </span>
            </div>
            <div className='flex flex-col gap-y-2'>
              <span className='text-neutral-500'>Local time</span>
              {/* <span>13:00 PM GMT+1</span> */}
              <span>{time} — UTC+2</span>
            </div>
          </div>

          <div className='my-6 h-[1px] w-full bg-neutral-600 lg:hidden'></div>

          <div className='flex flex-col gap-y-2'>
            <span className='text-neutral-500'>Socials</span>
            <div className='flex gap-x-6'>
              <span>Twitter</span>
              <span>Dribbble</span>
            </div>
          </div>
        </div>
      </FlexContainer>
    </footer>
  );
};

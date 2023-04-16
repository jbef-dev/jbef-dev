import { Heading3 } from '@/ui/Typography';
import { Button } from '@/ui/Button/Button';
import { FlexContainer } from '@/ui/Containers';

export const Footer = () => {
  return (
    <footer className='flex flex-col relative w-full bg-black items-center gap-y-16 justify-center py-10'>
      <FlexContainer flexCol center px>
        <div className='text-white flex flex-col items-center gap-y-6'>
          <Heading3 className='flex items-center gap-x-2'>
            {/* <Logo /> */}
            Get in touch
          </Heading3>
          <div className='flex max-lg:flex-col items-center gap-4 justify-around'>
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

        <div className='flex max-lg:flex-col-reverse max-w-screen-2xl w-full text-white justify-between'>
          <div className='flex gap-x-10'>
            <div className='flex flex-col gap-y-2'>
              <span className='text-neutral-500'>Design and development</span>
              <span>
                <a href='https://jbef.dev'>jbef.dev</a> © 2023
              </span>
            </div>
            <div className='flex flex-col gap-y-2'>
              <span className='text-neutral-500'>Local time</span>
              <span>13:00 PM GMT+1</span>
            </div>
          </div>

          <div className='h-[1px] lg:hidden my-6 bg-neutral-600 w-full'></div>

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

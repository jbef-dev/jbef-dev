// import Image from 'next/image';
// import { BUSINESS_INFO } from '@/config/constants/pageContent';
// import logo from '@/public/logo.svg';
// import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
// import { SiGooglemaps, SiGooglemybusiness } from 'react-icons/si';
// import { MdMail } from 'react-icons/md';
// import { Logo } from '@/components/Logo/Logo';
import { Heading3 } from '@/ui/Typography';
import { Button } from '@/ui/Button/Button';

export const Footer = () => {
  return (
    <footer className='flex flex-col relative w-full bg-black items-center gap-y-8 justify-center p-8'>
      <div className='text-white flex flex-col gap-y-6'>
        <Heading3 className='flex items-center gap-x-2'>
          {/* <Logo /> */}
          Get in touch
        </Heading3>
        <div className='flex max-sm:flex-col justify-around'>
          <Button buttonSize='lg' flavor='outlined' colorMode='light'>
            jorge@jbef.dev
          </Button>
          <Button buttonSize='lg' flavor='outlined' colorMode='light' icon>
            +34 606 516 718
          </Button>
        </div>
      </div>

      <div className='flex max-w-screen-2xl w-full text-white justify-between'>
        <div className='flex gap-x-10'>
          <div className='flex flex-col gap-y-2'>
            <span className='text-neutral-500'>Design and development</span>
            <span>jbef.dev © 2023</span>
          </div>
          <div className='flex flex-col gap-y-2'>
            <span className='text-neutral-500'>Local time</span>
            <span>13:00 PM GMT+1</span>
          </div>
        </div>

        <div className='flex flex-col gap-y-2'>
          <span className='text-neutral-500'>Socials</span>
          <div className='flex gap-x-6'>
            <span>Twitter</span>
            <span>Dribbble</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

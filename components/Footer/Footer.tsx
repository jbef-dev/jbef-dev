import Image from 'next/image';
import { BUSINESS_INFO } from '@/config/constants/pageContent';
import logo from '@/public/logo.svg';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiGooglemaps, SiGooglemybusiness } from 'react-icons/si';
import { MdMail } from 'react-icons/md';

export const Footer = () => {
  return (
    <footer className='flex items-center justify-center bg-grayscale-900 p-4 text-grayscale-600'>
      <div className='flex max-w-screen-xl flex-col items-center justify-evenly gap-5'>
        <div className='flex flex-col items-center justify-center gap-5 lg:flex-row lg:justify-around'>
          <div className='flex items-center justify-center gap-6 lg:flex-col'>
            <Image
              alt='Logo'
              src={logo}
              loading='lazy'
              height={35}
              className='object-contain opacity-75'
            />
            <div className='hidden flex-col md:flex'>
              {Object.values(BUSINESS_INFO).map((val, i) => (
                <span key={i}>{val}</span>
              ))}
            </div>
          </div>

          <div className='flex w-full items-center justify-center gap-6 text-3xl text-grayscale-500'>
            <a
              href='https://www.instagram.com/guidoaudisio_clinicadental/'
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram />
            </a>
            <a href='mailto:info@guidoaudisio.com' rel='noreferrer'>
              <MdMail />
            </a>
            <FaWhatsapp />
            <a
              href='https://goo.gl/maps/vvmeJAXyA7nCFfzp6'
              target='_blank'
              rel='noreferrer'
            >
              <SiGooglemybusiness />
            </a>
            <a
              href='https://goo.gl/maps/vvmeJAXyA7nCFfzp6'
              target='_blank'
              rel='noreferrer'
            >
              <SiGooglemaps />
            </a>
          </div>
        </div>

        <div className='flex w-full items-center justify-center text-center text-grayscale-600'>
          <span>
            © 2022 Designed and developed by: <b>jbef.es</b>
            <br />
            All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

import { FaInstagram } from 'react-icons/fa';
import { SiGooglemaps, SiWhatsapp } from 'react-icons/si';
import { IoMail } from 'react-icons/io5';
import { MdPhone } from 'react-icons/md';
import { MessagesType } from '@/i18n/config';

interface BusinessInfo {
  [key: string]: string;
}

export const BUSINESS_INFO = {
  addr: 'C/ Ramón Gallud 59, 1º',
  addr2: 'Callosa de Segura - 03181',
  addr3: 'Alicante',
  telf1: '966 705 379',
  email: '633 274 856',
} as const satisfies BusinessInfo;

interface NavbarLink {
  label: keyof MessagesType['ui']['navbar'];
  url: string;
}

export const NAVBAR_LINKS: NavbarLink[] = [
  {
    label: 'home',
    url: '/',
  },
  {
    label: 'services',
    url: '/services',
  },
  {
    label: 'about',
    url: '/about',
  },
  {
    label: 'contact',
    url: '/contact',
  },
];

interface Social {
  name: string;
  icon: React.ReactElement;
  url: string;
}

export const SOCIALS: Social[] = [
  {
    name: 'instagram',
    icon: <FaInstagram className='hover:text-pink-400' />,
    url: 'https://www.instagram.com/guidoaudisio_clinicadental/',
  },
  {
    name: 'whatsapp',
    icon: <SiWhatsapp className='hover:text-green-400' />,
    url: 'https://wa.me/34622792887',
  },
  {
    name: 'email',
    icon: <IoMail className='hover:text-cyan-400' />,
    url: 'mailto:info@guidoaudisio.com',
  },
  {
    name: 'google maps',
    icon: <SiGooglemaps className='hover:text-blue-400' />,
    url: 'https://goo.gl/maps/mTztSy11ieZaFEfi8',
  },
  {
    name: 'telephone',
    icon: <MdPhone className='hover:text-blue-400' />,
    url: `tel:+34${BUSINESS_INFO.telf1}`,
  },
];

////////////////////////////////////////////
// Footer
// ////////////////////////////////////////////

interface IFooterCol {
  title: string;
  links: { label: string; link: string }[];
}

export const FOOTER_GROUPS: IFooterCol[] = [
  {
    title: 'Services',
    links: [
      { label: 'Conveyancing', link: '/services' },
      { label: 'Inheritance', link: '/services' },
      { label: 'Legal Representation', link: '/services' },
      { label: 'Tax Advice', link: '/services' },
    ],
  },
  {
    title: 'About us',
    links: [{ label: 'About us', link: '/about-us' }],
  },
  {
    title: 'Contact us',
    links: [
      { label: 'Reach out to us', link: '/contact' },
      { label: 'Whatsapp', link: '/contact' },
    ],
  },
];

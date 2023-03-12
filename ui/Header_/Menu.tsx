import Link from 'next/link';
import { NAVBAR_LINKS, SOCIALS } from '@/config/constants/pageContent';
import { NavMenuLinks } from './NavMenuLinks';
import { LocaleSwitcher } from '@/ui/LocaleSwitcher/LocaleSwitcher';
import { NavMenuContainer } from './NavMenuContainer';

export const Menu = async () => {
  const navLinks = await NAVBAR_LINKS();

  return (
    <NavMenuContainer>
      <div className='flex w-full items-center justify-around'>
        <LocaleSwitcher currentLocale='en' />
      </div>
      <NavMenuLinks navLinks={navLinks} />

      <div className='flex gap-12 text-xl text-black items-center justify-center'>
        {SOCIALS.map(social => (
          <Link
            key={social.name}
            href={social.url}
            title={social.name}
            target='_blank'
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </NavMenuContainer>
  );
};

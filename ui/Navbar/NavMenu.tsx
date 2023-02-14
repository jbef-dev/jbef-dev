import Link from 'next/link';
import { SOCIALS } from '@/config/constants/pageContent';
import { useTranslations } from 'next-intl';
import { NavMenuContainer } from './NavMenuContainer';
import { NavMenuLinks } from './NavMenuLinks';
import { LocaleSwitcher } from '../LocaleSwitcher/LocaleSwitcher';

export const NavMenu = () => {
  const t = useTranslations('ui.navbar');

  return (
    <NavMenuContainer>
      <div className='flex w-full items-center justify-around'>
        <LocaleSwitcher />
      </div>
      <NavMenuLinks />

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

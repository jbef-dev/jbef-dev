import { MenuButton } from './MenuButton';
import { NavMenu } from './NavMenu';
import { NavbarContainer } from './NavbarContainer';
import { LocalizedLink, useTranslations } from 'next-intl';
import { Logo } from '@/components/Logo/Logo';
import { NAVBAR_LINKS } from '@/config/constants/pageContent';

export const Navbar = () => {
  const t = useTranslations('ui.navbar');

  const translatedLinks = NAVBAR_LINKS.map(l => ({
    label: t(l.label),
    url: l.url,
  }));

  return (
    <NavbarContainer>
      <div className='fixed top-0 flex items-center justify-between px-5 lg:px-10 h-16 left-0 w-full right-0 z-40 mix-blend-difference'>
        <LocalizedLink
          href='/'
          // onClick={() => window.scrollTo({ top: 0 })}
        >
          <Logo />
        </LocalizedLink>
        <MenuButton />
      </div>

      <NavMenu />
    </NavbarContainer>
  );
};

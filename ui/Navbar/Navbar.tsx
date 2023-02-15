import { MenuButton } from './MenuButton';
import { NavMenu } from './NavMenu';
import { NavbarContainer } from './NavbarContainer';
import { Link, useTranslations } from 'next-intl';
import { Logo } from '@/components/Logo/Logo';

export const Navbar = () => {
  const t = useTranslations('ui.navbar');

  return (
    <NavbarContainer>
      <div className='fixed top-0 flex items-center justify-between px-5 lg:px-10 h-16 left-0 w-full right-0 z-40 mix-blend-difference'>
        <Link href='/'>
          <Logo />
        </Link>
        <MenuButton />
      </div>

      {/* @ts-expect-error Server Component */}
      <NavMenu />
    </NavbarContainer>
  );
};

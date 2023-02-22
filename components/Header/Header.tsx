import { Link } from 'next-intl';
import { Logo } from '@/components/Logo/Logo';
import {
  HambugerMenuLink,
  HambugerMenuNavigation,
  HamburgerMenu,
  HamburgerMenuButton,
  HamburgerMenuContent,
} from '@/ui/HamburgerMenu/HamburgerMenu';
import { LocaleSwitcher } from '@/ui/LocaleSwitcher/LocaleSwitcher';
import { NAVBAR_LINKS, SOCIALS } from '@/config/constants/pageContent';

export const Header = async () => {
  const navLinks = await NAVBAR_LINKS();

  return (
    <HamburgerMenu>
      <div className='fixed top-0 flex items-center justify-between px-5 lg:px-10 h-16 left-0 w-full right-0 z-40 mix-blend-difference'>
        <Link href='/'>
          <Logo />
        </Link>
        <HamburgerMenuButton className='flex gap-1 group relative font-title overflow-hidden items-center z-50 rounded-full'>
          <div className='relative transition-transform duration-500 group-hover:-translate-y-full'>
            <span className='text-white font-medium'>MENU</span>
            <span className='absolute top-full right-0 text-white font-medium'>
              MENU
            </span>
          </div>
        </HamburgerMenuButton>
      </div>

      <HamburgerMenuContent className='px-4 md:px-12 bg-white flex flex-col items-center justify-around font-title'>
        <div className='flex w-full items-center justify-around'>
          <LocaleSwitcher />
        </div>
        <HambugerMenuNavigation className='flex items-start justify-center w-full flex-col gap-5'>
          {navLinks.map((link, i) => (
            <HambugerMenuLink key={link.label} className='overflow-hidden'>
              <Link
                key={link.label}
                href={link.url}
                className='group text-black'
              >
                <div className='flex gap-4 relative w-fit group-hover:text-accent-main leading-none tracking-wide'>
                  <span className='text-responsive-xs pt-[2.5%] self-start transition-colors duration-500'>
                    0{i + 1}.
                  </span>
                  <div className='flex relative text-responsive-xl group-hover:-translate-y-full transition-all duration-500'>
                    <span>{link.label.toUpperCase()}</span>
                    <span className='absolute top-full'>
                      {link.label.toUpperCase()}
                    </span>
                  </div>
                </div>
              </Link>
            </HambugerMenuLink>
          ))}
        </HambugerMenuNavigation>

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
      </HamburgerMenuContent>
    </HamburgerMenu>
  );
};

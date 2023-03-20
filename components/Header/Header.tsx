import { Link, useLocale } from 'next-intl';
import { LocaleSwitcher } from '@/ui/LocaleSwitcher/LocaleSwitcher';
import {
  HamburgerMenu,
  HamburgerMenuButton,
  HamburgerMenuContent,
  HamburgerMenuNavigation,
  HamburgerMenuNavItem,
  HamburgerMenuNavLink,
} from '@/ui/HamburgerMenu/HamburgerMenu';
import { NAVBAR_LINKS, SOCIALS } from '@/config/constants/pageContent';
import { Logo } from '@/components/Logo/Logo';

export const Header = async () => {
  const locale = useLocale();
  const navLinks = await NAVBAR_LINKS();

  return (
    <header>
      <HamburgerMenu>
        {/* <div className='fixed z-50 lg:z-30 top-0 flex items-center justify-between pl-5 pr-0 lg:px-5 h-16 left-0 w-full right-0'> */}
        <div className='fixed z-50 top-0 flex mix-blend-exclusion items-center justify-between pl-5 pr-0 lg:px-5 h-16 left-0 w-full right-0'>
          <Link className='flex z-50' href='/'>
            <Logo />
          </Link>

          <div className='flex z-50 justify-end h-full px-2 items-center'>
            <div className='flex text-responsive-sm leading-none'>
              <LocaleSwitcher currentLocale={locale} className='text-white' />
              <div className='h-5 w-[1px] self-center bg-white'></div>
              <HamburgerMenuButton className='group px-4 py-2 z-50'>
                MENU
              </HamburgerMenuButton>
            </div>
          </div>
        </div>

        <HamburgerMenuContent className='fixed top-0 z-40 left-0 w-full h-full flex justify-center items-start scrollbar-hide overflow-y-scroll px-4 lg:px-12 bg-white font-title'>
          <div className='flex flex-col w-full gap-y-20 h-full pt-24 pb-8'>
            <HamburgerMenuNavigation className='flex items-start justify-center h-full flex-col gap-8'>
              {navLinks.map((link, i) => (
                <HamburgerMenuNavItem
                  key={link.label}
                  className='flex flex-col group gap-4 uppercase relative w-fit text-responsive-xl leading-none tracking-wide hover:text-accent-main'
                >
                  <HamburgerMenuNavLink
                    className='flex gap-x-2'
                    href={link.url}
                  >
                    <span className='text-responsive-xs pt-[2.5%] self-start transition-colors duration-500'>
                      0{i + 1}.
                    </span>
                    <div className='flex flex-col gap-4'>
                      <div className='overflow-hidden'>
                        <div className='flex flex-col relative group-hover:-translate-y-full transition-all duration-500'>
                          <span>{link.label.toUpperCase()}</span>
                          <span className='absolute top-full'>
                            {link.label.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </HamburgerMenuNavLink>
                </HamburgerMenuNavItem>
              ))}
            </HamburgerMenuNavigation>
            <div className='flex text-xl w-full text-black items-evenly gap-x-14 lg:gap-x-20 justify-center'>
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
          </div>
        </HamburgerMenuContent>
      </HamburgerMenu>
    </header>
  );
};

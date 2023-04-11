import { LocaleSwitcher } from '@/ui/LocaleSwitcher/LocaleSwitcher';
import {
  HamburgerMenu,
  HamburgerMenuButton,
  HamburgerMenuContent,
  HamburgerMenuNavigation,
  HamburgerMenuNavItem,
  HamburgerMenuNavLink,
} from '@/ui/HamburgerMenu/HamburgerMenu';
import { Logo } from '@/components/Logo/Logo';
import { Locale } from '@/i18n/config';
import Link from 'next/link';
import { getDictionary } from '@/i18n/get-dictionary';

const Header = async ({ locale }: { locale: Locale }) => {
  const dict = await getDictionary(locale);

  const navLinks = [
    {
      label: dict.ui.navbar.home,
      url: '/',
    },
    {
      label: dict.ui.navbar.portfolio,
      url: '/portfolio',
    },
    {
      label: dict.ui.navbar.about,
      url: '/about',
    },
    {
      label: dict.ui.navbar.contact,
      url: '/contact',
    },
  ];

  return (
    <header>
      <HamburgerMenu>
        {/* <div className='fixed z-50 lg:z-30 top-0 flex items-center justify-between pl-5 pr-0 lg:px-5 h-16 left-0 w-full right-0'> */}
        <div className='fixed left-0 right-0 top-0 z-50 flex h-24 w-full items-center justify-between px-8 font-light mix-blend-difference'>
          <Link className='z-50 flex' href='/'>
            <Logo />
          </Link>

          <div className='flex items-center text-responsive-sm leading-none'>
            <LocaleSwitcher currentLocale={locale} className='text-white' />
            <div className='mx-5 h-3 w-[1px] self-center bg-white'></div>
            <HamburgerMenuButton openText='CLOSE' closedText='MENU' />
          </div>
        </div>

        <HamburgerMenuContent className='scrollbar-hide fixed left-0 top-0 z-40 flex h-full w-full items-start justify-center overflow-y-scroll bg-white px-4 font-title lg:px-12'>
          <div className='flex h-full w-full flex-col gap-y-20 pb-8 pt-24'>
            <HamburgerMenuNavigation className='flex h-full flex-col items-start justify-center gap-8'>
              {navLinks.map((link, i) => (
                <HamburgerMenuNavItem
                  key={link.label}
                  className='group relative flex w-fit   flex-col gap-4 text-responsive-2xl leading-none tracking-wide hover:text-accent-main'
                >
                  <HamburgerMenuNavLink
                    className='flex gap-x-2'
                    href={link.url}
                  >
                    <span className='self-start pt-[2.5%] text-responsive-xs transition-colors duration-500'>
                      0{i + 1}.
                    </span>
                    <div className='flex flex-col gap-4'>
                      <div className='overflow-hidden'>
                        <div className='relative flex flex-col transition-all duration-500 group-hover:-translate-y-full'>
                          <span>{link.label}</span>
                          <span className='absolute top-full'>
                            {link.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </HamburgerMenuNavLink>
                </HamburgerMenuNavItem>
              ))}
            </HamburgerMenuNavigation>
            {/* <div className='flex text-xl w-full text-black items-evenly gap-x-14 lg:gap-x-20 justify-center'> */}
            {/*   {SOCIALS.map(social => ( */}
            {/*     <Link */}
            {/*       key={social.name} */}
            {/*       href={social.url} */}
            {/*       title={social.name} */}
            {/*       target='_blank' */}
            {/*     > */}
            {/*       {social.icon} */}
            {/*     </Link> */}
            {/*   ))} */}
            {/* </div> */}
          </div>
        </HamburgerMenuContent>
      </HamburgerMenu>
    </header>
  );
};

export { Header };

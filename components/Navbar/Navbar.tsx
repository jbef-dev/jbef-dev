import { LocaleSwitcher } from '@/ui/LocaleSwitcher/LocaleSwitcher';
import {
  HamburgerMenu,
  HamburgerMenuButton,
  HamburgerMenuContent,
  HamburgerMenuNavItem,
  HamburgerMenuNavLink,
} from '@/ui/HamburgerMenu/HamburgerMenu';
import { Logo } from '@/components/Logo/Logo';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { I18nLocales } from '@/i18n/config';

const Navbar = () => {
  const locale = useLocale() as I18nLocales;
  const t = useTranslations('ui.navbar');

  const navLinks = [
    {
      label: t('home'),
      url: '/',
    },
    {
      label: t('portfolio'),
      url: '/portfolio',
    },
    {
      label: t('about'),
      url: '/about',
    },
    {
      label: t('contact'),
      url: '/contact',
    },
  ];

  return (
    <nav>
      <HamburgerMenu>
        <div
          // className='fixed left-0 right-0 top-0 z-50 flex h-20 w-full items-center justify-between px-8 font-light mix-blend-exclusion lg:h-24 lg:px-12'
          className='fixed left-0 right-0 top-0 z-50 flex h-20 w-full items-center justify-between px-6 font-light mix-blend-exclusion lg:px-10'
        >
          <Link className='z-50 flex' href='/'>
            <Logo />
          </Link>

          <div className='flex items-center text-responsive-sm leading-none'>
            <LocaleSwitcher currentLocale={locale} className='text-white' />
            <div className='mx-5 h-3 w-[1px] self-center bg-white'></div>
            <HamburgerMenuButton
              className='font-medium tracking-wide text-white'
              openText='CLOSE'
              closedText='MENU'
            />
          </div>
        </div>

        <HamburgerMenuContent className='scrollbar-hide fixed inset-0 z-40 flex items-start justify-center overflow-y-scroll bg-black px-4 font-title text-white lg:px-12'>
          <div className='flex h-full w-full flex-col gap-y-20 pb-8 pt-24'>
            <div className='flex h-full flex-col items-start justify-center gap-8'>
              {navLinks.map((link, i) => (
                <HamburgerMenuNavItem
                  key={link.label}
                  className='group relative flex w-fit flex-col gap-4 overflow-hidden text-responsive-2xl leading-none tracking-wide hover:text-accent-main'
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
            </div>
            {/* <div className='flex text-xl w-full text-black items-evenly gap-x-14 lg:gap-x-20 justify-center'>
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
            </div> */}
          </div>
        </HamburgerMenuContent>
      </HamburgerMenu>
    </nav>
  );
};

export { Navbar };

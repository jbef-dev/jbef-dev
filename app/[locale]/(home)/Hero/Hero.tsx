import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

const HeroTitles = dynamic(() => import('./HeroTitles'));

const Hero = () => {
  const t = useTranslations('pages.home.hero');

  return (
    // use min-height to avoid CLS
    <div className='flex w-full min-h-[250lvh]'>
      <HeroTitles
        titles={[
          t('titles.title1'),
          t('titles.title2'),
          t('titles.title3'),
          t('titles.title4'),
        ]}
      />

      <div className='absolute h-[100svh] top-0 max-w-screen-3xl flex w-full'>
        <div className='flex absolute max-md:left-[15vw] bottom-[18%] lg:right-[6vw] lg:bottom-[45%] mix-blend-difference'>
          <div className='mr-1'>
            <svg
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='fill-white w-4 h-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
              />
            </svg>
          </div>
          <p className='text-responsive-xs font-sans text-white'>
            Custom websites —<br /> down to earth service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

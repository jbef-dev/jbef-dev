import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

const HeroTitles = dynamic(() => import('./HeroTitles'));

const Hero = () => {
  const t = useTranslations('pages.home.hero');

  return (
    <div className='flex w-full min-h-[250lvh]'>
      <HeroTitles
        titles={[
          t('titles.title1'),
          t('titles.title2'),
          t('titles.title3'),
          t('titles.title4'),
        ]}
      />

      <div className='flex absolute max-md:left-[15vw] bottom-[18%] lg:right-[6vw] lg:bottom-[45%] font-sans text-responsive-xs gap-1 text-white mix-blend-difference'>
        <div className='pt-1'>
          <svg
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='fill-white w-3 h-3'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
            />
          </svg>
        </div>
        <p>
          Custom websites —<br /> down to earth service
        </p>
      </div>
    </div>
  );
};

export default Hero;

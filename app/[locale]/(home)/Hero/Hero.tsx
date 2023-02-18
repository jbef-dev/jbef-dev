import { useTranslations } from 'next-intl';
import { HeroTitles } from './HeroTitles';

export const Hero = () => {
  const t = useTranslations('pages.home.hero');

  return (
    <div className='relative flex w-full'>
      <HeroTitles
        titles={[t('heading1'), t('heading2'), t('heading3'), t('heading4')]}
      />
    </div>
  );
};

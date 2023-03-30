import dynamic from 'next/dynamic';
import { Metadata } from 'next';

import { SeparatorMargin, SeparatorRounded } from '@/components/Separator';
import Hero from './Hero/Hero';
const EvolveSection = dynamic(() =>
  import('./EvolveSection/EvolveSection').then(mod => mod.EvolveSection)
);
const FeatureSection = dynamic(() => import('./FeatureSection/FeatureSection'));
import { PageContainer, SectionContainer } from '@/ui/Containers';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
const PricingSection = dynamic(() => import('./PricingSection/PricingSection'));

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(locale);
  // const t = useTranslations('pages.home');

  return (
    <PageContainer>
      <SectionContainer flexCol pt={false} px={false} gap={false}>
        <Hero
          titles={[
            dict['pages'].home.hero.titles.title1,
            dict['pages'].home.hero.titles.title2,
            dict['pages'].home.hero.titles.title3,
            dict['pages'].home.hero.titles.title4,
          ]}
        />
        <SeparatorMargin />
      </SectionContainer>

      <SectionContainer
        flexCol
        center
        pt={false}
        className='bg-black text-white'
      >
        <SeparatorRounded position='top' className='bg-black' />
        <EvolveSection dictionary={dict} />
      </SectionContainer>

      <SectionContainer flexCol className='bg-black text-white'>
        <FeatureSection />
        <SeparatorMargin />
      </SectionContainer>

      <SectionContainer flexCol center pt={false} className='bg-white'>
        <SeparatorRounded position='top' className='bg-white' />
        <PricingSection dict={dict} />
      </SectionContainer>
    </PageContainer>
  );
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(locale);
  return {
    title: dict['pages'].home.SEO.title,
    description: dict['pages'].home.SEO.description,
  };
}

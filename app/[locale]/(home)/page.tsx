import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

import { SeparatorMargin, SeparatorRounded } from '@/components/Separator';
import Hero from './Hero/Hero';
const EvolveSection = dynamic(() =>
  import('./EvolveSection/EvolveSection').then(mod => mod.EvolveSection)
);
const FeatureSection = dynamic(() => import('./FeatureSection/FeatureSection'));
import { PageContainer, SectionContainer } from '@/ui/Containers';
const PricingSection = dynamic(() => import('./PricingSection/PricingSection'));

export default function Home() {
  const t = useTranslations('pages.home');

  return (
    <PageContainer mt={false} mb={false}>
      <SectionContainer flexCol center px={false} gap={false}>
        <Hero
          titles={[
            t('hero.titles.title1'),
            t('hero.titles.title2'),
            t('hero.titles.title3'),
            t('hero.titles.title4'),
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
        <EvolveSection />
      </SectionContainer>

      <SectionContainer flexCol className='bg-black text-white'>
        <FeatureSection />
        <SeparatorMargin />
      </SectionContainer>

      <SectionContainer flexCol center pt={false} className='bg-white'>
        <SeparatorRounded position='top' className='bg-white' />
        <PricingSection />
      </SectionContainer>
    </PageContainer>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages.home.SEO');
  return {
    title: t('title'),
    description: t('description'),
  };
}

import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const EvolveSection = dynamic(() =>
  import('@/components/EvolveSection/EvolveSection').then(
    mod => mod.EvolveSection
  )
);
const FeatureSection = dynamic(
  () => import('@/components/FeatureSection/FeatureSection')
);
import { PageContainer, SectionContainer } from '@/ui/Containers';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';

import PricingSection from '@/components/PricingSection/PricingSection';
import { Hero } from '@/components/Hero/Hero';
import FeaturedProject from '@/components/FeaturedProject/FeaturedProject';
import MottoParagraph from '@/components/MottoParagraph/MottoParagraph';
import { CenterFluid } from '@/components/CenterFluid/CenterFluid';
import { CenterFluidProvider } from '@/components/CenterFluid/CenterFluidCtx';

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(locale);

  return (
    <PageContainer>
      <CenterFluidProvider>
        <CenterFluid />

        <SectionContainer pt={false} center>
          <Hero
            titles={[
              dict['pages'].home.hero.titles.title1,
              dict['pages'].home.hero.titles.title2,
            ]}
          />
        </SectionContainer>

        <SectionContainer overflow my flexCol>
          <MottoParagraph />
        </SectionContainer>

        <SectionContainer flexCol>
          <FeaturedProject
            title={['CNG Lawyers']}
            fluidTextureName='cnglawyers'
            clientName='CNG Lawyers'
            workDesc='Website redesign / SEO'
            workResult='25% more clients than previous year'
            year={2022}
          />
          <FeaturedProject
            title={['Guido Audisio', 'Dental Clinic']}
            fluidTextureName='guidoaudisio'
            clientName='Guido Audisio Dental Clinic'
            workDesc='Website redesign'
            workResult='Reduced bounce rate by 30% & new visitors from +10 countries'
            year={2022}
          />
        </SectionContainer>

        <SectionContainer flexCol>
          {/* @ts-expect-error async Server Component */}
          <PricingSection locale={locale} />
        </SectionContainer>
      </CenterFluidProvider>
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

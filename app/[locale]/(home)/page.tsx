// import dynamic from 'next/dynamic';
import { Metadata } from 'next';

// const EvolveSection = dynamic(() =>
//   import('@/components/EvolveSection/EvolveSection').then(
//     mod => mod.EvolveSection
//   )
// );
// const FeatureSection = dynamic(
//   () => import('@/components/FeatureSection/FeatureSection')
// );

import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/getDictionary';
import { PageContainer, SectionContainer } from '@/ui/Containers';

import FeaturedProject from '@/components/FeaturedProject/FeaturedProject';
import { Hero } from '@/components/Hero/Hero';
import MottoParagraph from '@/components/MottoParagraph/MottoParagraph';
import PricingSection from '@/components/PricingSection/PricingSection';

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

// export const runtime = 'edge';

async function getData() {
  const res = await fetch(
    'https://64668cb22ea3cae8dc19b163.mockapi.io/username',
    { cache: 'no-store' }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const resData = await res.json();

  const usernames = resData.map((data: any) => data.name);

  return usernames;
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(locale);

  const usernames = await getData();

  // const kek = await new Promise(resolve =>
  //   setTimeout(resolve, 2000)
  // );

  return (
    <PageContainer>
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
          // title={['CNG Lawyers']}
          title={[usernames[0]]}
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
    </PageContainer>
  );
}

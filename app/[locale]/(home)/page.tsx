import { Separator } from '@/components/Separator/Separator';
import { PageContainer } from '@/ui/Containers/PageContainer';
import { SectionContainer } from '@/ui/Containers/SectionContainer';

import { Hero } from './Hero/Hero';
import { PaymentPlan } from './PaymentSection/PaymentSection';
import { PricingTable } from './PricingTable/PricingTable';
import { EvolveSection } from './EvolveSection/EvolveSection';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export default function Home() {
  return (
    <PageContainer mt={false} mb={false}>
      <SectionContainer flexCol center px={false} gap={false}>
        <Hero />
      </SectionContainer>

      <SectionContainer
        flexCol
        center
        pt={false}
        className='bg-black text-white'
      >
        <Separator position='top' className='bg-black' />
        <EvolveSection />
      </SectionContainer>

      <SectionContainer flexCol center className='bg-black text-white'>
        <PaymentPlan />
      </SectionContainer>

      <SectionContainer
        py={false}
        className='bg-black py-[clamp(5rem,10vw,11rem)]'
      />

      <SectionContainer flexCol center pt={false} className='bg-white'>
        <Separator position='top' className='bg-white' />
        <PricingTable />
      </SectionContainer>
    </PageContainer>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages.home.SEO');

  return {
    title: t('title'),
  };
}

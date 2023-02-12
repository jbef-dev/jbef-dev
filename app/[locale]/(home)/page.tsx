// import { useTranslations } from 'next-intl';
import { Separator } from '@/components/Separator/Separator';
import { PageContainer } from '@/ui/Containers/PageContainer';
import { SectionContainer } from '@/ui/Containers/SectionContainer';

import { Hero } from './Hero/Hero';
import { PaymentPlan } from './PaymentSection/PaymentSection';
import { PricingTable } from './PricingTable/PricingTable';
import { StandOutHeading } from './StandOutHeading/StandOutHeading';

export default function Home({}) {
  // const t = useTranslations('pages.home');

  return (
    <PageContainer mt={false} mb={false}>
      <SectionContainer flexCol center px={false} gap={false} className='-z-20'>
        <Hero />
      </SectionContainer>

      <SectionContainer
        flexCol
        center
        gap={false}
        pt={false}
        className='bg-black text-white'
      >
        <Separator position='top' className='bg-black' />
        <StandOutHeading />
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
        <PricingTable/> 
      </SectionContainer>
    </PageContainer>
  );
}

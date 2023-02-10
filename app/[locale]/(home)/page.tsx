// import { useTranslations } from 'next-intl';
import { Separator } from '@/components/Separator/Separator';
import { PageContainer } from '@/ui/Containers/PageContainer';
import { SectionContainer } from '@/ui/Containers/SectionContainer';

import { Hero } from './Hero/Hero';
import { PaymentPlan } from './PaymentPlan/PaymentPlan';
import { StandOutHeading } from './StandOutHeading/StandOutHeading';

export default function Home({}) {
  // const t = useTranslations('pages.home');

  return (
    <PageContainer mt={false} mb={false}>
      <SectionContainer flexCol center px={false} gap={false} className='-z-20'>
        <Hero />
      </SectionContainer>

      <SectionContainer flexCol center className='bg-black text-white'>
        <Separator position='top' className='bg-red-400' />
        <StandOutHeading />
      </SectionContainer>

      <SectionContainer flexCol center className='bg-black text-white'>
        <PaymentPlan />
      </SectionContainer>

      <SectionContainer flexCol center className='bg-white'>
        <Separator position='top' className='bg-white' />
        <div className='z-10'>TESTING</div>
        <div>TESTING</div>
      </SectionContainer>
    </PageContainer>
  );
}

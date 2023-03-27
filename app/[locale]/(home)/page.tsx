import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

import { SeparatorMargin, SeparatorRounded } from '@/components/Separator';
// const SeparatorMargin = dynamic(() =>
//   import('@/components/Separator/Separator').then(mod => mod.SeparatorMargin)
// );
// const SeparatorRounded = dynamic(() =>
//   import('@/components/Separator/Separator').then(mod => mod.SeparatorRounded)
// );
import Hero from './Hero/Hero';
// const Hero = dynamic(() => import('./Hero/Hero'));
// import { PricingTable } from './PricingTable/PricingTable';
const PricingTable = dynamic(() =>
  import('./PricingTable/PricingTable').then(mod => mod.PricingTable)
);
// import { EvolveSection } from './EvolveSection/EvolveSection';
const EvolveSection = dynamic(() =>
  import('./EvolveSection/EvolveSection').then(mod => mod.EvolveSection)
);
// import { PaymentRow } from './PaymentRow/PaymentRow';
const PaymentRow = dynamic(() => import('./PaymentRow/PaymentRow'));
// import { AOSText } from '@/ui/Typography/AOSText';
const AOSText = dynamic(() => import('@/ui/Typography/AOSText'));
import {
  PageContainer,
  SectionContainer,
  FlexContainer,
} from '@/ui/Containers';
// import { AnimatedParagraph, Heading3 } from '@/ui/Typography';
const AnimatedParagraph = dynamic(
  () => import('@/ui/Typography/AnimatedParagraph')
);
const Heading3 = dynamic(
  () => import('@/ui/Typography/Heading3')
);

export default function Home() {
  const t = useTranslations('pages.home');

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
        <SeparatorRounded position='top' className='bg-black' />
        <EvolveSection />
      </SectionContainer>

      <SectionContainer flexCol className='bg-black text-white'>
        <PaymentRow
          icons={[
            <path
              key={1}
              className='stroke-emerald-700'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />,
            <path
              key={2}
              className='stroke-yellow-700'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />,
          ]}
          title={
            <>
              <AOSText className='font-medium'>No upfront</AOSText>
              <AOSText className='font-extralight tracking-wider'>
                payment
              </AOSText>
            </>
          }
          paragraph='No up front payment, instead, we establish a relationship and pay monthly to include all work done on the website.'
          align='left'
        />
        <PaymentRow
          icons={[
            <path
              key={1}
              className='stroke-blue-600'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25'
            />,
            <path
              key={2}
              className='stroke-slate-500'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
            />,
          ]}
          title={
            <>
              <AOSText className='font-medium'>Developer</AOSText>
              <AOSText className='font-extralight tracking-wider'>
                on duty
              </AOSText>
            </>
          }
          paragraph='Keep your website updated! Update to your website when needed, within 48h, as many times as you need. Its like having a web developer in your team on payroll.'
          align='right'
        />
        <PaymentRow
          icons={[
            <path
              key={1}
              className='stroke-violet-600'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
            />,
            <path
              key={2}
              className='stroke-fuchsia-800'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42'
            />,
          ]}
          title={
            <>
              <AOSText className='font-medium'>hand coded</AOSText>
              <AOSText className='font-extralight tracking-wider'>
                website
              </AOSText>
            </>
          }
          paragraph='Forget about cookie-cutter websites, we hand code all our work, using the most modern technologies used by all major companies. We make billion-dollar company technologies accessible to everyone. From the largest layout to the smallest button, everything is custom coded and the performance benefits are obvious.'
          align='left'
        />
      </SectionContainer>

      <SeparatorMargin className='bg-black' />

      <SectionContainer flexCol center pt={false} className='bg-white'>
        <SeparatorRounded position='top' className='bg-white' />
        <FlexContainer flexCol className='max-w-screen-xl'>
          <div className='flex flex-col pb-12 lg:pb-20 w-full gap-y-6'>
            <Heading3 className='flex flex-col items-start'>
              <AOSText className='font-medium'>Transparent</AOSText>
              <AOSText className='font-extralight tracking-wider'>
                Pricing
              </AOSText>
            </Heading3>
            <AnimatedParagraph className='flex w-full font-extralight text-responsive-lg'>
              Clear and transparent pricing, no hidden costs or extra charges!
            </AnimatedParagraph>
          </div>

          <PricingTable
            pricingStrategy={[
              {
                title: 'Standard',
                features: [
                  { name: 'Hosting', included: true },
                  { name: 'Responsive design', included: true },
                  { name: 'Fast speed score', included: true },
                  { name: 'Custom design & development', included: true },
                  { name: 'Customer service', included: true },
                  { name: 'SEO', included: true },
                ],
                price: { amount: '150€', frequency: '/mo' },
              },
              {
                title: 'Standard + Blog',
                features: [
                  { name: 'Premium hosting', included: true },
                  { name: 'Edits within 48 hours', included: true },
                  { name: 'Blog & admin panel', included: true },
                  { name: 'SEO', included: true },
                  { name: 'Analytics', included: true },
                ],
                price: { amount: '250€', frequency: '/mo' },
              },
              {
                title: 'E-commerce',
                features: [
                  { name: 'Custom design', included: true },
                  { name: 'Custom shopify integration', included: true },
                  { name: 'Easy to use', included: true },
                ],
                price: { amount: 'Custom' },
              },
            ]}
          />
        </FlexContainer>
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

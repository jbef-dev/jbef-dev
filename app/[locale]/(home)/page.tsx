import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import Image from 'next/image';

import { SeparatorMargin, SeparatorRounded } from '@/components/Separator';
// import Hero from './Hero/Hero';
// const Hero = dynamic(() => import('./Hero/Hero'));
const EvolveSection = dynamic(() =>
  import('./EvolveSection/EvolveSection').then(mod => mod.EvolveSection)
);
const FeatureSection = dynamic(() => import('./FeatureSection/FeatureSection'));
import { PageContainer, SectionContainer } from '@/ui/Containers';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import PricingSection from './PricingSection/PricingSection';
import { Hero } from './Hero/NewHero';
import { TextBanner } from './TextBanner/TextBanner';
// const PricingSection = dynamic(() =>
//   import('./PricingSection/PricingSection').then(m => m)
// );

import colorful_animals from '@/public/assets/img/colorful_animals.png';

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(locale);
  // const t = useTranslations('pages.home');

  return (
    <PageContainer>
      <SectionContainer py={false} center>
        <Hero
          titles={[
            dict['pages'].home.hero.titles.title1,
            dict['pages'].home.hero.titles.title2,
            dict['pages'].home.hero.titles.title3,
            dict['pages'].home.hero.titles.title4,
          ]}
        />
      </SectionContainer>

      {/* <SectionContainer flexCol> */}
      {/*   <div> */}
      {/*     <svg */}
      {/*       className='h-10 w-10' */}
      {/*       viewBox='0 0 200 200' */}
      {/*       xmlns='http://www.w3.org/2000/svg' */}
      {/*     > */}
      {/*       <path */}
      {/*         fillRule='evenodd' */}
      {/*         clipRule='evenodd' */}
      {/*         d='M32 100.641C32 68.391 54.1651 41.3515 84 34.1102V1.28125C36.3772 8.98855 0 50.5392 0 100.641C0 150.742 36.3772 192.293 84 200V167.171C54.1651 159.93 32 132.89 32 100.641ZM200 100.641C200 150.742 163.623 192.293 116 200V167.171C145.835 159.93 168 132.89 168 100.641C168 68.391 145.835 41.3515 116 34.1102V1.28125C163.623 8.98855 200 50.5392 200 100.641Z' */}
      {/*         fill='url(#paint0_linear_231_555)' */}
      {/*       /> */}
      {/*       <defs> */}
      {/*         <linearGradient */}
      {/*           id='paint0_linear_231_555' */}
      {/*           x1='157.5' */}
      {/*           y1='33.0763' */}
      {/*           x2='44.7421' */}
      {/*           y2='148.561' */}
      {/*           gradientUnits='userSpaceOnUse' */}
      {/*         > */}
      {/*           <stop offset='0.0509862' stopColor='#FFB6E1' /> */}
      {/*           <stop offset='1' stopColor='#FBE3EA' /> */}
      {/*         </linearGradient> */}
      {/*       </defs> */}
      {/*     </svg> */}
      {/*   </div> */}
      {/**/}
      {/*   <SeparatorMargin /> */}
      {/* </SectionContainer> */}

      {/* <SectionContainer flexCol center overflow className='bg-black text-white'> */}
      {/*   <EvolveSection dictionary={dict} /> */}
      {/* </SectionContainer> */}
      {/**/}
      {/* <SectionContainer flexCol> */}
      {/*   <FeatureSection /> */}
      {/*   <SeparatorMargin /> */}
      {/* </SectionContainer> */}

      <SectionContainer flexCol overflow pt={false} className='bg-white'>
        {/* @ts-expect-error async Server Component */}
        <PricingSection locale={locale} />
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

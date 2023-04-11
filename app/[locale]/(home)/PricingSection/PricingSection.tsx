import { FlexContainer } from '@/ui/Containers';
import { Heading3 } from '@/ui/Typography';
import { PricingTable } from './PricingTable';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import {
  AppearOnScroll,
  AppearOnScrollChild,
} from '@/ui/Animated/AppearOnScroll';

const PricingSection = async ({ locale }: { locale: Locale }) => {
  const dict = await getDictionary(locale);

  return (
    <FlexContainer flexCol px py className='max-w-screen-xl'>
      <div className='flex w-full flex-col gap-y-6 pb-12 lg:pb-20'>
        <div className='flex flex-col'>
          <AppearOnScroll className='overflow-hidden font-medium' variants={{}}>
            <AppearOnScrollChild asChild>
              <Heading3>{dict.pages.home.pricing.title.title1}</Heading3>
            </AppearOnScrollChild>
          </AppearOnScroll>

          <AppearOnScroll
            className='overflow-hidden font-extralight'
            variants={{}}
          >
            <AppearOnScrollChild asChild>
              <Heading3>{dict.pages.home.pricing.title.title2}</Heading3>
            </AppearOnScrollChild>
          </AppearOnScroll>
        </div>

        <AppearOnScroll variants={{}} className='overflow-hidden'>
          <AppearOnScrollChild asChild>
            <p className='flex w-full text-responsive-lg font-extralight leading-tight'>
              {dict.pages.home.pricing.subtitle}
            </p>
          </AppearOnScrollChild>
        </AppearOnScroll>
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
  );
};

export default PricingSection;

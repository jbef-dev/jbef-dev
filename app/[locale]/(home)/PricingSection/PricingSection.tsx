import { FlexContainer } from '@/ui/Containers';
import { AnimatedParagraph, Heading3 } from '@/ui/Typography';
import { PricingTable } from './PricingTable';
import { Dictionary, Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import {
  AppearOnScroll,
  AppearOnScrollChild,
} from '@/ui/Animated/AppearOnScroll';
import { myAnimation } from '@/styles/customAnimations';

const PricingSection = async ({ locale }: { locale: Locale }) => {
  const dict = await getDictionary(locale);

  return (
    <FlexContainer flexCol className='max-w-screen-xl'>
      <div className='flex flex-col pb-12 lg:pb-20 w-full gap-y-6'>
        <Heading3 className='flex flex-col items-start'>
          <AppearOnScroll className='font-medium overflow-hidden' variants={{}}>
            <AppearOnScrollChild>
              {dict.pages.home.pricing.title.title1}
            </AppearOnScrollChild>
          </AppearOnScroll>

          <AppearOnScroll
            className='font-extralight overflow-hidden tracking-wider'
            variants={{}}
          >
            <AppearOnScrollChild>
              {dict.pages.home.pricing.title.title2}
            </AppearOnScrollChild>
          </AppearOnScroll>
        </Heading3>
        <AnimatedParagraph className='flex w-full font-extralight text-responsive-lg'>
          {dict.pages.home.pricing.subtitle}
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
  );
};

export default PricingSection;

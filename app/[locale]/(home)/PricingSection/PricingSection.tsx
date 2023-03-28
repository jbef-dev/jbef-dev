import { FlexContainer } from '@/ui/Containers';
import { AOSText, AnimatedParagraph, Heading3 } from '@/ui/Typography';
import { PricingTable } from './PricingTable';
import { useTranslations } from 'next-intl';

const PricingSection = () => {
  const t = useTranslations('pages.home.pricing');

  return (
    <FlexContainer flexCol className='max-w-screen-xl'>
      <div className='flex flex-col pb-12 lg:pb-20 w-full gap-y-6'>
        <Heading3 className='flex flex-col items-start'>
          <AOSText className='font-medium'>{t('title.title1')}</AOSText>
          <AOSText className='font-extralight tracking-wider'>
            {t('title.title2')}
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
  );
};

export default PricingSection;

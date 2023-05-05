import { FlexContainer } from '@/ui/Containers';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { AppearOnScroll, AppearOnScrollChild } from '@/ui/Animated';
import { FaCheck } from 'react-icons/fa';
import { Button } from '@/ui/Button/Button';
import { useEffect } from 'react';

const PricingSection = async ({ locale }: { locale: Locale }) => {
  const dict = await getDictionary(locale);

  const pricingStrategy = [
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
      // price: { amount: '150€', frequency: '/mo' },
      price: { amount: 'xxx$', frequency: '/xx' },
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
      // price: { amount: '250€', frequency: '/mo' },
      price: { amount: 'xxx$' },
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
  ];

  return (
    <FlexContainer flexCol px py className='max-w-screen-xl'>
      <div className='flex w-full flex-col gap-y-6 pb-12 lg:pb-20'>
        <h3 className='flex flex-col text-responsive-2xl leading-tight'>
          <AppearOnScroll className='overflow-hidden font-medium' variants={{}}>
            <AppearOnScrollChild asChild>
              <span>{dict.pages.home.pricing.title.title1}</span>
            </AppearOnScrollChild>
          </AppearOnScroll>

          <AppearOnScroll
            className='overflow-hidden font-extralight'
            variants={{}}
          >
            <AppearOnScrollChild asChild>
              <span>{dict.pages.home.pricing.title.title2}</span>
            </AppearOnScrollChild>
          </AppearOnScroll>
        </h3>

        <AppearOnScroll variants={{}} className='overflow-hidden'>
          <AppearOnScrollChild asChild>
            <p className='flex w-full text-responsive-lg font-extralight leading-tight'>
              {dict.pages.home.pricing.subtitle}
            </p>
          </AppearOnScrollChild>
        </AppearOnScroll>
      </div>

      <ul className='border-1 flex w-full max-w-screen-xl flex-col divide-y divide-black border-b border-t border-black'>
        {pricingStrategy.map(({ title, features, price }, i) => (
          <li key={title + i} className='flex flex-col gap-y-4 py-10'>
            <span className='font-title text-responsive-xl font-medium'>
              {title}
            </span>

            <div className='flex justify-center gap-x-4'>
              <ul className='grid w-full justify-between gap-2 text-responsive-md font-light lg:grid-cols-2'>
                {features.map((feature, i) => (
                  <li key={i} className='flex items-center gap-x-2'>
                    {feature.included ? (
                      <FaCheck className='text-responsive-xs' />
                    ) : null}
                    <span>{feature.name}</span>
                  </li>
                ))}
              </ul>
              <div className='flex flex-col items-center gap-y-2'>
                <h4 className='text-responsive-lg font-medium'>
                  {price.amount}
                  {price.frequency ? (
                    <span className='text-xl'>{price.frequency}</span>
                  ) : null}
                </h4>
                <Button
                  flavor={i === 1 ? 'gradientOutline' : 'outlined'}
                  buttonSize='lg'
                  className='whitespace-nowrap font-medium'
                >
                  Start now
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </FlexContainer>
  );
};

export default PricingSection;

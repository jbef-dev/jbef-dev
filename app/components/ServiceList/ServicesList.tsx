'use client';

import innovacion from '@/public/img/image4.jpg';
import image3 from '@/public/img/image3.webp';
import { HTMLAttributes, useState } from 'react';
import ServiceSection from './ServiceSection';
import clsx from 'clsx';

import { MessagesType } from '@/i18n/config';
import { ImageProps } from 'next/image';

export type ServiceType = {
  service: keyof MessagesType['data']['services'];
  imgArray: ImageProps['src'][];
};

const servicesArray: ServiceType[] = [
  // Check the type declaration, it needs to have specific
  // key in MessagesType
  {
    // title: 'services.1.title',
    service: 'service1',
    imgArray: [innovacion, image3, innovacion, image3],
  },
  {
    // title: 'services.2.title',
    service: 'service2',
    imgArray: [image3, innovacion, image3],
  },
  {
    // title: 'services.3.title',
    service: 'service2',
    imgArray: [innovacion, image3, innovacion, image3],
  },
  {
    // title: 'services.4.title',
    service: 'service2',
    imgArray: [innovacion, image3, innovacion, image3],
  },
  {
    // title: 'services.5.title',
    service: 'service2',
    imgArray: [innovacion, image3, innovacion, image3],
  },
  {
    // title: 'services.6.title',
    service: 'service1',
    imgArray: [innovacion, image3, innovacion, image3],
  },
];

const ServicesList = (props: HTMLAttributes<HTMLDivElement>) => {
  const [active, setActive] = useState<number>(0);

  return (
    <div className={clsx(['w-full', props.className])}>
      {servicesArray.map((s, i) => (
        <ServiceSection
          key={i}
          count={i}
          active={active}
          setActive={setActive}
          service={s}
        />
      ))}
    </div>
  );
};

export default ServicesList;

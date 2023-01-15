import { MessagesType } from '@/i18n/config';
import { ImageProps } from 'next/image';

export type ServiceType = {
  title: keyof MessagesType['data']['services'];
  imgArray: ImageProps['src'][];
};

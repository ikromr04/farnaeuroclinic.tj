import { BannerId } from '@/types/banners';

export type BannerStoreDTO = {
  page: string;
  program_category_id: string;
  title: string;
  description: string;
  link: string;
  image: File | string;
}

export type BannerUpdateDTO = {
  id: BannerId;
  page: string;
  program_category_id: string;
  title: string;
  description: string;
  link: string;
  image: File | string;
}

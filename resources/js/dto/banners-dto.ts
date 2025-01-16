import { ID } from '@/types';
import { CategoryId } from '@/types/categories';

export type BannerStoreDTO = {
  page: string;
  program_category_id: string;
  title: string;
  description: string;
  link: string;
  image: File | string;
}

export type CategoryUpdateDTO = {
  id: CategoryId;
  title: string;
  img: File | string;
  description: string;
}

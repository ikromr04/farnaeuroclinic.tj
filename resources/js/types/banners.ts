import { ID } from '.';
import { CategoryId } from './categories';

export type BannerId = ID;

export type Banner = {
  id: BannerId;
  page?: string;
  program_category_id?: CategoryId;
  title: string;
  description: string;
  link?: string;
  image: string;
  created_at: string;
  updated_at: string;
};

export type Banners = Banner[];

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

export type BannersFilter = {
  searchKeyword: string;
  orderBy?: keyof BannersFilter | '';
  orderType: 'asc' | 'desc';
  category: {
    query: CategoryId;
    visibility: boolean;
  },
  title: {
    query: string;
    visibility: boolean;
  },
  description: {
    query: string;
    visibility: boolean;
  },
  link: {
    query: string;
    visibility: boolean;
  },
};


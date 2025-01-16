import { ID } from '.';
import { Category, CategoryId } from './categories';

export type BannerId = ID;

export type Banner = {
  id: BannerId;
  page: 'home' | 'for-patient';
  category: Category;
  title: string;
  description: string;
  link?: string;
  image: string;
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


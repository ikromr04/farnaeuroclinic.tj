import { ID } from '.';

export type CategoryId = ID;

export type Category = {
  id: CategoryId;
  title: string;
  slug: string;
  img: string;
  description: string;
};

export type Categories = Category[];

export type CategoriesFilter = {
  searchKeyword: string;
  orderBy?: keyof CategoriesFilter | '';
  orderType: 'asc' | 'desc';
  title: {
    query: string;
    visibility: boolean;
  },
  description: {
    query: string;
    visibility: boolean;
  },
};


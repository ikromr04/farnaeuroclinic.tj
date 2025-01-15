import { ID } from '.';
import { Category, CategoryId } from './categories';

export type ProgramId = ID;

export type Block = {
  id: ID;
  title: string;
  shortTitle: string;
  slug: string;
  content: string;
};

export type Blocks = Block[];

export type Article = {
  id: ID;
  info: string;
  blocks?: Blocks;
};


export type Program = {
  id: ProgramId;
  title: string;
  slug: string;
  description: string;
  info: string;
  price: number;
  category: Category;
  blocks?: Blocks;
  article?: Article;
};

export type Programs = Program[];

export type ProgramsFilter = {
  searchKeyword: string;
  orderBy?: keyof ProgramsFilter;
  orderType?: 'asc' | 'desc';
  title: {
    query: string;
    visibility: boolean;
  },
  description: {
    query: string;
    visibility: boolean;
  },
  info: {
    query: string;
    visibility: boolean;
  },
  price: {
    query: string;
    visibility: boolean;
  },
  category: {
    query: CategoryId;
    visibility: boolean;
  },
};

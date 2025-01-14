import { ID } from '.';
import { Category } from './categories';

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

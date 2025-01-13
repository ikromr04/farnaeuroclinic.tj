import { ID } from '.';
import { Category } from './categories';

export type ProgramId = ID;

export type Program = {
  id: ProgramId;
  title: string;
  slug: string;
  description: string;
  info: string;
  price: number;
  category: Category;
};

export type Programs = Program[];

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

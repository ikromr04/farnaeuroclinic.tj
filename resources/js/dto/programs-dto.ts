import { ID } from "@/types";
import { CategoryId } from "@/types/categories";
import { ProgramId } from "@/types/programs";

export type ProgramStoreDTO = {
  category_id: string;
  title: string;
  description: string;
  info: string;
  price: string;
  blocks?: {
    title: string;
    short_title: string;
    content: string;
  }[];
  article: {
    info: string;
    blocks?: {
      title: string;
      short_title: string;
      content: string;
    }[];
  };
}

export type ProgramUpdateDTO = {
  id: ProgramId;
  title: string;
  description: string;
  info: string;
  price: number;
  category_id: CategoryId;
  blocks?: {
    id: ID;
    title: string;
    short_title: string;
    content: string;
  }[];
  article: {
    id: ID;
    info: string;
    blocks?: {
      id: ID;
      title: string;
      short_title: string;
      content: string;
    }[];
  };
}

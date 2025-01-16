import { CategoryId } from "@/types/categories";

export type CategoryStoreDTO = {
  title: string;
  img: File | string;
  description: string;
}

export type CategoryUpdateDTO = {
  id: CategoryId;
  title: string;
  img: File | string;
  description: string;
}

import { ReviewId } from '@/types/reviews';

export type ReviewStoreDTO = {
  name: string;
  date: string;
  rate: number;
  comment: string;
}

export type ReviewUpdateDTO = {
  id: ReviewId;
  name: string;
  date: string;
  rate: number;
  comment: string;
}

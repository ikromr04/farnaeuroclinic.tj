import { ID } from '.';

export type ReviewId = ID;

export type Review = {
  id: ReviewId;
  name: string;
  date: string;
  rate: number;
  comment: string;
  created_at: string;
  updated_at: string;
};

export type Reviews = Review[];

import { ID } from '.';

export type TextId = ID;

export type Text = {
  id: TextId;
  page: string;
  title: string;
  slug: string;
  content?: string;
  created_at: string;
  updated_at: string;
};

export type Texts = Text[];

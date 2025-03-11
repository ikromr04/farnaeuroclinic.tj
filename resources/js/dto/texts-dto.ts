import { TextId } from '@/types/texts';

export type TextUpdateDTO = {
  id: TextId;
  slug: string;
  page: string;
  title: string;
  content: string;
}

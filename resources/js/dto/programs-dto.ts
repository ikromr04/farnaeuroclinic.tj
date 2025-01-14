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
  article?: {
    info: string;
    blocks?: {
      title: string;
      short_title: string;
      content: string;
    }[];
  };
}

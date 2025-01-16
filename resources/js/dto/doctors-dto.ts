export type DoctorStoreDTO = {
  name: string;
  avatar: File | string;
  position: string;
  specialization: string;
  experience: string;
  blocks?: {
    title: string;
    short_title: string;
    content: string;
  }[];
}

export type DoctorUpdateDTO = {
  id: string;
  name: string;
  avatar: File | string;
  position: string;
  specialization: string;
  experience: string;
  blocks: {
    id: string;
    title: string;
    short_title: string;
    content: string;
  }[];
}

import { ID } from '.';

export type DoctorId = ID;

export type Block = {
  id: ID;
  title: string;
  shortTitle: string;
  slug: string;
  content: string;
};

export type Doctor = {
  id: DoctorId;
  name: string;
  slug: string;
  avatar: string;
  position: string;
  specialization: string;
  experience: string;
  blocks?: Block[];
  created_at: string;
  updated_at: string;
};

export type Doctors = Doctor[];

export type DoctorsFilter = {
  searchKeyword: string;
  orderBy?: keyof DoctorsFilter | '';
  orderType: 'asc' | 'desc';
  name: {
    query: string;
    visibility: boolean;
  }
  position: {
    query: string;
    visibility: boolean;
  }
  specialization: {
    query: string;
    visibility: boolean;
  }
  experience: {
    query: string;
    visibility: boolean;
  }
};


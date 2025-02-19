import { BannersFilter } from './types/banners';
import { CategoriesFilter } from './types/categories';
import { DoctorsFilter } from './types/doctors';
import { ProgramsFilter } from './types/programs';

export const AppRoute = {
  Dashboard: {
    Index: '/dashboard',
    SiteInfo: '/dashboard/site-info',
    Programs: {
      Index: '/dashboard/programs',
      Create: '/dashboard/programs/create',
      Edit: '/dashboard/programs/:id',
    },
    ProgramCategories: '/dashboard/categories',
    Banners: '/dashboard/banners',
    Doctors: {
      Index: '/dashboard/doctors',
      Create: '/dashboard/doctors/create',
      Edit: '/dashboard/doctors/:id',
    },
    Reviews: '/dashboard/reviews',
  },
  Auth: {
    Login: '/auth/login',
  },
  NotFound: '*',
};

export const APIRoute = {
  Auth: {
    Check: '/auth/check',
    Login: '/auth/login',
    Logout: '/auth/logout',
  },
  Programs: {
    Index: '/programs',
    Show: '/programs/:id',
  },
  Categories: {
    Index: '/categories',
    Update: '/categories/update',
    Show: '/categories/:id',
  },
  Banners: {
    Index: '/banners',
    Update: '/banners/update',
    Show: '/banners/:id',
  },
  Doctors: {
    Index: '/doctors',
    Update: '/doctors/update',
    Show: '/doctors/:id',
  },
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
};

export enum SliceName {
  App = 'App',
  Auth = 'Auth',
  Programs = 'Programs',
  Categories = 'Categories',
  Banners = 'Banners',
  Doctors = 'Doctors',
};

export const initialProgramsFilter: ProgramsFilter = {
  searchKeyword: '',
  orderType: 'desc',
  title: {
    query: '',
    visibility: true,
  },
  description: {
    query: '',
    visibility: true,
  },
  info: {
    query: '',
    visibility: true,
  },
  price: {
    query: '',
    visibility: true,
  },
  category: {
    query: 0,
    visibility: true,
  },
};

export const initialCategoriesFilter: CategoriesFilter = {
  searchKeyword: '',
  orderType: 'desc',
  title: {
    query: '',
    visibility: true,
  },
  description: {
    query: '',
    visibility: true,
  },
};

export const initialBannersFilter: BannersFilter = {
  searchKeyword: '',
  orderType: 'desc',
  title: {
    query: '',
    visibility: true,
  },
  description: {
    query: '',
    visibility: true,
  },
  link: {
    query: '',
    visibility: true,
  },
  category: {
    query: 0,
    visibility: true,
  },
};

export const inititalDoctorsFilter: DoctorsFilter = {
  searchKeyword: '',
  orderType: 'desc',
  name: {
    query: '',
    visibility: true,
  },
  position: {
    query: '',
    visibility: true,
  },
  specialization: {
    query: '',
    visibility: true,
  },
  experience: {
    query: '',
    visibility: true,
  },
};

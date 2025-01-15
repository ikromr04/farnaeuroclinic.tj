import { ProgramsFilter } from "./types/programs";

export const AppRoute = {
  Dashboard: {
    Index: '/dashboard',
    Programs: {
      Index: '/dashboard/programs',
      Create: '/dashboard/programs/create',
      Edit: '/dashboard/programs/:id',
    },
    ProgramCategories: '/dashboard/categories',
    Banners: '/dashboard/banners',
    Doctors: '/dashboard/doctors',
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

export const AppRoute = {
  Dashboard: {
    Index: '/dashboard',
    Programs: {
      Index: '/dashboard/programs',
      Create: '/dashboard/programs/create',
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

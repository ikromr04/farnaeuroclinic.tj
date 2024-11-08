export const AppRoute = {
  Dashboard: '/dashboard',
  Auth: {
    Login: '/auth/login',
  },
  Banners: {
    Category: '/dashboard/banners/:category',
  },
  NotFound: '*',
};

export const APIRoute = {
  Auth: {
    Check: '/auth/check',
    Login: '/auth/login',
  },
};

export const SliceName = {
  Auth: 'Auth',
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
};

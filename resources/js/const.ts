export const AppRoute = {
  Dashboard: '/dashboard',
  Auth: {
    Login: '/auth/login',
  },
  NotFound: '*',
};

export const APIRoute = {
  Auth: {
    Check: '/auth/check',
    Login: '/auth/login',
  },
};

export enum SliceName {
  Auth = 'Auth',
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
};

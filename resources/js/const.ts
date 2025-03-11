export const AppRoute = {
  Dashboard: {
    Index: '/dashboard',
    SiteInfo: '/dashboard/site-info',
    Programs: {
      Index: '/dashboard/programs',
      Create: '/dashboard/programs/create',
      Edit: '/dashboard/programs/:id',
    },
    Categories: {
      Index: '/dashboard/categories',
      Create: '/dashboard/categories/create',
      Edit: '/dashboard/categories/:id',
    },
    Banners: {
      Index: '/dashboard/banners',
      Create: '/dashboard/banners/create',
      Edit: '/dashboard/banners/:id',
    },
    Doctors: {
      Index: '/dashboard/doctors',
      Create: '/dashboard/doctors/create',
      Edit: '/dashboard/doctors/:id',
    },
    Reviews: {
      Index: '/dashboard/reviews',
      Create: '/dashboard/reviews/create',
      Edit: '/dashboard/reviews/:id',
    },
    Texts: {
      Index: '/dashboard/texts',
      Edit: '/dashboard/texts/:id',
    },
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
  Reviews: {
    Index: '/reviews',
    Update: '/reviews/update',
    Show: '/reviews/:id',
  },
  Texts: {
    Index: '/texts',
    Update: '/texts/update',
    Show: '/texts/:id',
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
  Reviews = 'Reviews',
  Texts = 'Texts',
};

export const TextPage = {
  'all': 'Все',
  'home': 'Главная',
  'about': 'О нас',
  'forpatient': 'Пациентам',
  'category': 'Категории',
  'doctors': 'Врачи',
  'services': 'Все услуги',
};

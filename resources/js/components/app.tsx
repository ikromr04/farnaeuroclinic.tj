import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import LoginPage from './pages/auth/login-page';
import { useAppSelector } from '../hooks';
import { getAuthStatus } from '../store/auth-slice/auth-selector';
import Spinner from './ui/spinner';
import NotFoundPage from './pages/not-found-page';
import DashboardPage from './pages/dashboard-page';
import ProgramsPage from './pages/programs/programs-page';
import ProgramsCreatePage from './pages/programs/programs-create-page';
import ProgramsEditPage from './pages/programs/programs-edit-page';
import BannersPage from './pages/banners/banners-page';
import DoctorsPage from './pages/doctors/doctors-page';
import DoctorsCreatePage from './pages/doctors/doctors-create-page';
import DoctorsEditPage from './pages/doctors/doctors-edit-page';
import SiteInfoPage from './pages/site-info-page';
import CategoriesPage from './pages/categories/categories-page';
import CategoriesCreatePage from './pages/categories/categories-create-page';
import CategoriesEditPage from './pages/categories/categories-edit-page';
import BannersCreatePage from './pages/banners/banners-create-page';
import BannersEditPage from './pages/banners/banners-edit-page';
import ReviewsPage from './pages/reviews/reviews-page';
import ReviewsCreatePage from './pages/reviews/reviews-create-page';
import ReviewsEditPage from './pages/reviews/reviews-edit-page';
import TextsPage from './pages/texts/texts-page';
import TextsEditPage from './pages/texts/texts-edit-page';

export default function App(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);

  if (authStatus === AuthorizationStatus.Unknown)
    return (
      <div className="flex w-full h-full justify-center items-center">
        <Spinner className="w-12 h-12" />
      </div>
    );

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path={AppRoute.Auth.Login} element={<LoginPage />} />

        <Route path={AppRoute.Dashboard.Index} element={<DashboardPage />} />

        <Route path={AppRoute.Dashboard.SiteInfo} element={<SiteInfoPage />} />

        <Route path={AppRoute.Dashboard.Programs.Index} element={<ProgramsPage />} />
        <Route path={AppRoute.Dashboard.Programs.Create} element={<ProgramsCreatePage />} />
        <Route path={AppRoute.Dashboard.Programs.Edit} element={<ProgramsEditPage />} />

        <Route path={AppRoute.Dashboard.Categories.Index} element={<CategoriesPage />} />
        <Route path={AppRoute.Dashboard.Categories.Create} element={<CategoriesCreatePage />} />
        <Route path={AppRoute.Dashboard.Categories.Edit} element={<CategoriesEditPage />} />

        <Route path={AppRoute.Dashboard.Banners.Index} element={<BannersPage />} />
        <Route path={AppRoute.Dashboard.Banners.Create} element={<BannersCreatePage />} />
        <Route path={AppRoute.Dashboard.Banners.Edit} element={<BannersEditPage />} />

        <Route path={AppRoute.Dashboard.Doctors.Index} element={<DoctorsPage />} />
        <Route path={AppRoute.Dashboard.Doctors.Create} element={<DoctorsCreatePage />} />
        <Route path={AppRoute.Dashboard.Doctors.Edit} element={<DoctorsEditPage />} />

        <Route path={AppRoute.Dashboard.Reviews.Index} element={<ReviewsPage />} />
        <Route path={AppRoute.Dashboard.Reviews.Create} element={<ReviewsCreatePage />} />
        <Route path={AppRoute.Dashboard.Reviews.Edit} element={<ReviewsEditPage />} />

        <Route path={AppRoute.Dashboard.Texts.Index} element={<TextsPage />} />
        <Route path={AppRoute.Dashboard.Texts.Edit} element={<TextsEditPage />} />

        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
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
import ProgramCategoriesPage from './pages/program-categories-page';
import BannersPage from './pages/banners-page';
import DoctorsPage from './pages/doctors/doctors-page';
import DoctorsCreatePage from './pages/doctors/doctors-create-page';

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

        <Route path={AppRoute.Dashboard.Programs.Index} element={<ProgramsPage />} />
        <Route path={AppRoute.Dashboard.Programs.Create} element={<ProgramsCreatePage />} />
        <Route path={AppRoute.Dashboard.Programs.Edit} element={<ProgramsEditPage />} />

        <Route path={AppRoute.Dashboard.ProgramCategories} element={<ProgramCategoriesPage />} />

        <Route path={AppRoute.Dashboard.Banners} element={<BannersPage />} />

        <Route path={AppRoute.Dashboard.Doctors.Index} element={<DoctorsPage />} />
        <Route path={AppRoute.Dashboard.Doctors.Create} element={<DoctorsCreatePage />} />

        {/* <Route path={AppRoute.Dashboard.Reviews} element={<DashboardPage />} /> */}

        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

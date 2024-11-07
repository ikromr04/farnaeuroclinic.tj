import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '@/const';
import { useAppSelector } from '@/hooks';
import { getAuthStatus } from '@/store/auth-slice/auth-selector';
import Spinner from './ui/spinner';
import DashboardPage from './pages/dashboard-page';
import LoginPage from './pages/auth/login-page';

export default function App(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);

  if (authStatus === AuthorizationStatus.Unknown) {
    return <Spinner className="w-10 h-10 m-auto" />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Dashboard} element={<DashboardPage />} />

        <Route path={AppRoute.Auth.Login} element={<LoginPage />} />

        <Route path={AppRoute.NotFound} element={'<NotFoundPage />'} />
      </Routes>
    </BrowserRouter>
  );
}

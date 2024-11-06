import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '@/const';
import { useAppSelector } from '@/hooks';
import { getAuthStatus } from '@/store/auth-slice/auth-selector';
import Spinner from './ui/spinner';

export default function App(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);

  if (authStatus === AuthorizationStatus.Unknown) {
    return <Spinner className="w-10 h-10 m-auto" />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Dashboard} element={'<Spinner className="w-8 h-8" />'} />

        <Route path={AppRoute.Auth.Login} element={'<LoginPage />'} />

        <Route path={AppRoute.NotFound} element={'<NotFoundPage />'} />
      </Routes>
    </BrowserRouter>
  );
}

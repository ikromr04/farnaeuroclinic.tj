import React from 'react';
import LoginForm from '../../forms/login-form';
import MainLogo from '../../layouts/main-logo';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';
import { getAuthStatus } from '../../../store/auth-slice/auth-selector';
import { AppRoute, AuthorizationStatus } from '../../../const';

export default function LoginPage(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) return <Navigate to={AppRoute.Dashboard.Index} />;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white bg-illustrations bg-bottom bg-contain bg-no-repeat md:bg-transparent">
      <MainLogo className="mt-8 mb-4 md:mt-12 md:mb-6 xl:mt-0" />

      <div className="w-[90vw] max-w-96 mx-auto mb-16 md:bg-white md:shadow-md sm:rounded-lg md:p-10 md:mb-20 xl:mb-28">
        <h1 className="title mb-4">Вход в админ-панель</h1>

        <LoginForm />
      </div>
    </main>
  );
}

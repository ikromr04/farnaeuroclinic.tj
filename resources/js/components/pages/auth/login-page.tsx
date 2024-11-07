import React from 'react';
import { useAppSelector } from '@/hooks';
import { getAuthStatus } from '@/store/auth-slice/auth-selector';
import { AppRoute, AuthorizationStatus } from '@/const';
import { Navigate } from 'react-router-dom';
import LoginForm from '@/components/forms/login-form';
import MainLogo from '@/components/ui/main-logo';

export default function LoginPage(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);

  if (authorizationStatus === AuthorizationStatus.Auth)
    return <Navigate to={AppRoute.Dashboard} />;

  return (
    <main className="flex items-center min-h-screen flex-col gap-6 pt-[20vh]">
      <MainLogo />
      <LoginForm />
    </main>
  );
}

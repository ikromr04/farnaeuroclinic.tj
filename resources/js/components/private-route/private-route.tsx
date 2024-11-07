import React from 'react';
import { Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { useAppSelector } from '@/hooks';
import { AppRoute, AuthorizationStatus } from '@/const';
import { getAuthStatus } from '@/store/auth-slice/auth-selector';

export default function PrivateRoute({ children }: PropsWithChildren): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);

  return (
    authStatus === AuthorizationStatus.Auth
      ? <>{children}</>
      : <Navigate to={AppRoute.Auth.Login} />
  );
}

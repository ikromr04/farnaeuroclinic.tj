import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MainLogo(): JSX.Element {
  const
    { pathname } = useLocation(),
    isActive = pathname !== '/admin';

  if (isActive) {
    <Link to="/admin">
      <img src="/images/logo-dark.svg" width={160} height={16} alt="Логотип компании Jac Motors" />
    </Link>
  }

  return (
    <img src="/images/logo-dark.svg" width={160} height={16} alt="Логотип компании Jac Motors" />
  );
}

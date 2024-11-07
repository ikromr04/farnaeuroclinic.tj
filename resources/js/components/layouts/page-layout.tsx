import React, { ReactNode } from 'react';
import PrivateRoute from '../private-route/private-route';

export default function PageLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <PrivateRoute>
      {children}
    </PrivateRoute>
  );
}

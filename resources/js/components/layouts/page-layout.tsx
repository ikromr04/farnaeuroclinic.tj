import React, { ReactNode } from 'react';
import PrivateRoute from '../private-route/private-route';
import PageSidebar from './page-sidebar';
import PageHeader from './page-header';

export default function PageLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <PrivateRoute>
      <div className="w-screen h-screen bg-gray-100 flex">
        <PageSidebar />

        <div className="flex flex-col w-[calc(100vw-320px)] group-[.menu-hidden]:w-screen overflow-auto transition-all duration-300">
          <PageHeader />

          <div className="py-6 px-8">
            {children}
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
}

import React, { ReactNode } from 'react';
import PrivateRoute from '../private-route';
import PageSidebar from './page-sidebar';

type PageLayoutProps = {
  children: ReactNode;
};

function PageLayout({
  children,
}: PageLayoutProps): JSX.Element {

  return (
    <PrivateRoute>
      <div className="flex w-screen h-screen bg-gray-100 text-base">
        <PageSidebar />

        <div className="flex grow flex-col h-screen overflow-x-hidden overflow-y-scroll">
          {children}
        </div>
      </div>
    </PrivateRoute>
  );
}

export default PageLayout;

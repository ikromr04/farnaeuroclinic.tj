import React from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '@/const';

export default function DashboardPage(): JSX.Element {
  return <Navigate to={AppRoute.Dashboard.Programs.Index} />;
}

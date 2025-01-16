import React from 'react';
import PageLayout from '../../layouts/page-layout';
import { Link } from 'react-router-dom';
import { AppRoute } from '@/const';
import { Icons } from '@/components/icons';
import DoctorsCreateForm from '@/components/forms/doctors/doctors-create-form';

export default function DoctorsCreatePage(): JSX.Element {
  return (
    <PageLayout>
      <main className="relative flex flex-col h-full transition-all duration-300 overflow-scroll scrollbar-y">
        <h1 className="relative flex items-end min-h-8 mr-auto mb-1 title overflow-scroll no-scrollbar whitespace-nowrap pr-6">
          Добавление доктора
        </h1>

        <ul className="flex items-center gap-1 mb-4 leading-none">
          <li className="flex items-center gap-1">
            <Link className="transition-all duration-300 hover:text-brand" to={AppRoute.Dashboard.Doctors.Index}>
              Докторы
            </Link>
            <Icons.chevronRight width={6} />
          </li>
          <li className="font-medium text-[15px]">
            Добавление доктора
          </li>
        </ul>

        <DoctorsCreateForm />
      </main>
    </PageLayout>
  );
}

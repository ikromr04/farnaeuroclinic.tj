import React from 'react';
import PageLayout from '../../layouts/page-layout';
import { Link } from 'react-router-dom';
import { AppRoute } from '@/const';
import { Icons } from '@/components/icons';
import DoctorsCreateForm from '@/components/forms/doctors/doctors-create-form';

export default function DoctorsCreatePage(): JSX.Element {
  return (
    <PageLayout>
      <main className="mx-4">
        <h1 className="title mt-4 mb-2">
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
            Добавить
          </li>
        </ul>

        <DoctorsCreateForm />
      </main>
    </PageLayout>
  );
}

import React from 'react';
import PageLayout from '../../layouts/page-layout';
import ProgramsCreateForm from '../../forms/programs/programs-create-form';
import { Link } from 'react-router-dom';
import { AppRoute } from '@/const';
import { Icons } from '@/components/icons';

export default function ProgramsCreatePage(): JSX.Element {
  return (
    <PageLayout>
      <main className="mx-4">
        <h1 className="title mt-4 mb-2">
          Добавление программы
        </h1>

        <ul className="flex items-center gap-1 mb-4 leading-none">
          <li className="flex items-center gap-1">
            <Link className="transition-all duration-300 hover:text-brand" to={AppRoute.Dashboard.Programs.Index}>
              Программы
            </Link>
            <Icons.chevronRight width={6} />
          </li>
          <li className="font-medium text-[15px]">
            Добавить
          </li>
        </ul>

        <ProgramsCreateForm />
      </main>
    </PageLayout>
  );
}

import React from 'react';
import PageLayout from '../../layouts/page-layout';
import ProgramsCreateForm from '../../forms/programs/programs-create-form';
import { Link } from 'react-router-dom';
import { AppRoute } from '@/const';
import { Icons } from '@/components/icons';

export default function ProgramsCreatePage(): JSX.Element {
  return (
    <PageLayout>
      <main className="relative flex flex-col h-full transition-all duration-300 overflow-scroll scrollbar-y">
        <h1 className="relative flex items-end min-h-8 mr-auto mb-1 title overflow-scroll no-scrollbar whitespace-nowrap pr-6">
          Добавление программы
        </h1>

        <ul className="flex items-center gap-1 mb-4 leading-none">
          <li className="flex items-center gap-1">
            <Link className="transition-all duration-300 hover:text-brand" to={AppRoute.Dashboard.Programs.Index}>
              Справочник программ
            </Link>
            <Icons.chevronRight width={6} />
          </li>
          <li className="font-medium text-[15px]">
            Добавление программы
          </li>
        </ul>

        <ProgramsCreateForm />
      </main>
    </PageLayout>
  );
}

import React from 'react';
import PageLayout from '../../layouts/page-layout';
import { Link } from 'react-router-dom';
import { AppRoute } from '@/const';
import { Icons } from '@/components/icons';
import CategoriesCreateForm from '@/components/forms/categories/categories-create-form';

export default function CategoriesCreatePage(): JSX.Element {
  return (
    <PageLayout>
      <main className="mx-4">
        <h1 className="title mt-4 mb-2">
          Добавление категории
        </h1>

        <ul className="flex items-center gap-1 mb-4 leading-none">
          <li className="flex items-center gap-1">
            <Link className="transition-all duration-300 hover:text-brand" to={AppRoute.Dashboard.Categories.Index}>
              Категории
            </Link>
            <Icons.chevronRight width={6} />
          </li>
          <li className="font-medium text-[15px]">
            Добавить
          </li>
        </ul>

        <CategoriesCreateForm />
      </main>
    </PageLayout>
  );
}

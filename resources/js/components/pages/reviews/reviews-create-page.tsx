import React from 'react';
import PageLayout from '../../layouts/page-layout';
import { Link } from 'react-router-dom';
import { AppRoute } from '@/const';
import { Icons } from '@/components/icons';
import ReviewsCreateForm from '@/components/forms/reviews/reviews-create-form';

export default function ReviewsCreatePage(): JSX.Element {
  return (
    <PageLayout>
      <main className="mx-4">
        <h1 className="title mt-4 mb-2">
          Добавления комментария
        </h1>

        <ul className="flex items-center gap-1 mb-4 leading-none">
          <li className="flex items-center gap-1">
            <Link className="transition-all duration-300 hover:text-brand" to={AppRoute.Dashboard.Reviews.Index}>
              Комментарии
            </Link>
            <Icons.chevronRight width={6} />
          </li>
          <li className="font-medium text-[15px]">
            Добавить
          </li>
        </ul>

        <ReviewsCreateForm />
      </main>
    </PageLayout>
  );
}

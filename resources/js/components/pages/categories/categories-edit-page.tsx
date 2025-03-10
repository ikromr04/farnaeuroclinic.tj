import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Icons } from '@/components/icons';
import { AppRoute } from '@/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import PageLayout from '@/components/layouts/page-layout';
import { fetchCategoriesAction } from '@/store/categories-slice/categories-api-actions';
import CategoriesEditForm from '@/components/forms/categories/categories-edit-form';
import { getCategories } from '@/store/categories-slice/categories-selector';

export default function CategoriesEditPage(): JSX.Element {
  const params = useParams();
  const categories = useAppSelector(getCategories);
  const category = categories?.find(({ id }) => id === +(params.id || 0));
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!categories && params.id) dispatch(fetchCategoriesAction());
  }, [categories, params.id, dispatch]);

  return (
    <PageLayout>
      <main className="mx-4">
        <h1 className="title mt-4 mb-2">
          Редактирование категории
        </h1>

        <ul className="flex items-center gap-1 mb-4 leading-none">
          <li className="flex items-center gap-1">
            <Link className="transition-all duration-300 hover:text-brand" to={AppRoute.Dashboard.Categories.Index}>
              Категории
            </Link>
            <Icons.chevronRight width={6} />
          </li>
          <li className="font-medium text-[15px]">
            {category?.title}
          </li>
        </ul>

        {category && <CategoriesEditForm category={category} />}
      </main>
    </PageLayout>
  );
}

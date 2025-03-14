import React, { useEffect, useState } from 'react';
import PageLayout from '../layouts/page-layout';
import Button from '../ui/button';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getCategories } from '@/store/categories-slice/categories-selector';
import { Category } from '@/types/categories';
import { fetchCategoriesAction } from '@/store/categories-slice/categories-api-actions';
import Modal from '../ui/modal';
import CategoriesCreateForm from '../forms/categories/categories-create-form';
import DataTable from '../ui/data-table';
import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import { AppRoute } from '@/const';
import { useNavigate } from 'react-router-dom';

export default function ProgramCategoriesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategories);
  const navigate = useNavigate();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  useEffect(() => {
    if (!categories) dispatch(fetchCategoriesAction());
  }, [categories, dispatch]);

  const columns: ColumnDef<Category>[] = [
    {
      id: 'ID',
      accessorKey: 'id',
      header: 'ID',
      enableSorting: true,
    },
    {
      id: 'Заголовок',
      accessorKey: 'title',
      header: 'Заголовок',
      enableSorting: true,
    },
    {
      id: 'Сленг',
      accessorKey: 'slug',
      header: 'Сленг',
      enableSorting: true,
    },
    {
      id: 'Описание',
      accessorKey: 'description',
      header: 'Описание',
      enableSorting: true,
      cell: ({ row }) => <div dangerouslySetInnerHTML={{ __html: row.original.description }} />,
    },
    {
      id: 'Дата добавления',
      accessorKey: 'created_at',
      header: 'Дата добавления',
      enableSorting: true,
      cell: ({ row }) => dayjs(row.original.created_at).format('DD MMM YYYY'),
    },
    {
      id: 'Дата обновления',
      accessorKey: 'updated_at',
      header: 'Дата обновления',
      enableSorting: true,
      cell: ({ row }) => dayjs(row.original.updated_at).format('DD MMM YYYY'),
    },
    {
      id: 'Действия',
      accessorKey: 'actions',
      header: 'Действия',
      enableSorting: false,
      cell: ({ row }) => (
        <div className="flex items-center gap-1">
          <Button
            icon="edit"
            variant="warn"
          // href={generatePath(AppRoute.Dashboard.Programs.Edit, { id: row.original.id })}
          >
            <span className="sr-only">Редактировать</span>
          </Button>
          <Button
            icon="delete"
            variant="error"
          // onClick={() => setDeleteModal({ id: row.original.id, isOpen: true, })}
          >
            <span className="sr-only">Удалить</span>
          </Button>
        </div>
      ),
    },
  ];

  return (
    <PageLayout>
      <h1 className="title mx-8 mt-4 mb-2">
        Категории программ
      </h1>

      {categories &&
        <DataTable
          className="mx-4 mb-10"
          data={categories}
          columns={columns}
          visibility={{
            'Сленг': false,
            'Информация': false,
            'Статья': false,
            'Блоки': false,
          }}
          onCreateButtonClick={() => navigate(AppRoute.Dashboard.Categories.Create)}
        />}

      <Modal isOpen={isCreateModalOpen}>
        <CategoriesCreateForm key={isCreateModalOpen.toString()} setIsOpen={setIsCreateModalOpen} />
      </Modal>
    </PageLayout>
  );
}

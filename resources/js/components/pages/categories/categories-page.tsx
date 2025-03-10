import CategoriesDeleteForm from '@/components/forms/categories/categories-delete-form';
import ProgramsDeleteForm from '@/components/forms/programs/programs-delete-form';
import PageLayout from '@/components/layouts/page-layout';
import Button from '@/components/ui/button';
import DataTable from '@/components/ui/data-table';
import Modal from '@/components/ui/modal';
import { AppRoute } from '@/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchCategoriesAction } from '@/store/categories-slice/categories-api-actions';
import { getCategories } from '@/store/categories-slice/categories-selector';
import { Category } from '@/types/categories';
import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

function CategoriesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategories);
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    id: 0,
  });

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
      id: 'Картинка',
      accessorKey: 'img',
      header: 'Картинка',
      enableSorting: true,
      cell: ({ row }) => <img className="min-w-[160px] max-w-16 aspect-[490/250]" src={row.original.img} />,
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
            href={generatePath(AppRoute.Dashboard.Categories.Edit, { id: row.original.id })}
          >
            <span className="sr-only">Редактировать</span>
          </Button>
          <Button
            icon="delete"
            variant="error"
            onClick={() => setDeleteModal({ id: row.original.id, isOpen: true, })}
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
        Категории ({categories?.length})
      </h1>

      {categories &&
        <DataTable
          className="mx-4 mb-10"
          data={categories}
          columns={columns}
          visibility={{
            'Сленг': false,
            'Картинка': false,
          }}
          onCreateButtonClick={() => navigate(AppRoute.Dashboard.Categories.Create)}
        />}

      <Modal isOpen={deleteModal.isOpen}>
        <CategoriesDeleteForm modal={deleteModal} setModal={setDeleteModal} />
      </Modal>
    </PageLayout>
  );
}

export default CategoriesPage;

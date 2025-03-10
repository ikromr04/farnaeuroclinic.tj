import PageLayout from '@/components/layouts/page-layout';
import Button from '@/components/ui/button';
import DataTable from '@/components/ui/data-table';
import Modal from '@/components/ui/modal';
import { AppRoute } from '@/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchBannersAction } from '@/store/banners-slice/banners-api-actions';
import { getBanners } from '@/store/banners-slice/banners-selector';
import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import BannersDeleteForm from '../../forms/banners/banners-delete-form';
import { Banner } from '@/types/banners';
import { getCategories } from '@/store/categories-slice/categories-selector';
import { fetchCategoriesAction } from '@/store/categories-slice/categories-api-actions';

function BannersPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const banners = useAppSelector(getBanners);
  const categories = useAppSelector(getCategories);
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    id: 0,
  });

  const Page = {
    'home': 'Главная',
    'for-patient': 'Пациентам',
  };

  useEffect(() => {
    if (!banners) dispatch(fetchBannersAction());
    if (!categories) dispatch(fetchCategoriesAction());
  }, [banners, dispatch, categories]);

  const columns: ColumnDef<Banner>[] = [
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
      cell: ({ row }) => <img className="min-w-[160px] max-w-16 aspect-[320/220] object-contain" src={row.original.image} />,
    },
    {
      id: 'Заголовок',
      accessorKey: 'title',
      header: 'Заголовок',
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
      id: 'Страница',
      accessorKey: 'page',
      header: 'Страница',
      enableSorting: true,
      cell: ({ row }) => row.original.page ? Page[row.original.page as keyof typeof Page] : '',
    },
    {
      id: 'Категория',
      accessorKey: 'program_category_id',
      header: 'Категория',
      enableSorting: true,
      cell: ({ row }) => categories?.find(({ id }) => +id === Number(row.original.program_category_id))?.title,
    },
    {
      id: 'Ссылка',
      accessorKey: 'link',
      header: 'Ссылка',
      enableSorting: true,
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
            href={generatePath(AppRoute.Dashboard.Banners.Edit, { id: row.original.id })}
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
        Баннеры ({banners?.length})
      </h1>

      {banners &&
        <DataTable
          className="mx-4 mb-10"
          data={banners}
          columns={columns}
          visibility={{
            'Картинка': false,
            'Ссылка': false,
          }}
          onCreateButtonClick={() => navigate(AppRoute.Dashboard.Banners.Create)}
        />}

      <Modal isOpen={deleteModal.isOpen}>
        <BannersDeleteForm modal={deleteModal} setModal={setDeleteModal} />
      </Modal>
    </PageLayout>
  );
}

export default BannersPage;

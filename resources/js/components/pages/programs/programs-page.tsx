import ProgramsDeleteForm from '@/components/forms/programs/programs-delete-form';
import PageLayout from '@/components/layouts/page-layout';
import Button from '@/components/ui/button';
import DataTable from '@/components/ui/data-table';
import Modal from '@/components/ui/modal';
import { AppRoute } from '@/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchProgramsAction } from '@/store/programs-slice/programs-api-actions';
import { getPrograms } from '@/store/programs-slice/programs-selector';
import { Program } from '@/types/programs';
import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

function ProgramsPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const programs = useAppSelector(getPrograms);
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    id: 0,
  });

  useEffect(() => {
    if (!programs) dispatch(fetchProgramsAction());
  }, [programs, dispatch]);

  const columns: ColumnDef<Program>[] = [
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
    // {
    //   id: 'Описание',
    //   accessorKey: 'description',
    //   header: 'Описание',
    //   enableSorting: true,
    //   cell: ({ row }) => <div dangerouslySetInnerHTML={{ __html: row.original.description }} />,
    // },
    {
      id: 'Информация',
      accessorKey: 'info',
      header: 'Информация',
      enableSorting: true,
      cell: ({ row }) => <div dangerouslySetInnerHTML={{ __html: row.original.info }} />,
    },
    {
      id: 'Цена',
      accessorKey: 'price',
      header: 'Цена',
      enableSorting: true,
      filterFn: 'inNumberRange',
    },
    {
      id: 'Категория',
      accessorKey: 'category',
      header: 'Категория',
      enableSorting: true,
      cell: ({ row }) => row.original.category?.title,
    },
    {
      id: 'Статья',
      accessorKey: 'article.info',
      header: 'Статья',
      enableSorting: true,
      cell: ({ row }) => <div dangerouslySetInnerHTML={{ __html: row.original.article.info }} />,
    },
    {
      id: 'Блоки',
      accessorKey: 'blocks',
      header: 'Блоки',
      enableSorting: true,
      cell: ({ row }) => row.original.blocks?.map(({ title }) => title).join(', '),
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
            icon="visibility"
            target="_blank"
            href={`/programs/${row.original.slug}`}
          >
            <span className="sr-only">Просмотреть на сайте</span>
          </Button>
          <Button
            icon="edit"
            variant="warn"
            href={generatePath(AppRoute.Dashboard.Programs.Edit, { id: row.original.id })}
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
        Программы ({programs?.length})
      </h1>

      {programs &&
        <DataTable
          className="mx-4 mb-10"
          data={programs}
          columns={columns}
          visibility={{
            'Сленг': false,
            'Информация': false,
            'Статья': false,
            'Блоки': false,
          }}
          onCreateButtonClick={() => navigate(AppRoute.Dashboard.Programs.Create)}
        />}

      <Modal isOpen={deleteModal.isOpen}>
        <ProgramsDeleteForm modal={deleteModal} setModal={setDeleteModal} />
      </Modal>
    </PageLayout>
  );
}

export default ProgramsPage;

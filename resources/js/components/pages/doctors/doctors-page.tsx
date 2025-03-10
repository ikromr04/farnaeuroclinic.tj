import DoctorsDeleteForm from '@/components/forms/doctors/doctors-delete-form';
import PageLayout from '@/components/layouts/page-layout';
import Button from '@/components/ui/button';
import DataTable from '@/components/ui/data-table';
import Modal from '@/components/ui/modal';
import { AppRoute } from '@/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchDoctorsAction } from '@/store/doctors-slice/doctors-api-actions';
import { getDoctors } from '@/store/doctors-slice/doctors-selector';
import { Doctor } from '@/types/doctors';
import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

function DoctorsPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const doctors = useAppSelector(getDoctors);
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    id: 0,
  });

  useEffect(() => {
    if (!doctors) dispatch(fetchDoctorsAction());
  }, [doctors, dispatch]);

  const columns: ColumnDef<Doctor>[] = [
    {
      id: 'ID',
      accessorKey: 'id',
      header: 'ID',
      enableSorting: true,
    },
    {
      id: 'Аватар',
      accessorKey: 'avatar',
      header: 'Аватар',
      enableSorting: true,
      cell: ({ row }) => <img className="min-w-[160px] max-w-16 aspect-[240/360] object-cover" src={row.original.avatar} />,
    },
    {
      id: 'ФИО',
      accessorKey: 'name',
      header: 'ФИО',
      enableSorting: true,
    },
    {
      id: 'Специализация',
      accessorKey: 'specialization',
      header: 'Специализация',
      enableSorting: true,
    },
    {
      id: 'Позиция',
      accessorKey: 'position',
      header: 'Позиция',
      enableSorting: true,
    },
    {
      id: 'Стаж работы',
      accessorKey: 'experience',
      header: 'Стаж работы',
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
            icon="visibility"
            target="_blank"
            href={`/doctors/${row.original.slug}`}
          >
            <span className="sr-only">Просмотреть на сайте</span>
          </Button>
          <Button
            icon="edit"
            variant="warn"
            href={generatePath(AppRoute.Dashboard.Doctors.Edit, { id: row.original.id })}
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
        Докторы ({doctors?.length})
      </h1>

      {doctors &&
        <DataTable
          className="mx-4 mb-10"
          data={doctors}
          columns={columns}
          visibility={{
            'Аватар': false,
          }}
          onCreateButtonClick={() => navigate(AppRoute.Dashboard.Doctors.Create)}
        />}

      <Modal isOpen={deleteModal.isOpen}>
        <DoctorsDeleteForm modal={deleteModal} setModal={setDeleteModal} />
      </Modal>
    </PageLayout>
  );
}

export default DoctorsPage;

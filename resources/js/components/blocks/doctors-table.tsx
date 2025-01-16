import React, { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { PropsWithClassname } from '../../types';
import DataTable, { DataTableColumns } from '../ui/data-table';
import Button from '../ui/button';
import { Icons } from '../icons';
import Tooltip from '../ui/tooltip';
import Modal from '../ui/modal';
import { Doctors, DoctorsFilter } from '@/types/doctors';
import DoctorsDeleteForm from '../forms/doctors/doctors-delete-form';

type DoctorsTableProps = PropsWithClassname<{
  doctors: Doctors;
  filter: DoctorsFilter;
  setFilter: Dispatch<SetStateAction<DoctorsFilter>>;
}>;

export default function DoctorsTable({
  className,
  doctors,
  filter,
  setFilter,
}: DoctorsTableProps): JSX.Element {
  const Icon = Icons[filter.orderType === 'asc' ? 'north' : 'south'];
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    deleteId: 0,
    title: '',
  });

  const columns: DataTableColumns = useMemo(() => ([
    {
      accessor: 'name',
      header:
        <button
          className="flex items-center grow h-6 -m-2 px-2 gap-4"
          type="button"
          onClick={() =>
            setFilter((filter) => ({
              ...filter,
              orderBy: filter.orderBy === 'name' && filter.orderType === 'asc' ? '' : 'name',
              orderType: filter.orderBy === 'name' ? (filter.orderType === 'desc' ? 'asc' : 'desc') : 'desc',
            }))
          }
        >
          ФИО
          {filter.orderBy === 'name' && <Icon width={12} height={12} />}
        </button>,
      hidden: !filter.name.visibility,
      width: 300,
    },
    {
      accessor: 'specialization',
      header:
        <button
          className="flex items-center grow h-6 -m-2 px-2 gap-4"
          type="button"
          onClick={() =>
            setFilter((filter) => ({
              ...filter,
              orderBy: filter.orderBy === 'specialization' && filter.orderType === 'asc' ? '' : 'specialization',
              orderType: filter.orderBy === 'specialization' ? (filter.orderType === 'desc' ? 'asc' : 'desc') : 'desc',
            }))
          }
        >
          Специализация
          {filter.orderBy === 'specialization' && <Icon width={12} height={12} />}
        </button>,
      hidden: !filter.specialization.visibility,
      width: 240,
    },
    {
      accessor: 'position',
      header:
        <button
          className="flex items-center grow h-6 -m-2 px-2 gap-4"
          type="button"
          onClick={() =>
            setFilter((filter) => ({
              ...filter,
              orderBy: filter.orderBy === 'position' && filter.orderType === 'asc' ? '' : 'position',
              orderType: filter.orderBy === 'position' ? (filter.orderType === 'desc' ? 'asc' : 'desc') : 'desc',
            }))
          }
        >
          Позиция
          {filter.orderBy === 'position' && <Icon width={12} height={12} />}
        </button>,
      hidden: !filter.position.visibility,
      width: 600,
    },

    {
      accessor: 'experience',
      header:
        <button
          className="flex items-center grow h-6 -m-2 px-2 gap-4"
          type="button"
          onClick={() =>
            setFilter((filter) => ({
              ...filter,
              orderBy: filter.orderBy === 'experience' && filter.orderType === 'asc' ? '' : 'experience',
              orderType: filter.orderBy === 'experience' ? (filter.orderType === 'desc' ? 'asc' : 'desc') : 'desc',
            }))
          }
        >
          Стаж работы
          {filter.orderBy === 'experience' && <Icon width={12} height={12} />}
        </button>,
      hidden: !filter.experience.visibility,
    },
    {
      accessor: 'actions',
      header: <span className="flex justify-center items-center w-full">Действия</span>,
      width: 120,
      sticky: 'right',
    },
  ]), [filter]);

  const records = useMemo(() => doctors.map((doctor) => ({
    name: doctor.name,
    position:
      <div className="line-clamp-3">
        {doctor.position}
      </div>,
    specialization: doctor.specialization,
    experience: doctor.experience,
    actions:
      <div className="flex items-center justify-center w-full gap-1">
        <Button variant="warn">
          <Tooltip label="Редактировать" position="left" />
          <Icons.edit width={14} height={14} />
        </Button>
        <Button variant="error" onClick={() => setDeleteModal({ isOpen: true, deleteId: doctor.id, title: doctor.name })}>
          <Tooltip label="Удалить" position="left" />
          <Icons.delete width={14} height={14} />
        </Button>
      </div>
  })), [filter, doctors]);

  return (
    <>
      <DataTable
        className={className}
        records={records}
        columns={columns}
      />
      <Modal isOpen={deleteModal.isOpen}>
        <DoctorsDeleteForm modal={deleteModal} setModal={setDeleteModal} />
      </Modal>
    </>
  );
}

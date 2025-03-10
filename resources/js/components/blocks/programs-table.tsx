import React, { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { PropsWithClassname } from '../../types';
import DataTable from '../ui/data-table';
import { Program, Programs, ProgramsFilter } from '../../types/programs';
import Button from '../ui/button';
import { Icons } from '../icons';
import Tooltip from '../ui/tooltip';
import Modal from '../ui/modal';
import ProgramsDeleteForm from '../forms/programs/programs-delete-form';
import { generatePath } from 'react-router-dom';
import { AppRoute } from '@/const';
import { ColumnDef } from '@tanstack/react-table';

export type AccessorProps = {
  program: Program;
};

type ProgramsTableProps = PropsWithClassname<{
  programs: Programs;
  filter: ProgramsFilter;
  setFilter: Dispatch<SetStateAction<ProgramsFilter>>;
}>;

export default function ProgramsTable({
  className,
  programs,
  filter,
  setFilter,
}: ProgramsTableProps): JSX.Element {
  const Icon = Icons[filter.orderType === 'asc' ? 'north' : 'south'];
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    deleteId: 0,
    title: '',
  });

  const columns = useMemo(() => ([
    {
      accessor: 'title',
      header:
        <button
          className="flex items-center grow h-6 -m-2 px-2 gap-4"
          type="button"
          onClick={() =>
            setFilter((filter) => ({
              ...filter,
              orderBy: filter.orderBy === 'title' && filter.orderType === 'asc' ? '' : 'title',
              orderType: filter.orderBy === 'title' ? (filter.orderType === 'desc' ? 'asc' : 'desc') : 'desc',
            }))
          }
        >
          Заголовок
          {filter.orderBy === 'title' && <Icon width={12} height={12} />}
        </button>,
      width: 440,
      hidden: !filter.title.visibility,
    },
    {
      accessor: 'category',
      header:
        <button
          className="flex items-center grow h-6 -m-2 px-2 gap-4"
          type="button"
          onClick={() =>
            setFilter((filter) => ({
              ...filter,
              orderBy: filter.orderBy === 'category' && filter.orderType === 'asc' ? '' : 'category',
              orderType: filter.orderBy === 'category' ? (filter.orderType === 'desc' ? 'asc' : 'desc') : 'desc',
            }))
          }
        >
          Категория
          {filter.orderBy === 'category' && <Icon width={12} height={12} />}
        </button>,
      width: 240,
      hidden: !filter.category.visibility,
    },
    {
      accessor: 'price',
      header:
        <button
          className="flex items-center grow h-6 -m-2 px-2 gap-4"
          type="button"
          onClick={() =>
            setFilter((filter) => ({
              ...filter,
              orderBy: filter.orderBy === 'price' && filter.orderType === 'asc' ? '' : 'price',
              orderType: filter.orderBy === 'price' ? (filter.orderType === 'desc' ? 'asc' : 'desc') : 'desc',
            }))
          }
        >
          Цена
          {filter.orderBy === 'price' && <Icon width={12} height={12} />}
        </button>,
      width: 100,
      hidden: !filter.price.visibility,
    },
    {
      accessor: 'description',
      header:
        <button
          className="flex items-center grow h-6 -m-2 px-2 gap-4"
          type="button"
          onClick={() =>
            setFilter((filter) => ({
              ...filter,
              orderBy: filter.orderBy === 'description' && filter.orderType === 'asc' ? '' : 'description',
              orderType: filter.orderBy === 'description' ? (filter.orderType === 'desc' ? 'asc' : 'desc') : 'desc',
            }))
          }
        >
          Описание
          {filter.orderBy === 'description' && <Icon width={12} height={12} />}
        </button>,
      width: 700,
      hidden: !filter.description.visibility,
    },
    {
      accessor: 'actions',
      header: <span className="flex justify-center items-center w-full">Действия</span>,
      width: 120,
      sticky: 'right',
    },
  ]), [filter]);

  const records = useMemo(() => programs.map((program) => ({
    title: program.title,
    category: program.category.title,
    description: program.description,
    price: program.price,
    actions:
      <div className="flex items-center justify-center w-full gap-1">
        <Button variant="warn" href={generatePath(AppRoute.Dashboard.Programs.Edit, { id: program.id })}>
          <Tooltip label="Редактировать" position="left" />
          <Icons.edit width={14} height={14} />
        </Button>
        <Button variant="error" onClick={() => setDeleteModal({ isOpen: true, deleteId: program.id, title: program.title })}>
          <Tooltip label="Удалить" position="left" />
          <Icons.delete width={14} height={14} />
        </Button>
      </div>
  })), [filter, programs]);

  return (
    <>
      <DataTable
        className={className}
        records={records}
        columns={columns}
      />
      <Modal isOpen={deleteModal.isOpen}>
        <ProgramsDeleteForm modal={deleteModal} setModal={setDeleteModal} />
      </Modal>
    </>
  );
}

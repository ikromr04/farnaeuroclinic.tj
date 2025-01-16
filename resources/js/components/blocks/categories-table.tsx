import React, { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { PropsWithClassname } from '../../types';
import DataTable, { DataTableColumns } from '../ui/data-table';
import Button from '../ui/button';
import { Icons } from '../icons';
import Tooltip from '../ui/tooltip';
import Modal from '../ui/modal';
import { Categories, CategoriesFilter, Category } from '@/types/categories';
import CategoriesDeleteForm from '../forms/categories/categories-delete-form';

export type AccessorProps = {
  category: Category;
};

type CategoriesTableProps = PropsWithClassname<{
  categories: Categories;
  filter: CategoriesFilter;
  setFilter: Dispatch<SetStateAction<CategoriesFilter>>;
}>;

export default function CategoriesTable({
  className,
  categories,
  filter,
  setFilter,
}: CategoriesTableProps): JSX.Element {
  const Icon = Icons[filter.orderType === 'asc' ? 'north' : 'south'];
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    deleteId: 0,
    title: '',
  });

  const columns: DataTableColumns = useMemo(() => ([
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
      width: 1060,
      hidden: !filter.description.visibility,
    },
    {
      accessor: 'actions',
      header: <span className="flex justify-center items-center w-full">Действия</span>,
      width: 120,
      sticky: 'right',
    },
  ]), [filter]);

  const records = useMemo(() => categories.map((category) => ({
    title: category.title,
    description: category.description,
    actions:
      <div className="flex items-center justify-center w-full gap-1">
        <Button variant="warn">
          <Tooltip label="Редактировать" position="left" />
          <Icons.edit width={14} height={14} />
        </Button>
        <Button variant="error" onClick={() => setDeleteModal({ isOpen: true, deleteId: category.id, title: category.title })}>
          <Tooltip label="Удалить" position="left" />
          <Icons.delete width={14} height={14} />
        </Button>
      </div>
  })), [filter, categories]);

  return (
    <>
      <DataTable
        className={className}
        records={records}
        columns={columns}
      />
      <Modal isOpen={deleteModal.isOpen}>
        <CategoriesDeleteForm modal={deleteModal} setModal={setDeleteModal} />
      </Modal>
    </>
  );
}

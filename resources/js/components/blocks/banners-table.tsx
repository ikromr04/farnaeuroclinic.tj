import React, { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { PropsWithClassname } from '../../types';
import DataTable, { DataTableColumns } from '../ui/data-table';
import Button from '../ui/button';
import { Icons } from '../icons';
import Tooltip from '../ui/tooltip';
import Modal from '../ui/modal';
import { Banner, Banners, BannersFilter } from '@/types/banners';
import BannersDeleteForm from '../forms/banners/banners-delete-form';
import BannersEditForm from '../forms/banners/banners-edit-form';

type BannersTableProps = PropsWithClassname<{
  banners: Banners;
  filter: BannersFilter;
  setFilter: Dispatch<SetStateAction<BannersFilter>>;
}>;

export default function BannersTable({
  className,
  banners,
  filter,
  setFilter,
}: BannersTableProps): JSX.Element {
  const Icon = Icons[filter.orderType === 'asc' ? 'north' : 'south'];
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    deleteId: 0,
    title: '',
  });

  const [editModal, setEditModal] = useState<{ isOpen: boolean; banner: Banner }>({
    isOpen: false,
    banner: {
      id: 0,
      title: '',
      page: 'home',
      category: {
        id: 0,
        description: '',
        img: '',
        slug: '',
        title: '',
      },
      link: '',
      description: '',
      image: '',
    },
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
      accessor: 'page',
      header: 'Страница',
      width: 180,
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
      width: 440,
      hidden: !filter.description.visibility,
    },
    {
      accessor: 'link',
      header:
        <button
          className="flex items-center grow h-6 -m-2 px-2 gap-4"
          type="button"
          onClick={() =>
            setFilter((filter) => ({
              ...filter,
              orderBy: filter.orderBy === 'link' && filter.orderType === 'asc' ? '' : 'link',
              orderType: filter.orderBy === 'link' ? (filter.orderType === 'desc' ? 'asc' : 'desc') : 'desc',
            }))
          }
        >
          Ссылка подробнее
          {filter.orderBy === 'link' && <Icon width={12} height={12} />}
        </button>,
      width: 200,
      hidden: !filter.link.visibility,
    },
    {
      accessor: 'actions',
      header: <span className="flex justify-center items-center w-full">Действия</span>,
      width: 120,
      sticky: 'right',
    },
  ]), [filter, banners]);

  const records = useMemo(() => banners.map((banner) => ({
    title: banner.title,
    link: banner.link,
    page: banner.page === 'home' ? 'Главная' : (banner.page === 'for-patient' ? 'Пациентам' : ''),
    category: banner.category?.title,
    description: banner.description,
    actions:
      <div className="flex items-center justify-center w-full gap-1">
        <Button variant="warn" onClick={() => setEditModal({ isOpen: true, banner })}>
          <Tooltip label="Редактировать" position="left" />
          <Icons.edit width={14} height={14} />
        </Button>
        <Button variant="error" onClick={() => setDeleteModal({ isOpen: true, deleteId: banner.id, title: banner.title })}>
          <Tooltip label="Удалить" position="left" />
          <Icons.delete width={14} height={14} />
        </Button>
      </div>
  })), [filter, banners]);

  return (
    <>
      <DataTable
        className={className}
        records={records}
        columns={columns}
      />
      <Modal isOpen={deleteModal.isOpen}>
        <BannersDeleteForm modal={deleteModal} setModal={setDeleteModal} />
      </Modal>
      <Modal isOpen={editModal.isOpen}>
        <BannersEditForm key={editModal.isOpen.toString()} modal={editModal} setModal={setEditModal} />
      </Modal>
    </>
  );
}

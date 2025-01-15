import React from 'react';
import { PropsWithClassname } from '../../types';
import DataTable, { DataTableColumns } from '../ui/data-table';
import { Program, Programs, ProgramsFilter } from '../../types/programs';
import Button from '../ui/button';
import { Icons } from '../icons';
import Tooltip from '../ui/tooltip';

export type AccessorProps = {
  program: Program;
};

type UsersTableProps = PropsWithClassname<{
  programs: Programs;
  filter: ProgramsFilter;
}>;

export default function ProgramsTable({
  className,
  programs,
  filter,
}: UsersTableProps): JSX.Element {
  const columns: DataTableColumns = [
    {
      accessor: 'title',
      header: 'Заголовок',
      width: 440,
      hidden: !filter.title.visibility,
    },
    {
      accessor: 'category',
      header: 'Категория',
      width: 240,
      hidden: !filter.category.visibility,
    },
    {
      accessor: 'price',
      header: 'Цена',
      width: 100,
      hidden: !filter.price.visibility,
    },
    {
      accessor: 'description',
      header: 'Описание',
      width: 700,
      hidden: !filter.description.visibility,
    },
    {
      accessor: 'actions',
      header: <span className="flex justify-center items-center w-full">Действия</span>,
      width: 120,
      sticky: 'right',
    },
  ];

  const records = programs.map((program) => ({
    title: program.title,
    category: program.category.title,
    description: program.description,
    price: program.price,
    actions:
      <div className="flex items-center justify-center w-full gap-1">
        <Button variant="warn">
          <Tooltip label="Редактировать" position="left" />
          <Icons.edit width={14} height={14} />
        </Button>
        <Button variant="error">
          <Tooltip label="Удалить" position="left" />
          <Icons.delete width={14} height={14} />
        </Button>
      </div>
  }));

  return (
    <DataTable
      className={className}
      records={records}
      columns={columns}
    />
  );
}

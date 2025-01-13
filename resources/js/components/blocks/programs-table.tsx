import React from 'react';
import { PropsWithClassname } from '../../types';
import DataTable, { DataTableColumns } from '../ui/data-table';
import { Program, Programs } from '../../types/programs';

export type AccessorProps = {
  program: Program;
};

type UsersTableProps = PropsWithClassname<{
  programs: Programs;
}>;

export default function ProgramsTable({
  className,
  programs,
}: UsersTableProps): JSX.Element {
  const columns: DataTableColumns = [
    {
      accessor: 'title',
      header: 'Заголовок',
      width: 400,
    },
    {
      accessor: 'category',
      header: 'Категория',
      width: 200,
    },
    {
      accessor: 'price',
      header: 'Цена',
      width: 100,
    },
    {
      accessor: 'description',
      header: 'Описание',
      width: 600,
    },
  ];

  const records = programs.map((program) => ({
    title: program.title,
    category: program.category.title,
    description: program.description,
    price: program.price,
  }));

  return (
    <DataTable
      className={className}
      records={records}
      columns={columns}
    />
  );
}

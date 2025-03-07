import React, { BaseSyntheticEvent, useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  RowSelectionState,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import classNames from 'classnames';
import Button from './button';

type DataTableProps<T> = {
  data: T[];
  columns: ColumnDef<T>[];
  visibility: VisibilityState;
  onCreateButtonClick: () => void;
  className?: string;
};

export default function DataTable<T>({
  data,
  columns,
  visibility,
  onCreateButtonClick,
  className,
}: DataTableProps<T>): JSX.Element {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(visibility);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter,
      rowSelection,
      columnVisibility,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
  });

  return (
    <div
      className={classNames(
        'bg-white rounded-md shadow-md border py-[6px]',
        className,
      )}
    >
      <div className="flex gap-x-4 px-3 pt-2">
        {table.getAllColumns().map(column => (
          <label key={column.id} className="flex gap-x-1 leading-none">
            <input
              type="checkbox"
              checked={column.getIsVisible()}
              onChange={column.getToggleVisibilityHandler()}
            />
            {column.id}
          </label>
        ))}
      </div>

      <table className="w-full">
        <caption className="sticky z-10 top-0 bg-white">
          <div className="flex items-end gap-x-2 p-2 border-b">
            <input
              className="flex grow px-2 focus:outline-none focus:border-b"
              type="search"
              placeholder="Поиск..."
              value={globalFilter}
              onInput={(evt: BaseSyntheticEvent) => setGlobalFilter(evt.target.value)}
            />

            <Button
              icon="add"
              variant="success"
              onClick={onCreateButtonClick}
            >
              Добавить
            </Button>
          </div>
        </caption>

        <thead className="sticky top-[49px] z-10 shadow bg-white">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-2 text-start"
                >
                  <button
                    className="flex items-center min-w-max"
                    type="button"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getIsSorted() === 'asc' ? ' 🔼' : header.column.getIsSorted() === 'desc' ? ' 🔽' : ''}
                  </button>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="bg-gray-50">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={JSON.stringify(row.original)}
              className="border-b"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={JSON.stringify(cell)} className="p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

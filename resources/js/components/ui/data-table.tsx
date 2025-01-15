import React, { BaseSyntheticEvent, ReactNode, useEffect, useState } from 'react';
import { PropsWithClassname } from '../../types';
import classNames from 'classnames';
import { nanoid } from 'nanoid';
import Button from './button';
import { Icons } from '../icons';

const DEFAULT_COLUMN_WIDTH = 200;

export type DataTableRow = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type DataTableRows = DataTableRow[];

export type DataTableColumn = {
  accessor: string;
  header: ReactNode;
  width?: number;
  hidden?: boolean;
  sticky?: 'left' | 'right';
};

export type DataTableColumns = DataTableColumn[]

type DataTableProps = PropsWithClassname<{
  records: DataTableRows;
  columns: DataTableColumns;
  recordsPerPage?: number;
}>;

export default function DataTable({
  className,
  columns,
  records,
  recordsPerPage = 16,
}: DataTableProps): JSX.Element {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(recordsPerPage);
  const from = (page - 1) * perPage;
  const to = (page * perPage) > records.length ? records.length : (page * perPage);
  const paginatedData = records.slice(from, to);

  useEffect(() => {
    setPage(1);
  }, [records]);

  const onPerPageChange = (evt: BaseSyntheticEvent) => {
    if (+evt.target.value > 50) {
      evt.target.value = 50;
    }
    setPerPage(evt.target.value);
    setPage(1);
  };

  return (
    <div className={classNames(className, 'relative z-0 flex flex-col')}>
      <p className="mb-2 leading-none min-w-max">Отображение {from || 1} - {to} из {records.length}</p>

      <div className="relative overflow-hidden rounded shadow bg-white border">
        <table className="flex flex-col h-[calc(100%-49px)] overflow-auto scrollbar text-sm leading-[1.2]">
          <thead className="sticky top-0 z-10 flex min-w-max border-b">
            <tr className="flex font-semibold text-left w-full bg-gray-100">
              <th className="flex items-center w-8 font-semibold bg-gray-100 p-2">
                №
              </th>
              {columns.map((column) => {
                if (!column.hidden) {
                  return (
                    <th
                      key={nanoid()}
                      className={classNames(
                        'flex items-center font-semibold bg-gray-100 p-2',
                        column.sticky && 'sticky z-10',
                        column.sticky === 'left' ? 'left-0' : 'right-0',
                      )}
                      style={{
                        minWidth: column.width || DEFAULT_COLUMN_WIDTH,
                        maxWidth: column.width || DEFAULT_COLUMN_WIDTH,
                      }}
                    >
                      {column.header}
                    </th>
                  );
                }
                return null;
              })}
            </tr>
          </thead>

          <tbody className="flex flex-col static z-0">
            {paginatedData.map((record, index) => (
              <tr
                key={nanoid()}
                className={classNames(
                  'flex min-w-max',
                  (index % 2 === 1) ? 'bg-gray-50' : 'bg-white',
                )}>
                <td className={classNames(
                  'flex items-center text-left w-8 px-2 py-1',
                  (index % 2 === 1) ? 'bg-gray-50' : 'bg-white',
                )}>
                  {from + index + 1}
                </td>
                {columns.map((column) => {
                  if (!column.hidden) {
                    return (
                      <td
                        key={nanoid()}
                        className={classNames(
                          'flex items-center text-left break-word px-2 py-1',
                          column.sticky && 'sticky z-10',
                          column.sticky === 'left' ? 'left-0' : 'right-0',
                          (index % 2 === 1) ? 'bg-gray-50' : 'bg-white',
                        )}
                        style={{
                          minWidth: column.width || DEFAULT_COLUMN_WIDTH,
                          maxWidth: column.width || DEFAULT_COLUMN_WIDTH,
                        }}
                      >
                        {record[column.accessor]}
                      </td>
                    );
                  }
                  return null;
                })}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex gap-2 flex-wrap w-full p-2 bg-gray-100 border-t">
          <label className="flex items-center w-max gap-2">
            Строк
            <input
              className="flex leading-none border min-w-0 w-[46px] h-8 rounded text-center"
              type="number"
              value={perPage}
              onInput={onPerPageChange}
            />
          </label>

          <div className="flex items-center gap-2 ml-auto">
            <Button
              className={classNames(page < 2 && 'pointer-events-none shadow-none opacity-60')}
              onClick={() => setPage((prevPage) => prevPage - 1)}
              disabled={page < 2}
              variant="light"
            >
              <Icons.previous width={14} height={14} />
              <span className="sr-only">Предыдущий</span>
            </Button>
            <Button
              className={classNames(page >= (records.length / perPage) && 'pointer-events-none shadow-none opacity-60')}
              onClick={() => setPage((prevPage) => prevPage + 1)}
              disabled={page >= (records.length / perPage)}
              variant="light"
            >
              <Icons.next width={14} height={14} />
              <span className="sr-only">Следующий</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

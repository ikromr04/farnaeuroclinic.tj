import PageLayout from '@/components/layouts/page-layout';
import Button from '@/components/ui/button';
import DataTable from '@/components/ui/data-table';
import { AppRoute, TextPage } from '@/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { getTexts } from '@/store/texts-slice/texts-selector';
import { fetchTextsAction } from '@/store/texts-slice/texts-api-actions';
import { Text } from '@/types/texts';

function TextsPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const texts = useAppSelector(getTexts);
  const navigate = useNavigate();

  useEffect(() => {
    if (!texts) dispatch(fetchTextsAction());
  }, [texts, dispatch]);

  const columns: ColumnDef<Text>[] = [
    {
      id: 'ID',
      accessorKey: 'id',
      header: 'ID',
      enableSorting: true,
    },
    {
      id: 'Страница',
      accessorKey: 'page',
      header: 'Страница',
      enableSorting: true,
      cell: ({ row }) => TextPage[row.original.page as keyof typeof TextPage],
    },
    {
      id: 'Заголовок',
      accessorKey: 'title',
      header: 'Заголовок',
      enableSorting: true,
      cell: ({ row }) => <div dangerouslySetInnerHTML={{ __html: row.original.title }} />,
    },
    {
      id: 'Описание',
      accessorKey: 'content',
      header: 'Описание',
      enableSorting: true,
      cell: ({ row }) => <div dangerouslySetInnerHTML={{ __html: row.original.content || '' }} />,
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
            icon="edit"
            variant="warn"
            href={generatePath(AppRoute.Dashboard.Texts.Edit, { id: row.original.id })}
          >
            <span className="sr-only">Редактировать</span>
          </Button>
        </div>
      ),
    },
  ];

  return (
    <PageLayout>
      <h1 className="title mx-8 mt-4 mb-2">
        Тексты ({texts?.length})
      </h1>

      {texts &&
        <DataTable
          className="mx-4 mb-10"
          data={texts}
          columns={columns}
          visibility={{
            'Дата добавления': false,
            'Дата обновления': false,
          }}
        />}
    </PageLayout>
  );
}

export default TextsPage;

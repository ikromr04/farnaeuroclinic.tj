import PageLayout from '@/components/layouts/page-layout';
import Button from '@/components/ui/button';
import DataTable from '@/components/ui/data-table';
import Modal from '@/components/ui/modal';
import { AppRoute } from '@/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { getReviews } from '@/store/reviews-slice/reviews-selector';
import { fetchReviewsAction } from '@/store/reviews-slice/reviews-api-actions';
import { Review } from '@/types/reviews';
import ReviewsDeleteForm from '@/components/forms/reviews/reviews-delete-form';

function ReviewsPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(getReviews);
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    id: 0,
  });

  useEffect(() => {
    if (!reviews) dispatch(fetchReviewsAction());
  }, [reviews, dispatch]);

  const columns: ColumnDef<Review>[] = [
    {
      id: 'ID',
      accessorKey: 'id',
      header: 'ID',
      enableSorting: true,
    },
    {
      id: 'Имя',
      accessorKey: 'name',
      header: 'Имя',
      enableSorting: true,
    },
    {
      id: 'Дата',
      accessorKey: 'date',
      header: 'Дата',
      enableSorting: true,
      cell: ({ row }) => dayjs(row.original.date).format('DD MMMM YYYY'),
    },
    {
      id: 'Рейтинг',
      accessorKey: 'rate',
      header: 'Рейтинг',
      enableSorting: true,
    },
    {
      id: 'Комментарий',
      accessorKey: 'comment',
      header: 'Комментарий',
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
            icon="edit"
            variant="warn"
            href={generatePath(AppRoute.Dashboard.Reviews.Edit, { id: row.original.id })}
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
        Комментарии ({reviews?.length})
      </h1>

      {reviews &&
        <DataTable
          className="mx-4 mb-10"
          data={reviews}
          columns={columns}
          visibility={{
            'Картинка': false,
            'Ссылка': false,
          }}
          onCreateButtonClick={() => navigate(AppRoute.Dashboard.Reviews.Create)}
        />}

      <Modal isOpen={deleteModal.isOpen}>
        <ReviewsDeleteForm modal={deleteModal} setModal={setDeleteModal} />
      </Modal>
    </PageLayout>
  );
}

export default ReviewsPage;

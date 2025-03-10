import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Icons } from '@/components/icons';
import { AppRoute } from '@/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import PageLayout from '@/components/layouts/page-layout';
import ReviewsEditForm from '@/components/forms/reviews/reviews-edit-form';
import { getReviews } from '@/store/reviews-slice/reviews-selector';
import { fetchReviewsAction } from '@/store/reviews-slice/reviews-api-actions';

function ReviewsEditPage(): JSX.Element {
  const params = useParams();
  const reviews = useAppSelector(getReviews);
  const review = reviews?.find(({ id }) => id === +(params.id || 0));
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!reviews && params.id) dispatch(fetchReviewsAction());
  }, [reviews, params.id, dispatch]);

  return (
    <PageLayout>
      <main className="mx-4">
        <h1 className="title mt-4 mb-2">
          Редактирование комментария
        </h1>

        <ul className="flex items-center gap-1 mb-4 leading-none">
          <li className="flex items-center gap-1">
            <Link className="transition-all duration-300 hover:text-brand" to={AppRoute.Dashboard.Reviews.Index}>
              Комментарии
            </Link>
            <Icons.chevronRight width={6} />
          </li>
          <li className="font-medium text-[15px]">
            {review?.name}
          </li>
        </ul>

        {review && <ReviewsEditForm key={JSON.stringify(review)} review={review} />}
      </main>
    </PageLayout>
  );
}

export default ReviewsEditPage;

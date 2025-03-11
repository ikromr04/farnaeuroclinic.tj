import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Icons } from '@/components/icons';
import { AppRoute } from '@/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import PageLayout from '@/components/layouts/page-layout';
import ReviewsEditForm from '@/components/forms/reviews/reviews-edit-form';
import { getReviews } from '@/store/reviews-slice/reviews-selector';
import { fetchReviewsAction } from '@/store/reviews-slice/reviews-api-actions';
import { getTexts } from '@/store/texts-slice/texts-selector';
import { fetchTextsAction } from '@/store/texts-slice/texts-api-actions';
import TextsEditForm from '@/components/forms/texts/texts-edit-form';

function TextsEditPage(): JSX.Element {
  const params = useParams();
  const texts = useAppSelector(getTexts);
  const text = texts?.find(({ id }) => id === +(params.id || 0));
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!texts && params.id) dispatch(fetchTextsAction());
  }, [texts, params.id, dispatch]);

  return (
    <PageLayout>
      <main className="mx-4">
        <h1 className="title mt-4 mb-2">
          Редактирование текста
        </h1>

        <ul className="flex items-center gap-1 mb-4 leading-none">
          <li className="flex items-center gap-1">
            <Link className="transition-all duration-300 hover:text-brand" to={AppRoute.Dashboard.Texts.Index}>
              Тексты
            </Link>
            <Icons.chevronRight width={6} />
          </li>
          <li className="font-medium text-[15px]">
            {text?.title.replace(/<[^>]*>/g, '')}
          </li>
        </ul>

        {text && <TextsEditForm key={JSON.stringify(text)} text={text} />}
      </main>
    </PageLayout>
  );
}

export default TextsEditPage;

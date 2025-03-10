import React from 'react';
import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import { useAppDispatch } from '../../../hooks';
import Button from '../../ui/button';
import TextField from '@/components/ui/fields/text-field';
import { toast } from 'react-toastify';
import { ReviewStoreDTO } from '@/dto/reviews-dto';
import { storeReviewAction } from '@/store/reviews-slice/reviews-api-actions';
import ContentField from '@/components/ui/fields/content-field';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Обязательное поле.'),
  date: Yup.date().required('Обязательное поле.'),
  rate: Yup.number().required('Обязательное поле.'),
  comment: Yup.string().required('Обязательное поле.'),
});

function ReviewsCreateForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const initialValues: ReviewStoreDTO = {
    name: '',
    date: '',
    rate: 5,
    comment: '',
  };

  const onSubmit = async (
    values: ReviewStoreDTO,
    helpers: FormikHelpers<ReviewStoreDTO>,
  ) => {
    helpers.setSubmitting(true);

    await dispatch(storeReviewAction({
      dto: values,
      onSuccess: () => {
        helpers.resetForm();
        toast.success('Комментария успешно добавлена.');
      },
      onValidationError: (error) => helpers.setErrors({ ...error.errors }),
      onFail: (message) => toast.error(message),
    }));

    helpers.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, resetForm }) => (
        <Form className="flex flex-col gap-2 px-6 py-3 bg-white border rounded-md">
          <div className="grid grid-cols-4 gap-4">
            <TextField className="col-span-2" name="name" label="Имя" required />
            <TextField name="date" label="Дата" type="date" required />
            <TextField name="rate" label="Рейтинг" type="number" required min={0} max={5} />
          </div>
          <ContentField name="comment" label="Комментария" required />

          <div className="flex justify-end mt-4 gap-2">
            <Button
              type="reset"
              disabled={isSubmitting}
              variant="error"
              onClick={() => resetForm()}
            >
              Отмена
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="success"
              loading={isSubmitting}
            >
              Добавить
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ReviewsCreateForm;

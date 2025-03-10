import React from 'react';
import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import classNames from 'classnames';
import { useAppDispatch } from '../../../hooks';
import Button from '../../ui/button';
import { storeCategoryAction } from '../../../store/categories-slice/categories-api-actions';
import TextField from '@/components/ui/fields/text-field';
import { toast } from 'react-toastify';
import { CategoryStoreDTO } from '@/dto/categories-dto';
import { addCategoryAction } from '@/store/categories-slice/categories-slice';
import ImageField from '@/components/ui/fields/image-field';
import EditorField from '@/components/ui/fields/editor-field/editor-field';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Обязательное поле.'),
  img: Yup.mixed()
    .required('Обязательное поле.')
    .test(
      'fileSize',
      'Размер файла слишком большой (макс. 2MB)',
      (value) => !value || (value instanceof File && value.size <= 2 * 1024 * 1024)
    )
    .test(
      'fileType',
      'Неподдерживаемый формат файла. Разрешены только JPEG, JPG или PNG.',
      (value) =>
        !value ||
        (value instanceof File &&
          ['image/jpeg', 'image/jpg', 'image/png'].includes(value.type))
    ),
  description: Yup.string().required('Обязательное поле.'),
});

export default function CategoriesCreateForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const initialValues: CategoryStoreDTO = {
    title: '',
    img: '',
    description: '',
  };

  const onSubmit = async (
    values: CategoryStoreDTO,
    helpers: FormikHelpers<CategoryStoreDTO>,
  ) => {
    helpers.setSubmitting(true);

    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('img', values.img);
    formData.append('description', values.description);

    await dispatch(storeCategoryAction({
      dto: formData,
      onSuccess: (createdCategory) => {
        dispatch(addCategoryAction(createdCategory));
        helpers.resetForm();
        toast.success('Новая категория успешно добавлена.');
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
      {({ isSubmitting, resetForm, values }) => (
        <Form className="flex flex-col gap-2 px-6 py-3 bg-white border rounded-md">
          <ImageField
            key={values.img.toString()}
            className="w-max"
            name="img"
            label="Картинка"
            accept=".jpeg, .jpg, .png"
            required
          />

          <TextField name="title" label="Заголовок" required />

          <EditorField name="description" label="Описание" required />

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
              className={classNames('justify-center', isSubmitting && 'opacity-60')}
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
              variant="success"
            >
              Добавить
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

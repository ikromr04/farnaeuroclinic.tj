import React, { Dispatch, SetStateAction, useEffect } from 'react';
import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import classNames from 'classnames';
import { PropsWithClassname } from '../../../types';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import Button from '../../ui/button';
import Spinner from '../../ui/spinner';
import ContentField from '../../ui/fields/content-field';
import { fetchCategoriesAction, storeCategoryAction } from '../../../store/categories-slice/categories-api-actions';
import { getCategories } from '@/store/categories-slice/categories-selector';
import TextField from '@/components/ui/fields/text-field';
import { toast } from 'react-toastify';
import { CategoryStoreDTO } from '@/dto/categories-dto';
import { addCategoryAction } from '@/store/categories-slice/categories-slice';
import ImageField from '@/components/ui/fields/image-field';

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

type CategoriesCreateFormProps = PropsWithClassname<{
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>;

export default function CategoriesCreateForm({
  className,
  setIsOpen,
}: CategoriesCreateFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategories);
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
        setIsOpen(false);
      },
      onValidationError: (error) => helpers.setErrors({ ...error.errors }),
      onFail: (message) => toast.error(message),
    }));

    helpers.setSubmitting(false);
  };

  useEffect(() => {
    if (!categories) dispatch(fetchCategoriesAction());
  }, [dispatch, categories]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, resetForm }) => (
        <Form className={classNames(className, 'flex flex-col gap-2 py-2 px-3 min-w-[400px]')}>
          <h2 className="text-md text-gray-900 font-semibold">Добавление категории</h2>

          <ImageField
            name="img"
            label="Картинка"
            accept=".jpeg, .jpg, .png"
          />

          <TextField name="title" label="Заголовок" />

          <ContentField name="description" label="Краткое описание" />

          <div className="flex justify-end mt-4 gap-2">
            <Button
              type="reset"
              disabled={isSubmitting}
              variant="error"
              onClick={() => {
                resetForm();
                setIsOpen(false);
              }}
            >
              Отмена
            </Button>
            <Button
              className={classNames('justify-center', isSubmitting && 'opacity-60')}
              type="submit"
              disabled={isSubmitting}
              variant="success"
            >
              {isSubmitting ? <Spinner className="w-6 h-6 m-auto" /> : 'Добавить'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

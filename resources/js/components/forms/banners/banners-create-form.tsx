import React, { Dispatch, SetStateAction, useEffect } from 'react';
import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import classNames from 'classnames';
import { PropsWithClassname } from '../../../types';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import Button from '../../ui/button';
import Spinner from '../../ui/spinner';
import ContentField from '../../ui/fields/content-field';
import { fetchCategoriesAction } from '../../../store/categories-slice/categories-api-actions';
import { getCategories } from '@/store/categories-slice/categories-selector';
import TextField from '@/components/ui/fields/text-field';
import { toast } from 'react-toastify';
import ImageField from '@/components/ui/fields/image-field';
import SelectField from '@/components/ui/fields/select-field';
import { BannerStoreDTO } from '@/dto/banners-dto';
import { storeBannerAction } from '@/store/banners-slice/banners-api-actions';
import { addBannerAction } from '@/store/banners-slice/banners-slice';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Обязательное поле.'),
  description: Yup.string().required('Обязательное поле.'),
});

type BannersCreateFormProps = PropsWithClassname<{
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>;

export default function BannersCreateForm({
  className,
  setIsOpen,
}: BannersCreateFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategories);
  const initialValues: BannerStoreDTO = {
    title: '',
    image: '',
    description: '',
    link: '',
    page: '',
    program_category_id: '',
  };

  const onSubmit = async (
    values: BannerStoreDTO,
    helpers: FormikHelpers<BannerStoreDTO>,
  ) => {
    helpers.setSubmitting(true);

    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('image', values.image);
    formData.append('description', values.description);
    formData.append('link', values.link);
    formData.append('page', values.page);
    formData.append('program_category_id', values.program_category_id);

    await dispatch(storeBannerAction({
      dto: formData,
      onSuccess: (createdBanner) => {
        dispatch(addBannerAction(createdBanner));
        helpers.resetForm();
        toast.success('Новый баннер добавлен.');
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
      {({ isSubmitting, setFieldValue, resetForm }) => (
        <Form className={classNames(className, 'flex flex-col gap-2 py-2 px-3 min-w-[400px]')}>
          <h2 className="text-md text-gray-900 font-semibold">Добавление категории</h2>

          <ImageField
            name="image"
            label="Картинка"
            accept=".jpeg, .jpg, .png"
            imgClass="w-[320px] h-[220px]"
          />

          <TextField name="title" label="Заголовок" />

          {categories &&
            <SelectField
              name="program_category_id"
              label="Категория"
              cleanable
              onClean={() => setFieldValue('program_category_id', '')}
              options={categories.map(({ id, title }) => ({ value: id, label: title }))}
            />}

          <SelectField
            name="page"
            label="Страница"
            cleanable
            onClean={() => setFieldValue('page', '')}
            options={[{ value: 'home', label: 'Главная' }, { value: 'for-patient', label: 'Пациентам' }]}
          />

          <ContentField name="description" label="Описание" />

          <TextField name="link" label="Ссылка подробнее" />

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

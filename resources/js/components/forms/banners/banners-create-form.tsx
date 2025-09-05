import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import classNames from 'classnames';
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
import EditorField from '@/components/ui/fields/editor-field/editor-field';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Обязательное поле.'),
  description: Yup.string().required('Обязательное поле.'),
});

function BannersCreateForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategories);
  const initialValues: BannerStoreDTO = {
    title: '',
    image: '',
    description: '',
    link: '',
    page: '',
    color: '#00a596',
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
    formData.append('color', values.color);
    formData.append('program_category_id', values.program_category_id);

    await dispatch(storeBannerAction({
      dto: formData,
      onSuccess: (createdBanner) => {
        dispatch(addBannerAction(createdBanner));
        helpers.resetForm();
        toast.success('Новый баннер добавлен.');
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
      {({ isSubmitting, setFieldValue, values, resetForm }) => (
        <Form className="flex flex-col gap-2 px-6 py-3 bg-white border rounded-md">
          <ImageField
            key={values.image.toString()}
            className="w-max"
            name="image"
            label="Картинка"
            accept=".jpeg, .jpg, .png"
            imgClass="w-[320px] h-[220px]"
          />

          <div className="grid grid-cols-8 gap-4">
            <TextField className="col-span-7" name="title" label="Заголовок" required />
            <TextField name="color" type="color" label="Фон" required />
          </div>
          <EditorField name="description" label="Описание" required />

          <div className="grid grid-cols-3 gap-4">
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

            <TextField name="link" label="Ссылка подробнее" type="link" />
          </div>

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

export default BannersCreateForm;

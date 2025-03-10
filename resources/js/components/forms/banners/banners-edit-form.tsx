import Button from '@/components/ui/button';
import EditorField from '@/components/ui/fields/editor-field/editor-field';
import ImageField from '@/components/ui/fields/image-field';
import SelectField from '@/components/ui/fields/select-field';
import TextField from '@/components/ui/fields/text-field';
import { BannerUpdateDTO } from '@/dto/banners-dto';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { updateBannerAction } from '@/store/banners-slice/banners-api-actions';
import { fetchCategoriesAction } from '@/store/categories-slice/categories-api-actions';
import { getCategories } from '@/store/categories-slice/categories-selector';
import { Banner } from '@/types/banners';
import { Form, Formik, FormikHelpers } from 'formik';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

type BannersEditFormProps = {
  banner: Banner;
}

export default function BannersEditForm({
  banner,
}: BannersEditFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategories);

  const initialValues: BannerUpdateDTO = {
    id: banner.id,
    title: banner.title,
    image: banner.image,
    description: banner.description,
    page: banner.page || '',
    link: banner.link || '',
    program_category_id: banner.program_category_id ? String(banner.program_category_id) : '',
  };

  const onSubmit = async (
    values: BannerUpdateDTO,
    helpers: FormikHelpers<BannerUpdateDTO>
  ) => {
    helpers.setSubmitting(true);

    const formData = new FormData();
    formData.append('id', values.id.toString())
    formData.append('title', values.title)
    formData.append('image', values.image)
    formData.append('description', values.description)
    formData.append('page', values.page)
    formData.append('link', values.link)
    formData.append('program_category_id', values.program_category_id)

    await dispatch(updateBannerAction({
      dto: formData,
      onSuccess: () => {
        helpers.resetForm();
        toast.success('Баннер успешно обновлен.');
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
      onSubmit={onSubmit}
    >
      {({ isSubmitting, setFieldValue, resetForm, values }) => (
        <Form className="flex flex-col gap-2 px-6 py-3 bg-white border rounded-md">
          <ImageField
            key={values.image.toString()}
            className="w-max"
            name="image"
            label="Картинка"
            accept=".jpeg, .jpg, .png"
            imgClass="w-[320px] h-[220px]"
          />

          <TextField name="title" label="Заголовок" required />
          <EditorField name="description" label="Описание" required />

          <div className="grid grid-cols-3 gap-4">
            {categories &&
              <SelectField
                name="program_category_id"
                label="Категория"
                cleanable
                onClean={() => setFieldValue('program_category_id', '')}
                options={categories.map(({ id, title }) => ({ value: String(id), label: title }))}
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

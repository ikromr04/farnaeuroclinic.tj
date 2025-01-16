import Button from '@/components/ui/button';
import ContentField from '@/components/ui/fields/content-field';
import ImageField from '@/components/ui/fields/image-field';
import SelectField from '@/components/ui/fields/select-field';
import TextField from '@/components/ui/fields/text-field';
import Spinner from '@/components/ui/spinner';
import { BannerUpdateDTO } from '@/dto/banners-dto';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { updateBannerAction } from '@/store/banners-slice/banners-api-actions';
import { fetchCategoriesAction } from '@/store/categories-slice/categories-api-actions';
import { getCategories } from '@/store/categories-slice/categories-selector';
import { Banner } from '@/types/banners';
import classNames from 'classnames';
import { Form, Formik, FormikHelpers } from 'formik';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { toast } from 'react-toastify';

type BannersEditFormProps = {
  modal: {
    isOpen: boolean;
    banner: Banner;
  };
  setModal: Dispatch<SetStateAction<{
    isOpen: boolean;
    banner: Banner;
  }>>
}

export default function BannersEditForm({
  modal,
  setModal,
}: BannersEditFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategories);

  const initialValues: BannerUpdateDTO = {
    id: modal.banner.id,
    title: modal.banner.title,
    image: modal.banner.image,
    description: modal.banner.description,
    page: modal.banner.page,
    link: modal.banner.link || '',
    program_category_id: modal.banner.category?.id.toString() || '',
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
        setModal((prevState) => ({ ...prevState, isOpen: false }));
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
      {({ isSubmitting, setFieldValue }) => (
        <Form className="flex flex-col gap-4">
          <h2 className="text-md text-gray-900 font-semibold">Редактирование категории</h2>

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

          <div className="flex justify-end gap-1">
            <Button
              type="reset"
              variant="success"
              onClick={() => setModal((prevState) => ({ ...prevState, isOpen: false }))}
            >
              Отмена
            </Button>
            <Button
              className={classNames('justify-center', isSubmitting && 'opacity-60')}
              variant="error"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Spinner className="w-6 h-6 m-auto" /> : 'Редактировать'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

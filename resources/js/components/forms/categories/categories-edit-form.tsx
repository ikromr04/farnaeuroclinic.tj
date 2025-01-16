import Button from '@/components/ui/button';
import ContentField from '@/components/ui/fields/content-field';
import ImageField from '@/components/ui/fields/image-field';
import TextField from '@/components/ui/fields/text-field';
import Spinner from '@/components/ui/spinner';
import { CategoryUpdateDTO } from '@/dto/categories-dto';
import { useAppDispatch } from '@/hooks';
import { updateCategoryAction } from '@/store/categories-slice/categories-api-actions';
import { Category } from '@/types/categories';
import classNames from 'classnames';
import { Form, Formik, FormikHelpers } from 'formik';
import React, { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

type CategoriesEditFormProps = {
  modal: {
    isOpen: boolean;
    category: Category;
  };
  setModal: Dispatch<SetStateAction<{
    isOpen: boolean;
    category: Category;
  }>>
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Обязательное поле.'),
  description: Yup.string().required('Обязательное поле.'),
});

export default function CategoriesEditForm({
  modal,
  setModal,
}: CategoriesEditFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const initialValues: CategoryUpdateDTO = {
    id: modal.category.id,
    title: modal.category.title,
    img: modal.category.img,
    description: modal.category.description,
  };

  const onSubmit = async (
    values: CategoryUpdateDTO,
    helpers: FormikHelpers<CategoryUpdateDTO>
  ) => {
    helpers.setSubmitting(true);

    const formData = new FormData();
    formData.append('id', values.id.toString());
    formData.append('title', values.title);
    formData.append('img', values.img);
    formData.append('description', values.description);

    await dispatch(updateCategoryAction({
      dto: formData,
      onSuccess: () => {
        helpers.resetForm();
        toast.success('Категория успешно обновлена.');
        setModal((prevState) => ({ ...prevState, isOpen: false }));
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
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4">
          <h2 className="text-md text-gray-900 font-semibold">Редактирование категории</h2>

          <ImageField
            name="img"
            label="Картинка"
            accept=".jpeg, .jpg, .png"
          />

          <TextField name="title" label="Заголовок" />

          <ContentField name="description" label="Описание" />

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

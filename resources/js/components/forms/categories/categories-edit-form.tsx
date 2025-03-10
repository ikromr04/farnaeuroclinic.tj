import React from 'react';
import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import { useAppDispatch } from '../../../hooks';
import Button from '../../ui/button';
import { updateCategoryAction } from '../../../store/categories-slice/categories-api-actions';
import TextField from '@/components/ui/fields/text-field';
import { toast } from 'react-toastify';
import { CategoryUpdateDTO } from '@/dto/categories-dto';
import { addCategoryAction } from '@/store/categories-slice/categories-slice';
import ImageField from '@/components/ui/fields/image-field';
import EditorField from '@/components/ui/fields/editor-field/editor-field';
import { Category } from '@/types/categories';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Обязательное поле.'),
  img: Yup.mixed().required('Обязательное поле.'),
  description: Yup.string().required('Обязательное поле.'),
});

export default function CategoriesEditForm({
  category,
}: {
  category: Category
}): JSX.Element {
  const dispatch = useAppDispatch();

  const initialValues: CategoryUpdateDTO = {
    id: category.id,
    title: category.title,
    img: category.img,
    description: category.description,
  };

  const onSubmit = async (
    values: CategoryUpdateDTO,
    helpers: FormikHelpers<CategoryUpdateDTO>,
  ) => {
    helpers.setSubmitting(true);

    const formData = new FormData();
    formData.append('id', values.id.toString());
    formData.append('title', values.title);
    formData.append('img', values.img);
    formData.append('description', values.description);

    await dispatch(updateCategoryAction({
      dto: formData,
      onSuccess: (category) => {
        dispatch(addCategoryAction(category));
        helpers.resetForm();
        toast.success('Данные успешно обновлены.');
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
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
              variant="success"
            >
              Сохранить
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

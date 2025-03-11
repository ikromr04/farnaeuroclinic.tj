import React from 'react';
import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import { useAppDispatch } from '../../../hooks';
import Button from '../../ui/button';
import TextField from '@/components/ui/fields/text-field';
import { toast } from 'react-toastify';
import { Text } from '@/types/texts';
import { TextUpdateDTO } from '@/dto/texts-dto';
import { updateTextAction } from '@/store/texts-slice/texts-api-actions';
import EditorField from '@/components/ui/fields/editor-field/editor-field';

const validationSchema = Yup.object().shape({
  page: Yup.string().required('Обязательное поле.'),
  title: Yup.string().required('Обязательное поле.'),
});

type TextsEditFormProps = {
  text: Text;
};

function TextsEditForm({
  text,
}: TextsEditFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const initialValues: TextUpdateDTO = {
    id: text.id,
    slug: text.slug,
    page: text.page,
    title: text.title,
    content: text.content || '',
  };

  const onSubmit = async (
    values: TextUpdateDTO,
    helpers: FormikHelpers<TextUpdateDTO>,
  ) => {
    helpers.setSubmitting(true);

    await dispatch(updateTextAction({
      dto: values,
      onSuccess: () => {
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
      {({ isSubmitting, resetForm }) => (
        <Form className="flex flex-col gap-2 px-6 py-3 bg-white border rounded-md">
          <div className="grid grid-cols-4 gap-4">
            <TextField className="col-span-2" name="name" label="Имя" required />
          </div>

          <EditorField name="title" label="Заголовок" required />
          <EditorField name="content" label="Описание" />

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
              Сохранить
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default TextsEditForm;

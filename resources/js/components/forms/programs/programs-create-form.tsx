import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import classNames from 'classnames';
import { PropsWithClassname } from '../../../types';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { ProgramStoreDTO } from '../../../dto/programs-dto';
import Button from '../../ui/button';
import Spinner from '../../ui/spinner';
import ContentField from '../../ui/fields/content-field';
import SelectField from '../../ui/fields/select-field';
import { fetchCategoriesAction } from '../../../store/categories-slice/categories-api-actions';
import { getCategories } from '@/store/categories-slice/categories-selector';
import TextField from '@/components/ui/fields/text-field';
import EditorField from '@/components/ui/fields/editor-field/editor-field';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Обязательное поле.'),
  category_id: Yup.number().required('Обязательное поле.'),
  description: Yup.string().required('Обязательное поле.'),
  info: Yup.string().required('Обязательное поле.'),
  price: Yup.number().typeError('Цена должна быть числом.').required('Обязательное поле.'),
});

export default function ProgramsCreateForm({
  className,
}: PropsWithClassname): JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategories);
  const initialValues: ProgramStoreDTO = {
    category_id: '',
    title: '',
    description: '',
    info: '',
    price: '',
  };

  const onSubmit = async (
    values: ProgramStoreDTO,
    helpers: FormikHelpers<ProgramStoreDTO>
  ) => {
    helpers.setSubmitting(true);
    console.log(values);

    // await dispatch(loginAction({
    //   dto: values,
    //   onValidationError: (error) => helpers.setErrors({ ...error.errors }),
    // }));

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
      {({ isSubmitting, setFieldValue }) => (
        <Form className={classNames(className, 'flex flex-col gap-4 py-4 px-6 rounded shadow bg-white')}>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <TextField name="title" label="Заголовок" />

            {categories &&
              <SelectField
                name="category_id"
                label="Категория"
                cleanable
                onClean={() => setFieldValue('category_id', '')}
                options={categories.map(({ id, title }) => ({ value: id, label: title }))}
              />}

            <TextField name="price" type="number" label="Цена" />
          </div>

          <ContentField name="description" label="Краткое описание" />

          <EditorField name="info" label="Подготовка" />

          <Button
            className={classNames('justify-center mt-4 ml-auto', isSubmitting && 'opacity-60')}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Spinner className="w-6 h-6 m-auto" /> : 'Войти'}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

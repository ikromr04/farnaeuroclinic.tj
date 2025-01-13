import React from 'react';
import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import classNames from 'classnames';
import { PropsWithClassname } from '../../../types';
import { useAppDispatch } from '../../../hooks';
import { ProgramStoreDTO } from '../../../dto/programs-dto';
import TextField from '../../ui/fields/text-field';
import Button from '../../ui/button';
import Spinner from '../../ui/spinner';
import ContentField from '../../ui/fields/content-field';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Обязательное поле.'),
  description: Yup.string().required('Обязательное поле.'),
});

export default function ProgramsCreateForm({
  className,
}: PropsWithClassname): JSX.Element {
  const dispatch = useAppDispatch();
  const initialValues: ProgramStoreDTO = {
    category_id: 0,
    title: '',
    description: '',
    info: '',
    price: 0,
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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={classNames(className, 'py-4 px-6 rounded shadow bg-white')}>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <TextField name="title" label="Заголовок" />
            <ContentField name="description" label="Краткое описание" />
          </div>

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

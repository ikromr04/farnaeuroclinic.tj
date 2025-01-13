import React from 'react';
import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import classNames from 'classnames';
import Button from '../ui/button';
import { useAppDispatch } from '../../hooks/index';
import { LoginCredentials } from '../../dto/auth-dto';
import { loginAction } from '../../store/auth-slice/auth-api-actions';
import Spinner from '../ui/spinner';
import TextField from '../ui/fields/text-field';
import PasswordField from '../ui/fields/password-field';
import { PropsWithClassname } from '../../types';

const validationSchema = Yup.object().shape({
  login: Yup.string().required('Введите Ваш логин.'),
  password: Yup.string().required('Введите Ваш пароль.'),
});

export default function LoginForm({
  className,
}: PropsWithClassname): JSX.Element {
  const dispatch = useAppDispatch();
  const initialValues: LoginCredentials = { login: '', password: '' };

  const onSubmit = async (
    values: LoginCredentials,
    helpers: FormikHelpers<LoginCredentials>
  ) => {
    helpers.setSubmitting(true);

    await dispatch(loginAction({
      dto: values,
      onValidationError: (error) => helpers.setErrors({ ...error.errors }),
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
        <Form className={classNames(className, 'flex flex-col gap-4')}>
          <TextField name="login" label="Логин" />

          <PasswordField name="password" label="Пароль" />

          <Button
            className={classNames('justify-center mt-2', isSubmitting && 'opacity-60')}
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

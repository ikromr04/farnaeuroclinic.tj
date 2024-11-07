import React from 'react';
import { LoginCredentials } from '@/dto/auth-dto';
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Input from '../ui/input';
import { useAppDispatch } from '@/hooks';
import { loginAction } from '@/store/auth-slice/auth-api-actions';
import Spinner from '../ui/spinner';

export default function LoginForm(): JSX.Element {
  const
    initialValues: LoginCredentials = {
      email: '',
      password: '',
    },
    validationSchema = Yup.object({
      email: Yup.string()
        .email('Неверный адрес электронной почты')
        .required('Требуется адрес электронной почты'),
      password: Yup.string()
        .min(8, 'Пароль должен содержать не менее 8 символов')
        .required('Требуется пароль'),
    }),
    dispatch = useAppDispatch(),

    onSubmit = (
      values: LoginCredentials,
      actions: FormikHelpers<LoginCredentials>
    ) => {
      dispatch(loginAction({
        dto: values,
        onError(error) {
          actions.setSubmitting(false);
          actions.setErrors({
            email: error.errors?.email?.[0],
            password: error.errors?.password?.[0],
          })
        },
      }))
    };;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="shadow-md rounded-2xl bg-white py-4 px-8 min-w-[440px] flex flex-col gap-4">
          <Input name="email" label="Логин" />

          <Input name="password" label="Пароль" type="password" />

          <button
            className="button bg-brand text-white font-semibold hover:shadow-none hover:opacity-80 mt-2"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Spinner className="w-5 h-5" /> : 'Войти'}
          </button>
        </Form>
      )}
    </Formik>
  );
}

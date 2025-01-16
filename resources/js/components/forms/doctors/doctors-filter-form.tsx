import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Form, Formik } from 'formik';
import classNames from 'classnames';
import { PropsWithClassname } from '../../../types';
import TextField from '../../ui/fields/text-field';
import { Icons } from '../../icons';
import Button from '../../ui/button';
import { inititalDoctorsFilter } from '@/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getCategories } from '@/store/categories-slice/categories-selector';
import { fetchCategoriesAction } from '@/store/categories-slice/categories-api-actions';
import { DoctorsFilter } from '@/types/doctors';

type DoctorsFilterFormProps = PropsWithClassname<{
  filter: DoctorsFilter;
  setFilter: Dispatch<SetStateAction<DoctorsFilter>>
}>;

export default function DoctorsFilterForm({
  className,
  filter,
  setFilter,
}: DoctorsFilterFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategories);

  useEffect(() => {
    if (!categories) dispatch(fetchCategoriesAction());
  }, [categories, dispatch]);

  const onSubmit = async (values: DoctorsFilter) => setFilter(values);

  return (
    <Formik
      initialValues={filter}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue, handleSubmit }) => (
        <Form className={classNames(className, 'flex flex-col gap-2')}>
          <div className="flex flex-col grow overflow-y-auto scrollbar-y gap-1">
            <TextField
              name="name.query"
              label="ФИО"
              cleanable
              onClean={() => {
                setFieldValue('name.query', '');
                handleSubmit();
              }}
              onInput={() => handleSubmit()}
              after={
                <button
                  className="flex items-center justify-center w-full h-full hover:bg-gray-200 transition-all duration-300 border-l"
                  type="button"
                  onClick={() => {
                    setFieldValue('name.visibility', !values.name.visibility);
                    handleSubmit();
                  }}
                >
                  {values.name.visibility ? <Icons.visibility width={20} /> : <Icons.visibilityOff width={20} />}
                </button>
              }
            />

            <TextField
              name="position.query"
              label="Позиция"
              cleanable
              onClean={() => {
                setFieldValue('position.query', '');
                handleSubmit();
              }}
              onInput={() => handleSubmit()}
              after={
                <button
                  className="flex items-center justify-center w-full h-full hover:bg-gray-200 transition-all duration-300 border-l"
                  type="button"
                  onClick={() => {
                    setFieldValue('position.visibility', !values.position.visibility);
                    handleSubmit();
                  }}
                >
                  {values.position.visibility ? <Icons.visibility width={20} /> : <Icons.visibilityOff width={20} />}
                </button>
              }
            />

            <TextField
              name="specialization.query"
              label="Специализация"
              cleanable
              onClean={() => {
                setFieldValue('specialization.query', '');
                handleSubmit();
              }}
              onInput={() => handleSubmit()}
              after={
                <button
                  className="flex items-center justify-center w-full h-full hover:bg-gray-200 transition-all duration-300 border-l"
                  type="button"
                  onClick={() => {
                    setFieldValue('specialization.visibility', !values.specialization.visibility);
                    handleSubmit();
                  }}
                >
                  {values.specialization.visibility ? <Icons.visibility width={20} /> : <Icons.visibilityOff width={20} />}
                </button>
              }
            />

            <TextField
              name="experience.query"
              label="Стаж работы"
              cleanable
              onClean={() => {
                setFieldValue('experience.query', '');
                handleSubmit();
              }}
              onInput={() => handleSubmit()}
              after={
                <button
                  className="flex items-center justify-center w-full h-full hover:bg-gray-200 transition-all duration-300 border-l"
                  type="button"
                  onClick={() => {
                    setFieldValue('experience.visibility', !values.experience.visibility);
                    handleSubmit();
                  }}
                >
                  {values.experience.visibility ? <Icons.visibility width={20} /> : <Icons.visibilityOff width={20} />}
                </button>
              }
            />
          </div>

          <Button
            className="justify-center min-h-8"
            onClick={() => setFilter(inititalDoctorsFilter)}
            type="reset"
          >
            Сбросить
          </Button>
        </Form>
      )}
    </Formik>
  );
}

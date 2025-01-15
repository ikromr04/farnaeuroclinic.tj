import React, { Dispatch, SetStateAction } from 'react';
import { Form, Formik } from 'formik';
import classNames from 'classnames';
import { PropsWithClassname } from '../../../types';
import TextField from '../../ui/fields/text-field';
import { Icons } from '../../icons';
import Button from '../../ui/button';
import { initialCategoriesFilter } from '@/const';
import { CategoriesFilter } from '@/types/categories';

type CategoriesFilterFormProps = PropsWithClassname<{
  filter: CategoriesFilter;
  setFilter: Dispatch<SetStateAction<CategoriesFilter>>
}>;

export default function CategoriesFilterForm({
  className,
  filter,
  setFilter,
}: CategoriesFilterFormProps): JSX.Element {
  const onSubmit = async (values: CategoriesFilter) => setFilter(values);

  return (
    <Formik
      initialValues={filter}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue, handleSubmit }) => (
        <Form className={classNames(className, 'flex flex-col gap-2')}>
          <div className="flex flex-col grow overflow-y-auto scrollbar-y gap-1">
            <TextField
              name="title.query"
              label="Заголовок"
              cleanable
              onClean={() => {
                setFieldValue('title.query', '');
                handleSubmit();
              }}
              onInput={() => handleSubmit()}
              after={
                <button
                  className="flex items-center justify-center w-full h-full hover:bg-gray-200 transition-all duration-300 border-l"
                  type="button"
                  onClick={() => {
                    setFieldValue('title.visibility', !values.title.visibility);
                    handleSubmit();
                  }}
                >
                  {values.title.visibility ? <Icons.visibility width={20} /> : <Icons.visibilityOff width={20} />}
                </button>
              }
            />

            <TextField
              name="description.query"
              label="Описание"
              cleanable
              onClean={() => {
                setFieldValue('description.query', '');
                handleSubmit();
              }}
              onInput={() => handleSubmit()}
              after={
                <button
                  className="flex items-center justify-center w-full h-full hover:bg-gray-200 transition-all duration-300 border-l"
                  type="button"
                  onClick={() => {
                    setFieldValue('description.visibility', !values.description.visibility);
                    handleSubmit();
                  }}
                >
                  {values.description.visibility ? <Icons.visibility width={20} /> : <Icons.visibilityOff width={20} />}
                </button>
              }
            />
          </div>

          <Button
            className="justify-center min-h-8"
            onClick={() => setFilter(initialCategoriesFilter)}
            type="reset"
          >
            Сбросить
          </Button>
        </Form>
      )}
    </Formik>
  );
}

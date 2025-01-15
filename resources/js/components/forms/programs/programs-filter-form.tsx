import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Form, Formik } from 'formik';
import classNames from 'classnames';
import { PropsWithClassname } from '../../../types';
import TextField from '../../ui/fields/text-field';
import { Icons } from '../../icons';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { resetUsersFilterAction } from '../../../store/app-slice/app-slice';
import SelectField from '../../ui/fields/select-field';
import Button from '../../ui/button';
import { ProgramsFilter } from '@/types/programs';
import { getCategories } from '@/store/categories-slice/categories-selector';
import { fetchCategoriesAction } from '@/store/categories-slice/categories-api-actions';
import { initialProgramsFilter } from '@/const';

type ProgramsFilterFormProps = PropsWithClassname<{
  filter: ProgramsFilter;
  setFilter: Dispatch<SetStateAction<ProgramsFilter>>
}>;

export default function ProgramsFilterForm({
  className,
  filter,
  setFilter,
}: ProgramsFilterFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategories);

  useEffect(() => {
    if (!categories) dispatch(fetchCategoriesAction());
  }, [categories, dispatch]);

  const onSubmit = async (values: ProgramsFilter) => setFilter(values);

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

            {categories &&
              <SelectField
                name="category.query"
                label="Категория"
                cleanable
                onClean={() => {
                  setFieldValue('category.query', '');
                  handleSubmit();
                }}
                onChange={() => handleSubmit()}
                after={
                  <button
                    className="flex items-center justify-center w-full h-full hover:bg-gray-200 transition-all duration-300 border-l"
                    type="button"
                    onClick={() => {
                      setFieldValue('category.visibility', !values.category.visibility);
                      handleSubmit();
                    }}
                  >
                    {values.category.visibility ? <Icons.visibility width={20} /> : <Icons.visibilityOff width={20} />}
                  </button>
                }
                options={categories.map((category) => ({ value: category.id, label: category.title }))}
              />}

            <TextField
              name="price.query"
              type="number"
              label="Цена"
              cleanable
              onClean={() => {
                setFieldValue('price.query', '');
                handleSubmit();
              }}
              onInput={() => handleSubmit()}
              after={
                <button
                  className="flex items-center justify-center w-full h-full hover:bg-gray-200 transition-all duration-300 border-l"
                  type="button"
                  onClick={() => {
                    setFieldValue('price.visibility', !values.price.visibility);
                    handleSubmit();
                  }}
                >
                  {values.price.visibility ? <Icons.visibility width={20} /> : <Icons.visibilityOff width={20} />}
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
            onClick={() => setFilter(initialProgramsFilter)}
            type="reset"
          >
            Сбросить
          </Button>
        </Form>
      )}
    </Formik>
  );
}

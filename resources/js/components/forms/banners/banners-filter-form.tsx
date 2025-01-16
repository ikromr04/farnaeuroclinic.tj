import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Form, Formik } from 'formik';
import classNames from 'classnames';
import { PropsWithClassname } from '../../../types';
import TextField from '../../ui/fields/text-field';
import { Icons } from '../../icons';
import Button from '../../ui/button';
import { initialBannersFilter } from '@/const';
import { BannersFilter } from '@/types/banners';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getCategories } from '@/store/categories-slice/categories-selector';
import { fetchCategoriesAction } from '@/store/categories-slice/categories-api-actions';
import SelectField from '@/components/ui/fields/select-field';

type BannersFilterFormProps = PropsWithClassname<{
  filter: BannersFilter;
  setFilter: Dispatch<SetStateAction<BannersFilter>>
}>;

export default function BannersFilterForm({
  className,
  filter,
  setFilter,
}: BannersFilterFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const categories = useAppSelector(getCategories);

  useEffect(() => {
    if (!categories) dispatch(fetchCategoriesAction());
  }, [categories, dispatch]);

  const onSubmit = async (values: BannersFilter) => setFilter(values);

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

            <TextField
              name="link.query"
              label="Ссылка подробнее"
              cleanable
              onClean={() => {
                setFieldValue('link.query', '');
                handleSubmit();
              }}
              onInput={() => handleSubmit()}
              after={
                <button
                  className="flex items-center justify-center w-full h-full hover:bg-gray-200 transition-all duration-300 border-l"
                  type="button"
                  onClick={() => {
                    setFieldValue('link.visibility', !values.link.visibility);
                    handleSubmit();
                  }}
                >
                  {values.link.visibility ? <Icons.visibility width={20} /> : <Icons.visibilityOff width={20} />}
                </button>
              }
            />
          </div>

          <Button
            className="justify-center min-h-8"
            onClick={() => setFilter(initialBannersFilter)}
            type="reset"
          >
            Сбросить
          </Button>
        </Form>
      )}
    </Formik>
  );
}

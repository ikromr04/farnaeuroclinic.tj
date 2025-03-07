import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { FieldArray, Form, Formik, FormikHelpers } from 'formik';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { ProgramStoreDTO } from '../../../dto/programs-dto';
import Button from '../../ui/button';
import SelectField from '../../ui/fields/select-field';
import { fetchCategoriesAction } from '../../../store/categories-slice/categories-api-actions';
import { getCategories } from '@/store/categories-slice/categories-selector';
import TextField from '@/components/ui/fields/text-field';
import EditorField from '@/components/ui/fields/editor-field/editor-field';
import { storeProgramAction } from '@/store/programs-slice/programs-api-actions';
import { addProgramAction } from '@/store/programs-slice/programs-slice';
import { Icons } from '@/components/icons';
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Обязательное поле.'),
  category_id: Yup.number().required('Обязательное поле.'),
  description: Yup.string().required('Обязательное поле.'),
  info: Yup.string().required('Обязательное поле.'),
  price: Yup.number().typeError('Цена должна быть числом.').required('Обязательное поле.'),
  blocks: Yup.array().of(
    Yup.object({
      title: Yup.string().required('Обязательное поле.'),
      short_title: Yup.string().required('Обязательное поле.'),
      content: Yup.string().required('Обязательное поле.'),
    })
  ),
  article: Yup.object({
    info: Yup.string().required('Обязательное поле.'),
    blocks: Yup.array().of(
      Yup.object({
        title: Yup.string().required('Обязательное поле.'),
        short_title: Yup.string().required('Обязательное поле.'),
        content: Yup.string().required('Обязательное поле.'),
      })
    ),
  }),
});

function ProgramsCreateForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategories);
  const initialValues: ProgramStoreDTO = {
    category_id: '',
    title: '',
    description: '',
    info: '',
    price: '',
    article: {
      info: '',
    },
  };

  const onSubmit = async (
    values: ProgramStoreDTO,
    helpers: FormikHelpers<ProgramStoreDTO>
  ) => {
    helpers.setSubmitting(true);

    await dispatch(storeProgramAction({
      dto: values,
      onSuccess: (createdProgram) => {
        dispatch(addProgramAction(createdProgram));
        helpers.resetForm();
        toast.success('Новая программа успешно добавлена.');
      },
      onValidationError: (error) => helpers.setErrors({ ...error.errors }),
      onFail: (message) => toast.error(message),
    }));

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
      {({ values, isSubmitting, setFieldValue, resetForm }) => (
        <Form className="flex flex-col gap-6">
          <fieldset>
            <legend className="text-md text-gray-900 font-semibold">
              Программа
            </legend>

            <div className="bg-white rounded-md border p-6 flex flex-col gap-2">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <TextField name="title" label="Заголовок" required />

                {categories &&
                  <SelectField
                    name="category_id"
                    label="Категория"
                    cleanable
                    onClean={() => setFieldValue('category_id', '')}
                    options={categories.map(({ id, title }) => ({ value: id, label: title }))}
                    required
                  />}

                <TextField name="price" type="number" label="Цена" required />
              </div>

              <EditorField name="description" label="Краткое описание" required />

              <EditorField name="info" label="Содержание" required />
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-md text-gray-900 font-semibold">
              Блоки программы
            </legend>

            <div className="bg-white rounded-md border p-6 flex flex-col gap-2">
              <FieldArray name="blocks">
                {({ push, remove }) => (
                  <div className="flex flex-col gap-4">
                    {values.blocks?.map((_, index) => (
                      <fieldset key={index}>
                        <legend className="font-semibold">Блок {index + 1}</legend>

                        <div className="flex flex-col gap-2">
                          <TextField name={`blocks[${index}.title]`} label="Заголовок" required />
                          <TextField name={`blocks[${index}.short_title]`} label="Краткий заголовок" required />
                          <EditorField name={`blocks[${index}.content]`} label="Содержание" required />
                        </div>
                        <Button className="ml-auto mt-3" variant="error" onClick={() => remove(index)}>
                          Удалить блок
                        </Button>
                      </fieldset>
                    ))}
                    <button
                      className="flex items-center justify-center gap-4 p-2 bg-gray-50 text-gray-500 transition-colors duration-300 hover:bg-gray-100 w-full border border-dashed rounded-md"
                      type="button"
                      onClick={() => push({ title: '', short_title: '', content: '' })}
                    >
                      <Icons.add width={14} />
                      Добавить блок
                    </button>
                  </div>
                )}
              </FieldArray>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-md text-gray-900 font-semibold">
              Статья программы
            </legend>

            <div className="bg-white rounded-md border p-6 flex flex-col gap-2">
              <EditorField className="mb-4" name={`article.info`} label="Содержание статьи" />

              <FieldArray name="article.blocks">
                {({ push, remove }) => (
                  <div className="flex flex-col gap-4">
                    {values.article?.blocks?.map((_, index) => (
                      <fieldset key={index}>
                        <legend className="font-semibold">Блок статьи {index + 1}</legend>

                        <div className="flex flex-col gap-2">
                          <TextField name={`article.blocks[${index}.title]`} label="Заголовок" required />
                          <TextField name={`article.blocks[${index}.short_title]`} label="Краткий заголовок" required />
                          <EditorField name={`article.blocks[${index}.content]`} label="Содержание" required />
                        </div>
                        <Button className="ml-auto mt-3" variant="error" onClick={() => remove(index)}>
                          Удалить блок
                        </Button>
                      </fieldset>
                    ))}
                    <button
                      className="flex items-center justify-center gap-4 p-2 bg-gray-50 text-gray-500 transition-colors duration-300 hover:bg-gray-100 w-full border border-dashed rounded-md"
                      type="button"
                      onClick={() => push({ title: '', short_title: '', content: '' })}
                    >
                      <Icons.add width={14} />
                      Добавить блок
                    </button>
                  </div>
                )}
              </FieldArray>
            </div>
          </fieldset>

          <div className="flex justify-end mt-4 gap-2 p-4 rounded-tl-md ml-auto sticky bottom-0 bg-gray-100">
            <Button
              type="reset"
              disabled={isSubmitting}
              variant="warn"
              onClick={() => resetForm()}
            >
              Сбросить
            </Button>
            <Button
              className={classNames('justify-center', isSubmitting && 'opacity-60')}
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
              variant="success"
            >
              Добавить
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ProgramsCreateForm;

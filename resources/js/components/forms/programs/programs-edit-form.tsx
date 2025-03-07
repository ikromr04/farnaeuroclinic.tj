import React, { Dispatch, SetStateAction, useEffect } from 'react';
import * as Yup from 'yup';
import { FieldArray, Form, Formik, FormikHelpers } from 'formik';
import classNames from 'classnames';
import { getCategories } from '@/store/categories-slice/categories-selector';
import TextField from '@/components/ui/fields/text-field';
import EditorField from '@/components/ui/fields/editor-field/editor-field';
import { updateProgramAction } from '@/store/programs-slice/programs-api-actions';
import { Icons } from '@/components/icons';
import { toast } from 'react-toastify';
import { Program } from '@/types/programs';
import { fetchCategoriesAction } from '@/store/categories-slice/categories-api-actions';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { ProgramUpdateDTO } from '@/dto/programs-dto';
import SelectField from '@/components/ui/fields/select-field';
import ContentField from '@/components/ui/fields/content-field';
import Button from '@/components/ui/button';
import Spinner from '@/components/ui/spinner';

const validationSchema = Yup.object().shape({
  id: Yup.number().required('Обязательное поле.'),
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

type ProgramsEditFormProps = {
  program: Program;
  setProgram: Dispatch<SetStateAction<Program | null>>;
};

function ProgramsEditForm({
  program,
  setProgram,
}: ProgramsEditFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategories);
  const initialValues: ProgramUpdateDTO = {
    id: program.id,
    category_id: program.category.id,
    title: program.title,
    description: program.description,
    info: program.info,
    price: program.price,
    blocks: program.blocks?.map((block) => ({
      id: block.id,
      title: block.title,
      short_title: block.shortTitle,
      content: block.content,
    })),
    article: {
      id: program.article.id,
      info: program.article.info,
      blocks: program.article.blocks?.map((block) => ({
        id: block.id,
        title: block.title,
        short_title: block.shortTitle,
        content: block.content,
      }))
    },
  };

  const onSubmit = async (
    values: ProgramUpdateDTO,
    helpers: FormikHelpers<ProgramUpdateDTO>
  ) => {
    helpers.setSubmitting(true);

    await dispatch(updateProgramAction({
      dto: values,
      onSuccess: (updatedProgram) => {
        setProgram(updatedProgram);
        toast.success('Программа успешно обновлена.');
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
        <Form className="flex flex-col gap-4">
          <fieldset>
            <legend className="title ml-2 !text-lg">Программа</legend>

            <div className="flex flex-col gap-4 rounded bg-white shadow p-6">
              <div className="grid grid-cols-2 gap-2">
                {categories &&
                  <SelectField
                    name="category_id"
                    label="Категория"
                    cleanable
                    onClean={() => setFieldValue('category_id', '')}
                    options={categories.map(({ id, title }) => ({ value: id, label: title }))}
                  />}

                <TextField name="price" type="number" label="Цена" required />
              </div>

              <EditorField name="title" label="Заголовок" />

              <ContentField name="description" label="Краткое описание" />

              <EditorField name="info" label="Содержание" />
            </div>
          </fieldset>

          <div>
            <h2 className="text-md text-gray-900 font-semibold mb-3">Блоки программы</h2>

            <FieldArray name="blocks">
              {({ push, remove }) => (
                <div className="flex flex-col gap-4">
                  {values.blocks?.map((_, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-end">
                        <h3 className="font-semibold">Блок {index + 1}</h3>
                      </div>
                      <TextField name={`blocks[${index}.title]`} label="Заголовок" />
                      <TextField name={`blocks[${index}.short_title]`} label="Краткий заголовок" />
                      <EditorField name={`blocks[${index}.content]`} label="Содержание" />
                      <Button className="ml-auto my-2" variant="error" onClick={() => remove(index)}>
                        Удалить блок
                      </Button>
                    </div>
                  ))}
                  <button
                    className="flex items-center justify-center gap-4 p-2 bg-gray-50 text-gray-500 transition-colors duration-300 hover:bg-gray-100 w-full border border-dashed rounded-md"
                    type="button"
                    onClick={() => push({ id: 0, title: '', short_title: '', content: '' })}
                  >
                    <Icons.add width={14} />
                    Добавить блок
                  </button>
                </div>
              )}
            </FieldArray>
          </div>

          <div>
            <h2 className="text-md text-gray-900 font-semibold mb-3">Статья программы</h2>

            <EditorField className="mb-4" name={`article.info`} label="Содержание статьи" />

            <FieldArray name="article.blocks">
              {({ push, remove }) => (
                <div className="flex flex-col gap-4">
                  {values.article?.blocks?.map((_, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-end">
                        <h3 className="font-semibold">Блок статьи {index + 1}</h3>
                      </div>
                      <TextField name={`article.blocks[${index}.title]`} label="Заголовок" />
                      <TextField name={`article.blocks[${index}.short_title]`} label="Краткий заголовок" />
                      <EditorField name={`article.blocks[${index}.content]`} label="Содержание" />
                      <Button className="ml-auto my-2" variant="error" onClick={() => remove(index)}>
                        Удалить блок
                      </Button>
                    </div>
                  ))}
                  <button
                    className="flex items-center justify-center gap-4 p-2 bg-gray-50 text-gray-500 transition-colors duration-300 hover:bg-gray-100 w-full border border-dashed rounded-md"
                    type="button"
                    onClick={() => push({ id: 0, title: '', short_title: '', content: '' })}
                  >
                    <Icons.add width={14} />
                    Добавить блок
                  </button>
                </div>
              )}
            </FieldArray>
          </div>

          <div className="flex justify-end mt-4 gap-2">
            <Button
              type="reset"
              disabled={isSubmitting}
              variant="warn"
              onClick={() => resetForm()}
            >
              Просмотреть на сайте
            </Button>
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
              Сохранить
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ProgramsEditForm;

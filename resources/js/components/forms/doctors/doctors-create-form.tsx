import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { FieldArray, Form, Formik, FormikHelpers } from 'formik';
import classNames from 'classnames';
import { PropsWithClassname } from '../../../types';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import Button from '../../ui/button';
import Spinner from '../../ui/spinner';
import { fetchCategoriesAction } from '../../../store/categories-slice/categories-api-actions';
import { getCategories } from '@/store/categories-slice/categories-selector';
import TextField from '@/components/ui/fields/text-field';
import EditorField from '@/components/ui/fields/editor-field/editor-field';
import { Icons } from '@/components/icons';
import { toast } from 'react-toastify';
import { DoctorStoreDTO } from '@/dto/doctors-dto';
import { storeDoctorAction } from '@/store/doctors-slice/doctors-api-actions';
import { addDoctorAction } from '@/store/doctors-slice/doctors-slice';
import ImageField from '@/components/ui/fields/image-field';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Обязательное поле.'),
  avatar: Yup.mixed()
    .required('Обязательное поле.')
    .test(
      'fileSize',
      'Размер файла слишком большой (макс. 2MB)',
      (value) => !value || (value instanceof File && value.size <= 2 * 1024 * 1024)
    )
    .test(
      'fileType',
      'Неподдерживаемый формат файла. Разрешены только JPEG, JPG или PNG.',
      (value) =>
        !value ||
        (value instanceof File &&
          ['image/jpeg', 'image/jpg', 'image/png'].includes(value.type))
    ),
  position: Yup.string().required('Обязательное поле.'),
  specialization: Yup.string().required('Обязательное поле.'),
  experience: Yup.string().required('Обязательное поле.'),
  blocks: Yup.array().of(
    Yup.object({
      title: Yup.string().required('Обязательное поле.'),
      short_title: Yup.string().required('Обязательное поле.'),
      content: Yup.string().required('Обязательное поле.'),
    })
  ),
});

export default function DoctorsCreateForm({
  className,
}: PropsWithClassname): JSX.Element {
  const dispatch = useAppDispatch();
  const [key, setKey] = useState(1);
  const categories = useAppSelector(getCategories);
  const initialValues: DoctorStoreDTO = {
    name: '',
    avatar: '',
    position: '',
    specialization: '',
    experience: '',
    blocks: [],
  };

  const onSubmit = async (
    values: DoctorStoreDTO,
    helpers: FormikHelpers<DoctorStoreDTO>
  ) => {
    helpers.setSubmitting(true);

    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('avatar', values.avatar);
    formData.append('position', values.position);
    formData.append('specialization', values.specialization);
    formData.append('experience', values.experience);
    values.blocks && formData.append('blocks', JSON.stringify(values.blocks));

    await dispatch(storeDoctorAction({
      dto: formData,
      onSuccess: (createdDoctor) => {
        dispatch(addDoctorAction(createdDoctor));
        helpers.resetForm();
        toast.success('Доктор успешно добавлен.');
        setKey((prevKey) => prevKey + 1);
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
      {({ values, isSubmitting, resetForm }) => (
        <Form className={classNames(className, 'flex flex-col gap-4 py-4 px-6 rounded shadow bg-white')}>
          <div>
            <h2 className="text-md text-gray-900 font-semibold mb-3">Доктор</h2>

            <ImageField
              key={key.toString()}
              className="mb-4"
              name="avatar"
              label="Аватар"
              accept=".jpeg, .jpg, .png"
              imgClass={classNames(
                'w-[240px] h-[360px]',
                !values.avatar && '!object-contain',
              )}
            />

            <div className="grid gap-4 md:grid-cols-2">
              <TextField name="name" label="ФИО" />
              <TextField name="position" label="Позиция" />
              <TextField name="specialization" label="Специализация" />
              <TextField name="experience" label="Стаж работы" />
            </div>
          </div>

          <div>
            <h2 className="text-md text-gray-900 font-semibold mb-3">Блоки</h2>

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
                    onClick={() => push({ title: '', short_title: '', content: '' })}
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
              onClick={() => {
                resetForm();
                setKey((prevKey) => prevKey + 1);
              }}
            >
              Сбросить
            </Button>
            <Button
              className={classNames('justify-center', isSubmitting && 'opacity-60')}
              type="submit"
              disabled={isSubmitting}
              variant="success"
            >
              {isSubmitting ? <Spinner className="w-6 h-6 m-auto" /> : 'Добавить'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

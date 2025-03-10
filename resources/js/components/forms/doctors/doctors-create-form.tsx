import React, { useState } from 'react';
import * as Yup from 'yup';
import { FieldArray, Form, Formik, FormikHelpers } from 'formik';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import Button from '../../ui/button';
import Spinner from '../../ui/spinner';
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
  avatar: Yup.mixed().required('Обязательное поле.'),
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

export default function DoctorsCreateForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [key, setKey] = useState(1);
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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, isSubmitting, resetForm }) => (
        <Form className="flex flex-col gap-6">
          <fieldset>
            <legend className="text-md text-gray-900 font-semibold">
              Доктор
            </legend>

            <div className="bg-white rounded-md border p-6 flex flex-col gap-2">
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
                required
              />

              <div className="grid gap-4 md:grid-cols-2">
                <TextField name="name" label="ФИО" required />
                <TextField name="position" label="Позиция" required />
                <TextField name="specialization" label="Специализация" required />
                <TextField name="experience" label="Стаж работы" required />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-md text-gray-900 font-semibold">
              Блоки
            </legend>

            <div className="bg-white rounded-md border p-6 flex flex-col gap-2">
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
          </fieldset>

          <div className="flex justify-end mt-4 gap-2 p-4 rounded-tl-md ml-auto sticky bottom-0 bg-gray-100">
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

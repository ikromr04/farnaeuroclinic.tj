import Button from '@/components/ui/button';
import { useAppDispatch } from '@/hooks';
import { deleteProgramAction } from '@/store/programs-slice/programs-api-actions';
import { Form, Formik, FormikHelpers } from 'formik';
import React, { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';

type Modal = {
  isOpen: boolean;
  id: number;
};

type ProgramsDeleteFormProps = {
  modal: Modal;
  setModal: Dispatch<SetStateAction<Modal>>
}

export default function ProgramsDeleteForm({
  modal,
  setModal,
}: ProgramsDeleteFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const onSubmit = async (
    values: {},
    helpers: FormikHelpers<{}>
  ) => {
    helpers.setSubmitting(true);

    await dispatch(deleteProgramAction({
      id: modal.id,
      onSuccess: (message) => {
        setModal({ isOpen: false, id: 0 });
        toast.success(message);
      },
      onFail: (message) => {
        setModal({ isOpen: false, id: 0 })
        toast.error(message);
      },
    }));

    helpers.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{}}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4">
          <p>
            Вы уверены что хотите удалить эту программу и все блоки и статьи связанные с этой программой?
          </p>

          <div className="flex justify-end gap-1">
            <Button
              type="reset"
              variant="success"
              onClick={() => setModal({ isOpen: false, id: 0 })}
            >
              Отмена
            </Button>
            <Button
              variant="error"
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              Удалить
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

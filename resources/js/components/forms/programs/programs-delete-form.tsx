import Button from '@/components/ui/button';
import Spinner from '@/components/ui/spinner';
import { useAppDispatch } from '@/hooks';
import { deleteProgramAction } from '@/store/programs-slice/programs-api-actions';
import classNames from 'classnames';
import { Form, Formik, FormikHelpers } from 'formik';
import React, { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';

type ProgramsDeleteFormProps = {
  modal: {
    isOpen: boolean;
    deleteId: number;
    title: string;
  };
  setModal: Dispatch<SetStateAction<{
    isOpen: boolean;
    deleteId: number;
    title: string;
  }>>
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
      id: modal.deleteId,
      onSuccess: (message) => {
        setModal({ isOpen: false, deleteId: 0, title: '' });
        toast.success(message);
      },
      onFail: (message) => {
        setModal({ isOpen: false, deleteId: 0, title: '' })
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
            Вы уверены что хотите удалить '{modal.title}' и все блоки и статьи связанные с этой программой?
          </p>

          <div className="flex justify-end gap-1">
            <Button
              type="reset"
              variant="success"
              onClick={() => setModal({ isOpen: false, deleteId: 0, title: '' })}
            >
              Отмена
            </Button>
            <Button
              className={classNames('justify-center', isSubmitting && 'opacity-60')}
              variant="error"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Spinner className="w-6 h-6 m-auto" /> : 'Удалить'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

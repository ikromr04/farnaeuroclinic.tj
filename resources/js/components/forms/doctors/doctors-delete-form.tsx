import Button from '@/components/ui/button';
import Spinner from '@/components/ui/spinner';
import { useAppDispatch } from '@/hooks';
import { deleteCategoryAction } from '@/store/categories-slice/categories-api-actions';
import { deleteDoctorAction } from '@/store/doctors-slice/doctors-api-actions';
import classNames from 'classnames';
import { Form, Formik, FormikHelpers } from 'formik';
import React, { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';

type Modal = {
  isOpen: boolean;
  id: number;
};

type CategoriesDeleteFormProps = {
  modal: Modal;
  setModal: Dispatch<SetStateAction<Modal>>
}

export default function DoctorsDeleteForm({
  modal,
  setModal,
}: CategoriesDeleteFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const onSubmit = async (
    values: {},
    helpers: FormikHelpers<{}>
  ) => {
    helpers.setSubmitting(true);

    await dispatch(deleteDoctorAction({
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
            Вы уверены что хотите удалить этого доктора?
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

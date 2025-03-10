import React, { useEffect, useState } from 'react';
import PageLayout from '../../layouts/page-layout';
import { Link, useParams } from 'react-router-dom';
import { Icons } from '@/components/icons';
import { AppRoute } from '@/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getDoctors } from '@/store/doctors-slice/doctors-selector';
import { Doctor } from '@/types/doctors';
import { fetchDoctorByIdAction } from '@/store/doctors-slice/doctors-api-actions';
import Spinner from '@/components/ui/spinner';
import DoctorsEditForm from '@/components/forms/doctors/doctors-edit-form';

export default function DoctorsEditPage(): JSX.Element {
  const params = useParams();
  const doctors = useAppSelector(getDoctors);
  const [doctor, setDoctor] = useState<Doctor | null>(doctors?.find(({ id }) => id === +(params.id || 0)) || null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!doctor && params.id) dispatch(fetchDoctorByIdAction({
      id: +params.id,
      onSuccess: (doctor) => setDoctor(doctor),
    }));
  }, [doctor, params.id]);

  return (
    <PageLayout>
      <main className="mx-4">
        <h1 className="title mt-4 mb-2">
          Редактирование доктора
        </h1>

        <ul className="flex items-center gap-1 mb-4 leading-none">
          <li className="flex items-center gap-1">
            <Link className="transition-all duration-300 hover:text-brand" to={AppRoute.Dashboard.Doctors.Index}>
              Программы
            </Link>
            <Icons.chevronRight width={6} />
          </li>
          <li className="font-medium text-[15px]">
            {doctor?.name}
          </li>
        </ul>

        {doctor && <DoctorsEditForm doctor={doctor} setDoctor={setDoctor} />}
      </main>
    </PageLayout>
  );
}

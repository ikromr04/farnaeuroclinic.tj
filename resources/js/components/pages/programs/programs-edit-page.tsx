import React, { useEffect, useState } from 'react';
import PageLayout from '../../layouts/page-layout';
import { Link, useParams } from 'react-router-dom';
import { Icons } from '@/components/icons';
import { AppRoute } from '@/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getPrograms } from '@/store/programs-slice/programs-selector';
import { fetchProgramByIdAction } from '@/store/programs-slice/programs-api-actions';
import { Program } from '@/types/programs';
import ProgramsEditForm from '@/components/forms/programs/programs-edit-form';

export default function ProgramsEditPage(): JSX.Element {
  const params = useParams();
  const programs = useAppSelector(getPrograms);
  const [program, setProgram] = useState<Program | null>(programs?.find(({ id }) => id === +(params.id || 0)) || null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!program && params.id) dispatch(fetchProgramByIdAction({
      id: +params.id,
      onSuccess: (program) => setProgram(program),
    }));
  }, [program, params.id]);

  return (
    <PageLayout>
      <main className="mx-4">
        <h1 className="title mt-4 mb-2">
          Редактирование программы
        </h1>

        <ul className="flex items-center gap-1 mb-4 leading-none">
          <li className="flex items-center gap-1">
            <Link className="transition-all duration-300 hover:text-brand" to={AppRoute.Dashboard.Programs.Index}>
              Программы
            </Link>
            <Icons.chevronRight width={6} />
          </li>
          <li className="font-medium text-[15px]">
            {program?.title}
          </li>
        </ul>

        {program && <ProgramsEditForm program={program} setProgram={setProgram} />}
      </main>
    </PageLayout>
  );
}

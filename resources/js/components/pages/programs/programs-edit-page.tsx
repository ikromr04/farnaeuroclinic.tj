import React, { useEffect, useState } from 'react';
import PageLayout from '../../layouts/page-layout';
import { Link, useParams } from 'react-router-dom';
import { Icons } from '@/components/icons';
import { AppRoute } from '@/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getPrograms } from '@/store/programs-slice/programs-selector';
import { fetchProgramByIdAction } from '@/store/programs-slice/programs-api-actions';
import { Program } from '@/types/programs';
import Spinner from '@/components/ui/spinner';
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
      <main className="relative flex flex-col h-full transition-all duration-300 overflow-scroll scrollbar-y">
        <h1 className="relative flex items-end mb-1 min-h-8 mr-auto title overflow-scroll no-scrollbar whitespace-nowrap pr-6">
          Добавление программы
        </h1>

        <ul className="flex items-center gap-1 mb-4 leading-none">
          <li className="flex items-center gap-1">
            <Link className="transition-all duration-300 hover:text-brand" to={AppRoute.Dashboard.Programs.Index}>
              Справочник программ
            </Link>
            <Icons.chevronRight width={6} />
          </li>
          <li className="font-medium text-[15px]">
            {program?.title}
          </li>
        </ul>

        {!program
          ? <Spinner className="w-6 h-6" />
          : <ProgramsEditForm program={program} setProgram={setProgram} />}
      </main>
    </PageLayout>
  );
}

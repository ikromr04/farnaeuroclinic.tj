import React from 'react';
import PageLayout from '../../layouts/page-layout';
import ProgramsCreateForm from '../../forms/programs/programs-create-form';

export default function ProgramsCreatePage(): JSX.Element {
  return (
    <PageLayout>
      <main>
        <h1 className="relative flex mr-auto title overflow-scroll no-scrollbar whitespace-nowrap pr-6">
          Добавление программы
        </h1>

        <ProgramsCreateForm />
      </main>
    </PageLayout>
  );
}

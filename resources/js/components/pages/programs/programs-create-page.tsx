import React from 'react';
import PageLayout from '../../layouts/page-layout';
import ProgramsCreateForm from '../../forms/programs/programs-create-form';

export default function ProgramsCreatePage(): JSX.Element {
  return (
    <PageLayout>
      <main className="relative flex flex-col h-full transition-all duration-300 overflow-scroll scrollbar-y">
        <h1 className="relative flex items-end mb-3 min-h-8 mr-auto title overflow-scroll no-scrollbar whitespace-nowrap pr-6">
          Добавление программы
        </h1>

        <ProgramsCreateForm />
      </main>
    </PageLayout>
  );
}

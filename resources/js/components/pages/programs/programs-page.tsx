import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import PageLayout from '../../layouts/page-layout';
import Button from '../../ui/button';
import { AppRoute, initialProgramsFilter } from '../../../const';
import { Icons } from '../../icons';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchProgramsAction } from '../../../store/programs-slice/programs-api-actions';
import Spinner from '../../ui/spinner';
import { getPrograms } from '../../../store/programs-slice/programs-selector';
import ProgramsTable from '../../blocks/programs-table';
import classNames from 'classnames';
import ProgramsFilterForm from '@/components/forms/programs/programs-filter-form';
import { ProgramsFilter } from '@/types/programs';
import { filterPrograms } from '@/utils';

export default function ProgramsPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const programs = useAppSelector(getPrograms);
  const [filter, setFilter] = useState<ProgramsFilter>(initialProgramsFilter);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (!programs) dispatch(fetchProgramsAction());
  }, [programs, dispatch]);

  return (
    <PageLayout>
      <main className={classNames(
        'relative flex flex-col h-full transition-all duration-300',
        isFilterOpen ? 'mr-[264px] md:mr-[272px]' : 'mr-0',
      )}>
        <header className="top flex flex-col gap-2 mb-2 md:mb-3 md:gap-3 min-w-64">
          <div className="flex items-end justify-between gap-2">
            <h1 className="relative flex mr-auto title overflow-scroll no-scrollbar whitespace-nowrap pr-6">
              Справочник программ
            </h1>
            <div className="relative z-10 min-w-6 h-full pointer-events-none -ml-7 bg-gradient-to-l from-gray-100 to-transparent"></div>

            <Button
              className="min-w-max"
              icon="add"
              variant="success"
              href={AppRoute.Dashboard.Programs.Create}
            >
              <span className="sr-only md:not-sr-only">Добавить программу</span>
            </Button>
          </div>

          <div className="flex bg-white rounded-md">
            <div className="relative flex grow">
              <div className="absolute left-[1px] top-[1px] rounded-r-[3px] transform w-[30px] h-[30px] flex justify-center items-center">
                <Icons.search width={14} />
              </div>
              <input
                className="flex grow bg-white min-w-0 w-4 border border-gray-200 rounded-l h-8 pl-8 pr-4 leading-none text-base focus:outline-none focus:border-primary"
                type="search"
                value={filter.searchKeyword}
                onInput={(evt: BaseSyntheticEvent) => setFilter((filter) => ({ ...filter, searchKeyword: evt.target.value.toLowerCase() }))}
                placeholder="Поиск по заголовке или описанию"
              />
              {filter.searchKeyword &&
                <button
                  className="absolute top-1/2 right-0 flex items-center justify-center h-full w-8 transform -translate-y-1/2"
                  type="button"
                  onClick={() => setFilter((filter) => ({ ...filter, searchKeyword: '' }))}
                >
                  <Icons.close width={12} />
                </button>}
            </div>

            <Button
              className="relative border border-l-0 rounded-l-none"
              type="button"
              icon="filter"
              variant="text"
              iconClassname={classNames(
                'transition-all duration-300 transform',
                isFilterOpen && '-scale-x-[1]'
              )}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <span className="sr-only md:not-sr-only">Фильтр</span>
            </Button>
          </div>
        </header>

        {programs
          ? <ProgramsTable
            className="h-[calc(100%-80px)] md:h-[calc(100%-88px)] min-w-64"
            programs={filterPrograms(programs, filter)}
            filter={filter}
          />
          : <Spinner className="w-8 h-8" />}

        <section className={classNames(
          'absolute top-0 left-[calc(100%+8px)] z-10 flex flex-col w-64 h-full py-2 p-4 rounded bg-white border transition-all duration-300 md:left-[calc(100%+16px)]',
          !isFilterOpen ? 'invisible opacity-0' : 'visible opacity-100',
        )}>
          <h2 className="flex items-center justify-between title mb-2">
            Фильтр

            <Button
              variant="text"
              onClick={() => setIsFilterOpen(false)}
            >
              <Icons.west className="transform scale-x-[-1]" width={16} />
            </Button>
          </h2>

          <ProgramsFilterForm
            className="grow max-h-[calc(100%-48px)]"
            filter={filter}
            setFilter={setFilter}
          />
        </section>
      </main>
    </PageLayout>
  )
}

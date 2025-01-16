import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import PageLayout from '../layouts/page-layout';
import classNames from 'classnames';
import Button from '../ui/button';
import { Icons } from '../icons';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { initialBannersFilter } from '@/const';
import Spinner from '../ui/spinner';
import Modal from '../ui/modal';
import CategoriesCreateForm from '../forms/categories/categories-create-form';
import { getBanners } from '@/store/banners-slice/banners-selector';
import { BannersFilter } from '@/types/banners';
import { fetchBannersAction } from '@/store/banners-slice/banners-api-actions';
import BannersFilterForm from '../forms/banners/banners-filter-form';
import BannersTable from '../blocks/banners-table';
import { filterBanners } from '@/utils/banners';
import BannersCreateForm from '../forms/banners/banners-create-form';

export default function BannersPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const banners = useAppSelector(getBanners);
  const [filter, setFilter] = useState<BannersFilter>(initialBannersFilter);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  useEffect(() => {
    if (!banners) dispatch(fetchBannersAction());
  }, [banners, dispatch]);

  return (
    <PageLayout>
      <main className={classNames(
        'relative flex flex-col h-full transition-all duration-300',
        isFilterOpen ? 'mr-[264px] md:mr-[272px]' : 'mr-0',
      )}>
        <header className="top flex flex-col gap-2 mb-2 md:mb-3 md:gap-3 min-w-64">
          <div className="flex items-end justify-between gap-2">
            <h1 className="relative flex mr-auto title overflow-scroll no-scrollbar whitespace-nowrap pr-6">
              Баннеры
            </h1>
            <div className="relative z-10 min-w-6 h-full pointer-events-none -ml-7 bg-gradient-to-l from-gray-100 to-transparent"></div>

            <Button
              className="min-w-max"
              icon="add"
              variant="success"
              onClick={() => setIsCreateModalOpen(true)}
            >
              <span className="sr-only md:not-sr-only">Добавить баннер</span>
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

        {banners
          ? <BannersTable
            className="h-[calc(100%-80px)] md:h-[calc(100%-88px)] min-w-64"
            banners={filterBanners(banners, filter)}
            filter={filter}
            setFilter={setFilter}
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

          <BannersFilterForm
            className="grow max-h-[calc(100%-48px)]"
            filter={filter}
            setFilter={setFilter}
          />
        </section>
      </main>

      <Modal isOpen={isCreateModalOpen}>
        <BannersCreateForm key={isCreateModalOpen.toString()} setIsOpen={setIsCreateModalOpen} />
      </Modal>
    </PageLayout>
  );
}

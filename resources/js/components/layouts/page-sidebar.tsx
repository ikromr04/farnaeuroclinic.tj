import React from 'react';
import NavList from '../ui/nav-list';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/index';
import classNames from 'classnames';
import { toggleNavigationAction } from '../../store/app-slice/app-slice';
import { PropsWithClassname } from '../../types';

export default function PageSidebar({
  className,
}: PropsWithClassname): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <aside className={classNames(className, 'static z-10 bg-white shadow rounded-r-md max-h-[calc(100vh-68px)]  transition-all duration-300 md:h-max md:rounded-md')}>
      <nav className="flex flex-col h-[calc(100vh-68px)] no-scrollbar md:max-h-[calc(100vh-84px)] md:h-auto">
        <NavList
          className="overflow-y-scroll overflow-x-hidden no-scrollbar"
          links={[
            { label: 'Программы', icon: 'programs', href: AppRoute.Dashboard.Programs.Index },
            { label: 'Категории программ', icon: 'categories', href: AppRoute.Dashboard.ProgramCategories },
            { label: 'Баннеры', icon: 'banners', href: AppRoute.Dashboard.Banners },
            { label: 'Докторы', icon: 'users', href: AppRoute.Dashboard.Doctors.Index },
            { label: 'Комментарии', icon: 'comment', href: AppRoute.Dashboard.Reviews },
          ]}
        />

        <hr className="border-gray-300 mt-auto" />

        <NavList links={[
          { label: 'Свернуть', icon: 'east', onClick: () => dispatch(toggleNavigationAction()) },
        ]} />
      </nav>
    </aside>
  );
}

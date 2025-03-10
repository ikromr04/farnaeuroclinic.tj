import React from 'react';
import classNames from 'classnames';
import MainLogo from './main-logo';
import { AppRoute } from '@/const';
import { NavLink } from 'react-router-dom';
import { Icons } from '../icons';
import { logoutAction } from '@/store/auth-slice/auth-api-actions';
import { useAppDispatch } from '@/hooks';

function PageSidebar(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <aside className="relative z-10 flex flex-col bg-white shadow border-r w-0 min-w-[240px] transition-all duration-300 group-[.menu-collapsed]:min-w-10">
      <header className="relative z-0 flex justify-between gap-x-3 border-b py-2 pl-3">
        <MainLogo
          className="transition-all duration-300 group-[.menu-collapsed]:invisible group-[.menu-collapsed]:opacity-0"
          imgClass="h-8 w-auto min-w-max"
        />

        <button
          className="absolute top-1/2 right-0 -translate-y-1/2 flex items-center justify-center w-10 h-9 text-gray-400 pr-[2px] group-[.menu-collapsed]:scale-x-[-1]"
          type="button"
          onClick={() => document.body.classList.toggle('menu-collapsed')}
        >
          <Icons.previous width={16} height={16} />
        </button>
      </header>

      <nav className="flex flex-col justify-between grow">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => classNames('group navlink', isActive && 'active')}
              to={AppRoute.Dashboard.SiteInfo}
            >
              <Icons.info className="navlink__icon" />
              <span className="navlink__label">Данные сайта</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames('group navlink', isActive && 'active')}
              to={AppRoute.Dashboard.Programs.Index}
            >
              <Icons.programs className="navlink__icon" />
              <span className="navlink__label">Программы</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames('group navlink', isActive && 'active')}
              to={AppRoute.Dashboard.Categories.Index}
            >
              <Icons.categories className="navlink__icon" />
              <span className="navlink__label">Категории</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames('group navlink', isActive && 'active')}
              to={AppRoute.Dashboard.Banners}
            >
              <Icons.banners className="navlink__icon" />
              <span className="navlink__label">Баннеры</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames('group navlink', isActive && 'active')}
              to={AppRoute.Dashboard.Doctors.Index}
            >
              <Icons.users className="navlink__icon" />
              <span className="navlink__label">Докторы</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames('group navlink', isActive && 'active')}
              to={AppRoute.Dashboard.Reviews}
            >
              <Icons.comment className="navlink__icon" />
              <span className="navlink__label">Комментарии</span>
            </NavLink>
          </li>
        </ul>

        <button
          className="navlink"
          type="button"
          onClick={() => dispatch(logoutAction())}
        >
          <Icons.logout className="navlink__icon" />
          <span className="navlink__label">Выйти</span>
        </button>
      </nav>
    </aside>
  );
}

export default PageSidebar;

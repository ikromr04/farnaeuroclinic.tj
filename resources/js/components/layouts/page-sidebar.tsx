import React from 'react';
import MainLogo from '../ui/main-logo';
import { Icons } from '../icons';
import PageNavigation from './page-navigation/page-navigation';

export default function PageSidebar(): JSX.Element {
  return (
    <aside className="w-80 shadow-sm bg-white border overflow-y-auto overflow-x-hidden group-[.menu-hidden]:w-0 transition-all duration-300">
      <header className="sticky top-0 z-10 bg-white flex items-center justify-between py-2 px-4 border-b min-w-80">
        <MainLogo />

        <button
          className="button rounded-full w-10 h-10 hover:bg-gray-100 pr-1"
          type="button"
          onClick={() => document.body.classList.add('menu-hidden')}
        >
          <span className="sr-only">Скрыть меню</span>
          <Icons.anglesLeft width={16} height={16} />
        </button>
      </header>

      <PageNavigation />
    </aside>
  );
}

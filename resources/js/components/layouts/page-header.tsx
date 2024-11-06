import React from 'react';
import { Icons } from '../icons';

export default function PageHeader(): JSX.Element {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between min-h-14 bg-white px-4">
      <button
        className="button rounded-full hover:bg-gray-100 w-10 h-10 invisible opacity-0 pointer-events-none group-[.menu-hidden]:visible group-[.menu-hidden]:opacity-100 group-[.menu-hidden]:pointer-events-auto"
        type="button"
        onClick={() => document.body.classList.remove('menu-hidden')}
      >
        <span className="sr-only">Показать меню</span>
        <Icons.menu width={24} height={24} />
      </button>

      <button className="button hover:bg-red-50 rounded-md h-8 px-4 text-red-500 border border-red-400" type="button">
        Выйти
      </button>
    </header>
  );
}

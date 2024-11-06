import React from 'react';
import NavItem from './nav-item';
import { Icons } from '@/components/icons';
import { generatePath } from 'react-router-dom';

export default function PageNavigation(): JSX.Element {
  return (
    <nav className="py-4 px-4">
      <ul className="flex flex-col gap-y-1">
        <NavItem
          links={{
            title: 'Баннеры',
            icon: <Icons.banner className="transition-all duration-300" width={24} height={20} />,
            links: [
              {
                href: generatePath('/admin/banners/:banner', { banner: 'home' }),
                label: 'Главная страница',
              },
              {
                href: generatePath('/admin/banners/:banner', { banner: 'test-drive' }),
                label: 'Тест драйв',
              },
              {
                href: generatePath('/admin/banners/:banner', { banner: 'service' }),
                label: 'Услуги и сервис',
              },
            ],
          }}
        />
      </ul>
    </nav>
  );
}

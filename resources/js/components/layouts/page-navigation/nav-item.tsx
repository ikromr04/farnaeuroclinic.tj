import { Icons } from '@/components/icons';
import { useOutsideClick } from '@/hooks/use-outside-click';
import classNames from 'classnames';
import React, { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

type NavLink = {
  href: string;
  label: string;
  icon?: JSX.Element;
};

type NavLinks = {
  title: string;
  icon?: JSX.Element;
  links: NavLink[];
};

export default function NavItem({
  link,
  links
}: {
  link?: NavLink;
  links?: NavLinks;
}): ReactNode {
  const
    { pathname } = useLocation(),
    [isOpen, setIsOpen] = useState(false),
    ref = useOutsideClick<HTMLLIElement>(() => setIsOpen(false));

  if (links) {
    const isActive = pathname === '/admin' ? links.links.some(({ href }) => pathname === href) : links.links.some(({ href }) => (href !== '/admin' && pathname.startsWith(href)));

    return (
      <li ref={ref} className="flex flex-col gap-1">
        <button
          className={classNames(
            'flex w-full gap-x-2 min-h-10 items-center rounded-md px-4 transition-all duration-300 hover:bg-gray-100',
            isActive && 'bg-gray-100'
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {links.icon && <span className={classNames(isActive && 'text-green-600')}>{links.icon}</span>}
          {links.title}
          <Icons.caretDown
            className={classNames(
              'ml-auto text-gray-600 transform transition-all duration-300',
              isOpen && 'rotate-180'
            )}
            width={16}
            height={16}
          />
        </button>
        {isOpen &&
          <ul className="flex flex-col gap-1 pl-8">
            {links.links.map((link) => (
              <NavItem
                key={link.href}
                link={link}
              />
            ))}
          </ul>}
      </li>);
  }

  if (link) {
    const isActive = pathname === '/admin' ? pathname === link.href : (link.href !== '/admin' && pathname.startsWith(link.href));

    return (
      <li>
        <Link
          className={classNames(
            'flex gap-x-2 min-h-10 items-center rounded-md px-4 transition-all duration-300 hover:bg-gray-100',
            isActive && 'bg-gray-100'
          )}
          to={link.href}
        >
          {link.icon && <span className={classNames(isActive && 'text-green-600')}>{link.icon}</span>}
          {link.label}
        </Link>
      </li>
    );
  }

  return null;
}

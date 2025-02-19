import React from 'react';
import { Icons } from '../icons';
import { LinkProps, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import Button from './button';

export type NavLinkProps = {
  label: string;
  icon: keyof typeof Icons;
} & LinkProps;

export default function NavLink({
  label,
  icon,
  to,
  ...props
}: NavLinkProps) {
  const { pathname } = useLocation();
  const Icon = Icons[icon];
  const isActive = to && (to != '/' ? pathname.startsWith(href) : (href === pathname));
  const dispatch = useAppDispatch();

  const children = <>
    <span className="flex items-center justify-center min-w-9 min-h-9">
      <Icon
        className={classNames(
          'group-[.active]:text-success transition-all duration-300',
          (icon === 'east') && !isNavigationCollapsed && '-scale-x-[1]'
        )}
        width={16}
        height={16}
      />
    </span>
    <span className={classNames(
      'flex items-center min-w-max transition-all duration-300',
      isNavigationCollapsed && 'opacity-0'
    )}>
      {label}
    </span>
  </>;

  return (
    <Button
      onClick={() => { if (window.screen.width < 768) dispatch(collapseNavigationAction()); }}
      {...props}
      className={classNames(
        className,
        'flex items-center h-9 rounded-r-md group w-full transition-all duration-300 md:rounded-md xl:hover:bg-gray-100 text-gray-500 overflow-hidden',
        isActive && 'bg-blue-50 active',
      )}
      variant="default"
      href={href}
    >
      {children}
    </Button>
  );
}

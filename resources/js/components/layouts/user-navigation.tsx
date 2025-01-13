import React, { ReactNode } from 'react';
import { useDropdown } from '../../hooks/use-dropdown';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthUser } from '../../store/auth-slice/auth-selector';
import { logoutAction } from '../../store/auth-slice/auth-api-actions';
import { Icons } from '../icons';
import { PropsWithClassname } from '../../types';

export default function UserNavigation({
  className,
}: PropsWithClassname): ReactNode {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getAuthUser);
  const { ref, isOpen, setIsOpen } = useDropdown<HTMLDivElement>();

  if (!user) return null;

  return (
    <div ref={ref} className={classNames(className, 'relative z-20')}>
      <button
        className="flex items-center gap-2 text-gray-900"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="relative z-0 flex w-9 h-9 rounded-full bg-gray-100">
          <Icons.user className="text-gray-300" width={36} height={36} />
        </span>
        <span className="sr-only md:not-sr-only font-semibold">{user.name}</span>
        <Icons.dropDown className={classNames('transition-all duration-300 transform', isOpen && '-scale-y-[1]')} width={8} />
      </button>

      <div
        className={classNames(
          'absolute top-[calc(100%+12px)] right-0 border rounded-md py-1 bg-white shadow-sm text-sm min-w-max transition-all duration-300 text-gray-500',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <button
          className="flex w-full items-center h-8 transition-all duration-300 hover:bg-gray-100 px-3"
          type="button"
          onClick={() => dispatch(logoutAction())}
        >
          Выйти
        </button>
      </div>
    </div>
  );
}

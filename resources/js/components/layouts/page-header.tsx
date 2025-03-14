import React, { memo } from 'react';
import MainLogo from './main-logo';
import UserNavigation from './user-navigation';
import classNames from 'classnames';
import { PropsWithClassname } from '../../types';

 function PageHeader({
  className,
}: PropsWithClassname): JSX.Element {
  return (
    <header className={classNames(className, 'static z-20 bg-white shadow py-2')}>
      <div className="container flex justify-between">
        <MainLogo imgClass="h-9 w-auto" />

        <UserNavigation />
      </div>
    </header>
  );
}

export default memo(PageHeader);

import React from 'react';
import classNames from 'classnames';

type MainLogoProps = {
  className?: string;
  imgClass?: string;
};

export default function MainLogo({
  className,
  imgClass,
}: MainLogoProps): JSX.Element {
  return (
    <a className={classNames(className, 'max-w-max max-h-max')} href="/" target="_blank">
      <picture>
        <source media="(min-width: 1024px)" srcSet="/images/main-logo.desktop.svg" width="174" height="60" />
        <source media="(min-width: 768px)" srcSet="/images/main-logo.tablet.svg" width="60" height="60" />
        <source srcSet="/images/main-logo.mobile.svg" width="95" height="60" />
        <img className={imgClass} src="/images/main-logo.mobile.svg" alt="Логотип Farna Euroclinic" />
      </picture>
    </a>
  );
}

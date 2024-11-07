import classNames from 'classnames';
import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  className?: string;
}

export default function Input({
  name,
  label,
  className,
  ...rest
}: InputProps): JSX.Element {
  const [field, meta, helpers] = useField(name);

  return (
    <div className={classNames('flex flex-col', className)}>
      {label && <label className="text-sm mb-1" htmlFor={name}>{label}</label>}
      <input
        className={classNames(
          'flex w-full border rounded bg-gray-100 focus:[box-shadow:none]',
          (meta.touched && meta.error) ? 'border-red-400' : 'border-gray-300'
        )}
        id={name}
        {...field}
        {...rest}
      />
      {meta.touched && meta.error && <p className="text-red-500 text-sm mt-1">{meta.error}</p>}
    </div>
  );
}

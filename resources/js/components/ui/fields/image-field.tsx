import React, { InputHTMLAttributes, useState } from 'react';
import classNames from 'classnames';
import ErrorMessage from './partials/error-message';
import { useField } from 'formik';
import Button from '../button';
import { Icons } from '@/components/icons';

type ImageFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  cleanable?: boolean;
  onClean?: () => void;
  className?: string;
  imgClass?: string;
  label?: string;
  width?: number;
  height?: number;
};

export default function ImageField({
  name,
  cleanable = false,
  onClean,
  className,
  imgClass,
  label,
  width = 300,
  height = 200,
  ...props
}: ImageFieldProps): JSX.Element {
  const [field, meta, helpers] = useField(name);
  const [src, setSrc] = useState<string>(field.value);

  return (
    <div className={classNames(className, 'flex flex-col')}>
      <div className="relative group flex flex-col w-max">
        {field.value &&
          <Button
            className="absolute top-6 right-1 z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300"
            variant="error"
            onClick={() => {
              helpers.setValue('');
              setSrc('');
            }}
          >
            <Icons.delete width={14} height={14} />
          </Button>}
        <label className="cursor-pointer flex flex-col w-max">
          <span className="relative z-0 rounded flex max-w-max text-sm text-gray-500 ml-2">
            {label}
          </span>
          <span className="relative flex">
            <img
              className={classNames(
                'flex bg-gray-50 rounded border hover:bg-gray-100 object-cover',
                (meta.error && meta.touched) ? 'border-red-400' : 'border-gray-200',
                imgClass,
              )}
              src={src || '/images/categories/program.png'}
              width={width}
              height={height}
              alt={name}
            />

            <input
              {...props}
              className="sr-only"
              type="file"
              onChange={(evt) => {
                const file = evt.currentTarget.files?.[0];
                const path = file && URL.createObjectURL(file);
                helpers.setValue(file);
                setSrc(path || '')
              }}
            />
          </span>
        </label>
      </div>

      <ErrorMessage name={name} />
    </div>
  );
}

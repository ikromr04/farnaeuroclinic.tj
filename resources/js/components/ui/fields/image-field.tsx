import React, { InputHTMLAttributes, useState } from 'react';
import classNames from 'classnames';
import ErrorMessage from './partials/error-message';
import { useField } from 'formik';
import Button from '../button';
import { Icons } from '@/components/icons';

type ImageFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  className?: string;
  imgClass?: string;
  label?: string;
  width?: number;
  height?: number;
  required?: boolean;
};

export default function ImageField({
  name,
  className,
  imgClass,
  label,
  width = 300,
  height = 200,
  required,
  ...props
}: ImageFieldProps): JSX.Element {
  const [field, meta, helpers] = useField(name);
  const [src, setSrc] = useState<string>(field.value);

  return (
    <div className={classNames(className, 'flex flex-col')}>
      <div className="relative group flex flex-col">
        {/* {field.value &&
          <Button
            className="!absolute top-6 right-1 z-10 max-w-max ml-auto invisible opacity-0 group-hover:visible group-hover:opacity-100"
            variant="error"
            onClick={() => {
              helpers.setValue('');
              setSrc('');
            }}
          >
            <Icons.delete width={14} height={14} />
          </Button>} */}
        <label className="cursor-pointer flex flex-col">
          <span className="relative z-0 rounded flex max-w-max text-sm text-gray-500 ml-2">
            {label}
            {required && <span className="text-error transform scale-[1.4] translate-y-[10%] translate-x-[16%]">*</span>}
          </span>
          <span className="relative flex w-full">
            <img
              className={classNames(
                'flex bg-gray-50 rounded border hover:bg-gray-100 object-cover',
                (meta.error && meta.touched) ? 'border-red-400' : 'border-gray-200',
                imgClass,
              )}
              src={src || '/images/image-field.png'}
              width={width}
              height={height}
            />

            <input
              {...props}
              className="sr-only"
              type="file"
              onChange={(evt) => {
                const file = evt.currentTarget.files?.[0];
                const path = file && URL.createObjectURL(file);
                helpers.setValue(file);
                setSrc(path || '');
              }}
            />
          </span>
        </label>
      </div>

      <ErrorMessage name={name} />
    </div>
  );
}

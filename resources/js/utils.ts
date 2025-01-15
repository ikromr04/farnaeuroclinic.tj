import dayjs from 'dayjs';
import { Programs, ProgramsFilter } from './types/programs';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = <F extends (...args: any) => any>(
  func: F,
  delay = 500,
) => {
  let timeout: ReturnType<typeof setTimeout> | number = 0;

  const debounced = (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};

export const generateRandomPassword = (length: number = 8): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
};

export const filterPrograms = (programs: Programs, filter: ProgramsFilter): Programs => {
  programs = programs.filter((program) => (
    program.title.toLowerCase().includes(filter.searchKeyword.toLowerCase())
    || program.description.toLowerCase().includes(filter.searchKeyword.toLowerCase())
  ));
  programs = programs.filter((program) => (
    program.title.toLowerCase().includes(filter.title.query?.toLowerCase() || '')
    && (filter.category.query ? (program.category.id === filter.category.query) : true)
    && (filter.price.query ? program.price.toString().toLowerCase().includes(filter.price.query.toString().toLowerCase()) : true)
    && (filter.description.query ? program.description.toString().toLowerCase().includes(filter.description.query.toLowerCase()) : true)
  ));

  if (filter.orderBy) {
    type IndexType = 'title' | 'description' | 'info' | 'price' | 'category';

    programs = programs.sort((a, b) => {
      if (filter.orderBy === 'category') {
        if (filter.orderType === 'asc') {
          return a.category.title > b.category.title ? 1 : -1;
        } else if (filter.orderType === 'desc') {
          return a.category.title < b.category.title ? 1 : -1;
        } else {
          return 0;
        }
      }
      if (filter.orderType === 'asc') {
        return a[filter.orderBy as IndexType] > b[filter.orderBy as IndexType] ? 1 : -1;
      } else if (filter.orderType === 'desc') {
        return a[filter.orderBy as IndexType] < b[filter.orderBy as IndexType] ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  return programs;
};

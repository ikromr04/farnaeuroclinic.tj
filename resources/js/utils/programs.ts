import { Programs, ProgramsFilter } from "@/types/programs";

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

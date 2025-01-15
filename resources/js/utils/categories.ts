import { Categories, CategoriesFilter } from '@/types/categories';

export const filterCategories = (categories: Categories, filter: CategoriesFilter): Categories => {
  categories = categories.filter((category) => (
    category.title.toLowerCase().includes(filter.searchKeyword.toLowerCase())
    || category.description.toLowerCase().includes(filter.searchKeyword.toLowerCase())
  ));
  categories = categories.filter((category) => (
    category.title.toLowerCase().includes(filter.title.query?.toLowerCase() || '')
    && (filter.description.query ? category.description.toString().toLowerCase().includes(filter.description.query.toLowerCase()) : true)
  ));

  if (filter.orderBy) {
    type IndexType = 'title' | 'description';

    categories = categories.sort((a, b) => {
      if (filter.orderType === 'asc') {
        return a[filter.orderBy as IndexType] > b[filter.orderBy as IndexType] ? 1 : -1;
      } else if (filter.orderType === 'desc') {
        return a[filter.orderBy as IndexType] < b[filter.orderBy as IndexType] ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  return categories;
};

import { Banners, BannersFilter } from '@/types/banners';

export const filterBanners = (banners: Banners, filter: BannersFilter): Banners => {
  banners = banners.filter((banner) => (
    banner.title.toLowerCase().includes(filter.searchKeyword.toLowerCase())
    || (banner.link ? banner.link.toLowerCase().includes(filter.searchKeyword.toLowerCase()) : true)
    || banner.description.toLowerCase().includes(filter.searchKeyword.toLowerCase())
  ));
  banners = banners.filter((banner) => (
    banner.title.toLowerCase().includes(filter.title.query?.toLowerCase() || '')
    && (filter.category.query ? (banner.category?.id === filter.category.query) : true)
    && (filter.description.query ? banner.description.toString().toLowerCase().includes(filter.description.query.toLowerCase()) : true)
    && (filter.link.query ? banner.link?.toString().toLowerCase().includes(filter.link.query.toLowerCase()) : true)
  ));

  if (filter.orderBy) {
    type IndexType = 'title' | 'description';

    banners = banners.sort((a, b) => {
      if (filter.orderBy === 'category') {
        if (filter.orderType === 'asc') {
          return a.category?.title || '' > (b.category?.title || '') ? 1 : -1;
        } else if (filter.orderType === 'desc') {
          return a.category?.title || '' < (b.category?.title || '') ? 1 : -1;
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

  return banners;
};

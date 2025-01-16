import { Banners } from '@/types/banners';
import { SliceName } from '../../const';
import { State } from '../../types/state';

export const getBanners = (state: State): Banners | null =>
  state[SliceName.Banners].banners;

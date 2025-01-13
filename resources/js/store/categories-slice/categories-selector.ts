import { SliceName } from '../../const';
import { Categories } from '../../types/categories';
import { State } from '../../types/state';

export const getCategories = (state: State): Categories | null =>
  state[SliceName.Categories].categories;

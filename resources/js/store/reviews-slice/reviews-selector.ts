import { SliceName } from '@/const';
import { Reviews } from '@/types/reviews';
import { State } from '@/types/state';

export const getReviews = (state: State): Reviews | null =>
  state[SliceName.Reviews].reviews;

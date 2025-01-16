import { SliceName } from '../../const';
import { State } from '../../types/state';
import { Doctors } from '@/types/doctors';

export const getDoctors = (state: State): Doctors | null =>
  state[SliceName.Doctors].doctors;

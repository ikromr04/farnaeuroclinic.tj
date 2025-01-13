import { SliceName } from '../../const';
import { Programs } from '../../types/programs';
import { State } from '../../types/state';

export const getPrograms = (state: State): Programs | null =>
  state[SliceName.Programs].programs;

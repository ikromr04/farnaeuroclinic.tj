import { SliceName } from '../../const';
import { State } from '../../types/state';
import { Users } from '../../types/programs';

export const getUsers = (state: State): Users | null =>
  state[SliceName.Users].users;

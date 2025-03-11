import { SliceName } from '@/const';
import { State } from '@/types/state';
import { Texts } from '@/types/texts';

export const getTexts = (state: State): Texts | null =>
  state[SliceName.Texts].texts;

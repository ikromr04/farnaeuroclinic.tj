import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { Texts } from '@/types/texts';
import {
  deleteTextAction,
  fetchTextsAction,
  storeTextAction,
  updateTextAction,
} from './texts-api-actions';

export type TextsSlice = {
  texts: Texts | null;
}

const initialState: TextsSlice = {
  texts: null,
};

export const textsSlice = createSlice({
  name: SliceName.Texts,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTextsAction.fulfilled, (state, action) => {
        state.texts = action.payload;
      })
      .addCase(storeTextAction.fulfilled, (state, action) => {
        state.texts = [action.payload, ...(state.texts || [])];
      })
      .addCase(updateTextAction.fulfilled, (state, action) => {
        if (state.texts) {
          state.texts = state.texts.map((text) =>
            text.id === action.payload.id ? { ...action.payload } : text
          );
        }
      })
      .addCase(deleteTextAction.fulfilled, (state) => {
        state.texts = null;
      });
  },
});

import { createSlice } from '@reduxjs/toolkit';
import { fetchProgramsAction } from './programs-api-actions';
import { SliceName } from '../../const';
import { Programs } from '../../types/programs';

export type ProgramsSlice = {
  programs: Programs | null;
}

const initialState: ProgramsSlice = {
  programs: null,
};

export const programsSlice = createSlice({
  name: SliceName.Programs,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProgramsAction.fulfilled, (state, action) => {
        state.programs = action.payload;
      });
  },
});

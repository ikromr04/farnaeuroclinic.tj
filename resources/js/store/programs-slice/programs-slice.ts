import { createSlice } from '@reduxjs/toolkit';
import { deleteProgramAction, fetchProgramsAction, updateProgramAction } from './programs-api-actions';
import { SliceName } from '../../const';
import { Program, Programs } from '../../types/programs';

export type ProgramsSlice = {
  programs: Programs | null;
}

const initialState: ProgramsSlice = {
  programs: null,
};

export const programsSlice = createSlice({
  name: SliceName.Programs,
  initialState,
  reducers: {
    addProgramAction: (state, action: { payload: Program }) => {
      state.programs = [action.payload, ...(state.programs || [])];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProgramsAction.fulfilled, (state, action) => {
        state.programs = action.payload;
      })
      .addCase(updateProgramAction.fulfilled, (state) => {
        state.programs = null;
      })
      .addCase(deleteProgramAction.fulfilled, (state) => {
        state.programs = null;
      });
  },
});

export const {
  addProgramAction,
} = programsSlice.actions;

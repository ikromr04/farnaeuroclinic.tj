import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { deleteDoctorAction, fetchDoctorsAction, updateDoctorAction } from './doctors-api-actions';
import { Doctor, Doctors } from '@/types/doctors';

export type DoctorsSlice = {
  doctors: Doctors | null;
}

const initialState: DoctorsSlice = {
  doctors: null,
};

export const doctorsSlice = createSlice({
  name: SliceName.Doctors,
  initialState,
  reducers: {
    addDoctorAction: (state, action: { payload: Doctor }) => {
      state.doctors = [action.payload, ...(state.doctors || [])];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDoctorsAction.fulfilled, (state, action) => {
        state.doctors = action.payload;
      })
      .addCase(updateDoctorAction.fulfilled, (state) => {
        state.doctors = null;
      })
      .addCase(deleteDoctorAction.fulfilled, (state) => {
        state.doctors = null;
      });
  },
});

export const {
  addDoctorAction,
} = doctorsSlice.actions;

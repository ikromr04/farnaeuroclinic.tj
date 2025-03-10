import { combineReducers } from '@reduxjs/toolkit';
import { SliceName } from '../const';
import { authSlice } from './auth-slice/auth-slice';
import { appSlice } from './app-slice/app-slice';
import { programsSlice } from './programs-slice/programs-slice';
import { categoriesSlice } from './categories-slice/categories-slice';
import { bannersSlice } from './banners-slice/banners-slice';
import { doctorsSlice } from './doctors-slice/doctors-slice';
import { reviewsSlice } from './reviews-slice/reviews-slice';

export const rootReducer = combineReducers({
  [SliceName.App]: appSlice.reducer,
  [SliceName.Auth]: authSlice.reducer,
  [SliceName.Programs]: programsSlice.reducer,
  [SliceName.Categories]: categoriesSlice.reducer,
  [SliceName.Banners]: bannersSlice.reducer,
  [SliceName.Doctors]: doctorsSlice.reducer,
  [SliceName.Reviews]: reviewsSlice.reducer,
});

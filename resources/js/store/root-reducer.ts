import { combineReducers } from '@reduxjs/toolkit';
import { SliceName } from '../const';
import { authSlice } from './auth-slice/auth-slice';
import { appSlice } from './app-slice/app-slice';
import { programsSlice } from './programs-slice/programs-slice';
import { categoriesSlice } from './categories-slice/categories-slice';
import { bannersSlice } from './banners-slice/banners-slice';

export const rootReducer = combineReducers({
  [SliceName.App]: appSlice.reducer,
  [SliceName.Auth]: authSlice.reducer,
  [SliceName.Programs]: programsSlice.reducer,
  [SliceName.Categories]: categoriesSlice.reducer,
  [SliceName.Banners]: bannersSlice.reducer,
});

import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { Banner, Banners } from '@/types/banners';
import { deleteBannerAction, fetchBannersAction, updateBannerAction } from './banners-api-actions';
import { deleteCategoryAction } from '../categories-slice/categories-api-actions';

export type BannersSlice = {
  banners: Banners | null;
}

const initialState: BannersSlice = {
  banners: null,
};

export const bannersSlice = createSlice({
  name: SliceName.Banners,
  initialState,
  reducers: {
    addBannerAction: (state, action: { payload: Banner }) => {
      state.banners = [action.payload, ...(state.banners || [])];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBannersAction.fulfilled, (state, action) => {
        state.banners = action.payload;
      })
      .addCase(updateBannerAction.fulfilled, (state) => {
        state.banners = null;
      })
      .addCase(deleteCategoryAction.fulfilled, (state) => {
        state.banners = null;
      })
      .addCase(deleteBannerAction.fulfilled, (state) => {
        state.banners = null;
      });
  },
});

export const {
  addBannerAction,
} = bannersSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { Banner, Banners } from '@/types/banners';
import { fetchBannersAction } from './banners-api-actions';

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
      // .addCase(updateCategoryAction.fulfilled, (state) => {
      //   state.categories = null;
      // })
      // .addCase(deleteCategoryAction.fulfilled, (state) => {
      //   state.categories = null;
      // })
      ;
  },
});

export const {
  addBannerAction,
} = bannersSlice.actions;

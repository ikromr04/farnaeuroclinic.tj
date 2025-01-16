import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { deleteCategoryAction, fetchCategoriesAction, updateCategoryAction } from './categories-api-actions';
import { Categories, Category } from '../../types/categories';

export type CategoriesSlice = {
  categories: Categories | null;
}

const initialState: CategoriesSlice = {
  categories: null,
};

export const categoriesSlice = createSlice({
  name: SliceName.Categories,
  initialState,
  reducers: {
    addCategoryAction: (state, action: { payload: Category }) => {
      state.categories = [action.payload, ...(state.categories || [])];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCategoriesAction.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(updateCategoryAction.fulfilled, (state) => {
        state.categories = null;
      })
      .addCase(deleteCategoryAction.fulfilled, (state) => {
        state.categories = null;
      });
  },
});

export const {
  addCategoryAction,
} = categoriesSlice.actions;

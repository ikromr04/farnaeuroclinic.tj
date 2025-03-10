import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { Reviews } from '@/types/reviews';
import {
  deleteReviewAction,
  fetchReviewsAction,
  storeReviewAction,
  updateReviewAction,
} from './reviews-api-actions';

export type ReviewsSlice = {
  reviews: Reviews | null;
}

const initialState: ReviewsSlice = {
  reviews: null,
};

export const reviewsSlice = createSlice({
  name: SliceName.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(storeReviewAction.fulfilled, (state, action) => {
        state.reviews = [action.payload, ...(state.reviews || [])];
      })
      .addCase(updateReviewAction.fulfilled, (state, action) => {
        if (state.reviews) {
          state.reviews = state.reviews.map((review) =>
            review.id === action.payload.id ? { ...action.payload } : review
          );
        }
      })
      .addCase(deleteReviewAction.fulfilled, (state) => {
        state.reviews = null;
      });
  },
});

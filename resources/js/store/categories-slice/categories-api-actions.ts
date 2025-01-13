import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { Categories } from '../../types/categories';

export const fetchCategoriesAction = createAsyncThunk<Categories, undefined, {
  extra: AxiosInstance
}>(
  'categories/fetch',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Categories>(APIRoute.Categories.Index);

    return data;
  },
);

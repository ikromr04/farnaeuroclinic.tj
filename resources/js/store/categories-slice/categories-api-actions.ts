import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { Categories, Category, CategoryId } from '../../types/categories';
import { ValidationError } from '@/types/validation-error';
import { generatePath } from 'react-router-dom';

export const fetchCategoriesAction = createAsyncThunk<Categories, undefined, {
  extra: AxiosInstance
}>(
  'categories/fetch',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Categories>(APIRoute.Categories.Index);

    return data;
  },
);

export const storeCategoryAction = createAsyncThunk<void, {
  dto: FormData,
  onSuccess?: (category: Category) => void,
  onValidationError?: (error: ValidationError) => void,
  onFail?: (message: string) => void,
}, {
  extra: AxiosInstance,
  rejectWithValue: ValidationError,
}>(
  'categories/store',
  async ({ dto, onValidationError, onSuccess, onFail }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<Category>(APIRoute.Categories.Index, dto);
      if (onSuccess) onSuccess(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err;
      if (!error.response) throw err;
      if (onValidationError && (error.response?.status === 422)) onValidationError(error.response.data);
      if (onFail && (error.response?.status !== 422)) onFail(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  },
);

export const updateCategoryAction = createAsyncThunk<void, {
  dto: FormData,
  onSuccess?: (category: Category) => void,
  onValidationError?: (error: ValidationError) => void,
  onFail?: (message: string) => void,
}, {
  extra: AxiosInstance,
  rejectWithValue: ValidationError,
}>(
  'categories/update',
  async ({ dto, onValidationError, onSuccess, onFail }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<Category>(APIRoute.Categories.Update, dto);
      if (onSuccess) onSuccess(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err;
      if (!error.response) throw err;
      if (onValidationError && (error.response?.status === 422)) onValidationError(error.response.data);
      if (onFail && (error.response?.status !== 422)) onFail(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  },
);

export const deleteCategoryAction = createAsyncThunk<void, {
  id: CategoryId,
  onSuccess?: (message: string) => void,
  onFail?: (message: string) => void,
}, {
  extra: AxiosInstance,
  rejectWithValue: ValidationError,
}>(
  'categories/delete',
  async ({ id, onSuccess, onFail }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.delete<{ message: string }>(generatePath(APIRoute.Categories.Show, { id }));
      if (onSuccess) onSuccess(data.message);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err;
      if (!error.response) throw err;
      if (onFail && (error.response?.status !== 422)) onFail(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  },
);

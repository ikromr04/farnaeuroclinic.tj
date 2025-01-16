import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { Banner, Banners } from '@/types/banners';
import { ValidationError } from '@/types/validation-error';

export const fetchBannersAction = createAsyncThunk<Banners, undefined, {
  extra: AxiosInstance
}>(
  'banners/fetch',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Banners>(APIRoute.Banners.Index);

    return data;
  },
);

export const storeBannerAction = createAsyncThunk<void, {
  dto: FormData,
  onSuccess?: (banner: Banner) => void,
  onValidationError?: (error: ValidationError) => void,
  onFail?: (message: string) => void,
}, {
  extra: AxiosInstance,
  rejectWithValue: ValidationError,
}>(
  'categories/store',
  async ({ dto, onValidationError, onSuccess, onFail }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<Banner>(APIRoute.Banners.Index, dto);
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

/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { dropToken, saveToken, Token } from '../../services/token';
import { ValidationError } from '../../types/validation-error';
import { LoginCredentials } from '@/dto/auth-dto';
import { User } from '@/types/auth';

export const checkAuthAction = createAsyncThunk<User, undefined, {
  extra: AxiosInstance;
}>(
  'auth/check',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<User>(APIRoute.Auth.Check);
    return data;
  },
);

export const loginAction = createAsyncThunk<User, {
  dto: LoginCredentials;
  onError: (error: ValidationError) => void;
}, {
  extra: AxiosInstance;
  rejectWithValue: ValidationError;
}>(
  'auth/login',
  async ({ dto, onError }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<User & { token: Token; }>(APIRoute.Auth.Login, dto);
      saveToken(data.token);
      return data;
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err;
      if (!error.response) {
        throw err;
      }
      onError(error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  extra: AxiosInstance;
}>(
  'auth/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Auth.Login);
    dropToken();
  },
);

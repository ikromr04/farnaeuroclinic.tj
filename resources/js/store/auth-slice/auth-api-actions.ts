import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { AuthUser } from '../../types/auth';
import { ValidationError } from '../../types/validation-error';
import { LoginCredentials } from '../../dto/auth-dto';
import { dropToken, saveToken, Token } from '../../services/token';

export const checkAuthAction = createAsyncThunk<AuthUser, undefined, {
  extra: AxiosInstance
}>(
  'auth/check',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<AuthUser>(APIRoute.Auth.Check);
    return data;
  },
);

export const loginAction = createAsyncThunk<AuthUser, {
  dto: LoginCredentials,
  onValidationError?: (error: ValidationError) => void,
}, {
  extra: AxiosInstance,
  rejectWithValue: ValidationError,
}>(
  'auth/login',
  async ({ dto, onValidationError }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<{ user: AuthUser, token: Token }>(APIRoute.Auth.Login, dto);
      saveToken(data.token);
      return data.user;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err;
      if (!error.response) throw err;
      if (onValidationError && (error.response?.status === 422)) onValidationError(error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  extra: AxiosInstance
}>(
  'auth/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Auth.Logout);
    dropToken();
  },
);

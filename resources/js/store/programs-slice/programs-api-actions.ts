import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { ValidationError } from '../../types/validation-error';
import { Programs } from '../../types/programs';

export const fetchProgramsAction = createAsyncThunk<Programs, undefined, {
  extra: AxiosInstance
}>(
  'programs/fetch',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Programs>(APIRoute.Programs.Index);

    return data;
  },
);

// export const storeUserAction = createAsyncThunk<void, {
//   dto: UserStoreDTO,
//   onSuccess?: (user: User) => void,
//   onValidationError?: (error: ValidationError) => void,
//   onFail?: (message: string) => void,
// }, {
//   extra: AxiosInstance,
//   rejectWithValue: ValidationError,
// }>(
//   'users/store',
//   async ({ dto, onValidationError, onSuccess, onFail }, { extra: api, rejectWithValue }) => {
//     try {
//       const { data } = await api.post<User>(APIRoute.Users.Index, dto);
//       if (onSuccess) onSuccess(data);
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (err: any) {
//       const error: AxiosError<ValidationError> = err;
//       if (!error.response) throw err;
//       if (onValidationError && (error.response?.status === 422)) onValidationError(error.response.data);
//       if (onFail && (error.response?.status !== 422)) onFail(error.response.data.message);
//       return rejectWithValue(error.response.data);
//     }
//   },
// );

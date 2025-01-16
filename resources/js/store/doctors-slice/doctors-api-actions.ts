import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { ValidationError } from '@/types/validation-error';
import { generatePath } from 'react-router-dom';
import { Doctor, DoctorId, Doctors } from '@/types/doctors';

export const fetchDoctorsAction = createAsyncThunk<Doctors, undefined, {
  extra: AxiosInstance
}>(
  'doctors/fetch',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Doctors>(APIRoute.Doctors.Index);

    return data;
  },
);

export const storeDoctorAction = createAsyncThunk<void, {
  dto: FormData,
  onSuccess?: (doctor: Doctor) => void,
  onValidationError?: (error: ValidationError) => void,
  onFail?: (message: string) => void,
}, {
  extra: AxiosInstance,
  rejectWithValue: ValidationError,
}>(
  'doctors/store',
  async ({ dto, onValidationError, onSuccess, onFail }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<Doctor>(APIRoute.Doctors.Index, dto);
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

export const updateDoctorAction = createAsyncThunk<void, {
  dto: FormData,
  onSuccess?: (doctor: Doctor) => void,
  onValidationError?: (error: ValidationError) => void,
  onFail?: (message: string) => void,
}, {
  extra: AxiosInstance,
  rejectWithValue: ValidationError,
}>(
  'doctors/update',
  async ({ dto, onValidationError, onSuccess, onFail }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<Doctor>(APIRoute.Doctors.Update, dto);
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

export const deleteDoctorAction = createAsyncThunk<void, {
  id: DoctorId,
  onSuccess?: (message: string) => void,
  onFail?: (message: string) => void,
}, {
  extra: AxiosInstance,
  rejectWithValue: ValidationError,
}>(
  'doctors/delete',
  async ({ id, onSuccess, onFail }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.delete<{ message: string }>(generatePath(APIRoute.Doctors.Show, { id }));
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

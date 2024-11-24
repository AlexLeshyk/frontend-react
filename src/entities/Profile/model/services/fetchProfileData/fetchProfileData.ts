import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profileType';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;
    try {
      const response = await extra.api.get<Profile>('/profile');

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);

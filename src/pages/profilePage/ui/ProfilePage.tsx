import {
  fetchProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadOnly,
  profileActions,
  ProfileCard,
  profileReducer,
  getProfileForm,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const initialReducers: ReducersList = {
  profile: profileReducer,
};
const ProfilePage = () => {
  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadOnly);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      first: value,
    }));
  }, [dispatch]);

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      lastname: value,
    }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      age: Number(value),
    }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      city: value,
    }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <ProfilePageHeader />
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeLastName={onChangeLastName}
        onChangeFirstName={onChangeFirstName}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
      />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;

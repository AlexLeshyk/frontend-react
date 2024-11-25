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
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
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
    dispatch(profileActions.updateProfile({ first: value }));
  }, [dispatch]);

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    value = value?.replace(/\D/g, '');
    dispatch(profileActions.updateProfile({ age: Number(value) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((value: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }));
  }, [dispatch]);

  const onChangeCountry = useCallback((value: Country) => {
    dispatch(profileActions.updateProfile({ country: value }));
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
        onChangeAvatar={onChangeAvatar}
        onChangeUsername={onChangeUsername}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;

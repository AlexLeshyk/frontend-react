import {
  fetchProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadOnly,
  profileActions,
  ProfileCard,
  profileReducer,
  getProfileForm,
  getProfileValidateErrors,
  ValidateProfileError,
} from 'entities/Profile';
import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useInitialEffect } from 'shared/hooks';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Page, Text } from 'shared/ui';
import { TextTheme } from 'shared/ui/Text/Text.model';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const initialReducers: ReducersList = {
  profile: profileReducer,
};
const ProfilePage = () => {
  const { t } = useTranslation('profile');

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const validateErrorsTranslates = useMemo(() => ({
    [ValidateProfileError.INCORRECT_AGE]: t('Incorrect Age'),
    [ValidateProfileError.INCORRECT_CITY]: t('Incorrect City'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect User'),
    [ValidateProfileError.NO_DATA]: t('No Data'),
    [ValidateProfileError.SERVER_ERROR]: t('Server error'),
  }), [t]);

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

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
      <Page>
        <ProfilePageHeader />
        {validateErrors?.length && validateErrors.map((err) => (
          <Text key={err} theme={TextTheme.ERROR} text={validateErrorsTranslates[err]} />))}
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
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;

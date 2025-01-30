import cx from 'clsx';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Text, VStack } from 'shared/ui';
import { useSelector } from 'react-redux';
import { useAppDispatch, useInitialEffect } from 'shared/hooks';
import { TextTheme } from 'shared/ui/Text/Text.model';
import { ProfileCard } from 'entities/Profile';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';
import { TextSize } from 'shared/ui/Text/Text';
import {
  getProfileForm,
  getProfileError,
  getProfileIsLoading,
  getProfileReadOnly,
  getProfileValidateErrors,
} from '../../model/selectors/getProfileData';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { ValidateProfileError } from '../../model/types/EditableProfileCardModel';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props;

  const { t } = useTranslation('profile');

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(getProfileValidateErrors);

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
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <VStack max gap="12" className={cx({ [className as string]: className })}>
        <EditableProfileCardHeader />
        {validateErrors?.length && validateErrors.map((err) => (
          <Text
            key={err}
            theme={TextTheme.ERROR}
            text={validateErrorsTranslates[err]}
            size={TextSize.S}
            data-testid="EditableProfileCard.Error"
          />
        ))}
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
      </VStack>
    </DynamicModuleLoader>
  );
});

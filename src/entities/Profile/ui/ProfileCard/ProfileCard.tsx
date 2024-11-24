import cx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/hooks';
import { Input, Loader, Text } from 'shared/ui';

import { Profile } from 'entities/Profile';
import { TextAlign, TextTheme } from 'shared/ui/Text/Text.model';
import classes from './ProfileCard.module.css';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  readonly?: boolean;
  isLoading?: boolean;
  onChangeFirstName: (value?: string) => void;
  onChangeLastName: (value?: string) => void;
  onChangeCity: (value?: string) => void;
  onChangeAge: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    onChangeLastName,
    onChangeFirstName,
    onChangeCity,
    onChangeAge,
    readonly,
  } = props;

  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  if (isLoading) {
    return (
      <div className={cx({
        [classes.card]: true,
        [classes.loading]: true,
        [className as string]: className,
      })}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={cx({
        [classes.card]: true,
        [classes.error]: true,
        [className as string]: className,
      })}
      >
        <Text
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
          text={t('ProfileTextError')}
          title={t('ProfileError')}
        />
      </div>
    );
  }

  return (
    <div className={cx({
      [classes.card]: true,
      [className as string]: className,
    })}
    >
      <div className={classes.inputWrapper}>
        <Input
          label={t('Name')}
          htmlFor="name"
          value={data?.first}
          placeholder={t('Enter Name')}
          onChange={onChangeFirstName}
          readonly={readonly}
        />
      </div>
      <div className={classes.inputWrapper}>
        <Input
          label={t('Surname')}
          htmlFor="surname"
          value={data?.lastname}
          placeholder={t('Enter LastName')}
          onChange={onChangeLastName}
          readonly={readonly}
        />
      </div>
      <div className={classes.inputWrapper}>
        <Input
          label={t('City')}
          htmlFor="city"
          value={data?.city}
          placeholder={t('Enter City')}
          onChange={onChangeCity}
          readonly={readonly}
        />
      </div>
      <div className={classes.inputWrapper}>
        <Input
          label={t('Age')}
          htmlFor="age"
          value={data?.age}
          placeholder={t('Enter Age')}
          onChange={onChangeAge}
          readonly={readonly}
        />
      </div>
    </div>
  );
};

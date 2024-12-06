/* eslint-disable i18next/no-literal-string */
import cx from 'clsx';
import { useTranslation } from 'react-i18next';
import {
  Avatar, Input, Loader, Skeleton, Text,
} from 'shared/ui';

import { Profile } from 'entities/Profile';
import { TextAlign, TextTheme } from 'shared/ui/Text/Text.model';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import classes from './ProfileCard.module.css';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  readonly?: boolean;
  isLoading?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
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
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
    readonly,
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classes.skeletonBlock}>
        <Skeleton width={100} height={100} border="50%" className={classes.skeletonAvatar} />
        <div className={classes.skeletonWrapper}>
          <Skeleton width={100} height={24} />
          <Skeleton width="100%" height={38} />
        </div>
        <div className={classes.skeletonWrapper}>
          <Skeleton width={100} height={24} />
          <Skeleton width="100%" height={38} />
        </div>
        <div className={classes.skeletonWrapper}>
          <Skeleton width={100} height={24} />
          <Skeleton width="100%" height={38} />
        </div>
        <div className={classes.skeletonWrapper}>
          <Skeleton width={100} height={24} />
          <Skeleton width="100%" height={38} />
        </div>
        <div className={classes.skeletonWrapper}>
          <Skeleton width={100} height={24} />
          <Skeleton width="100%" height={38} />
        </div>
        <div className={classes.skeletonWrapper}>
          <Skeleton width={100} height={24} />
          <Skeleton width="100%" height={38} />
        </div>
        <div className={classes.skeletonWrapper}>
          <Skeleton width={100} height={24} />
          <Skeleton width={120} height={34} />
        </div>
        <div className={classes.skeletonWrapper}>
          <Skeleton width={100} height={24} />
          <Skeleton width={140} height={34} />
        </div>
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
      [classes.editing]: !readonly,
      [className as string]: className,
    })}
    >
      {data?.avatar && <div className={classes.avatarWrapper}><Avatar src={data.avatar} alt="avatar" /></div>}
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
      <div className={classes.inputWrapper}>
        <Input
          label={t('Avatar')}
          htmlFor="avatar"
          value={data?.avatar}
          placeholder={t('Enter Avatar')}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
      </div>
      <div className={classes.inputWrapper}>
        <Input
          label={t('Username')}
          htmlFor="username"
          value={data?.username}
          placeholder={t('Enter Username')}
          onChange={onChangeUsername}
          readonly={readonly}
        />
      </div>
      <div className={classes.inputWrapper}>
        <CurrencySelect value={data?.currency} readonly={readonly} onChange={onChangeCurrency} />
      </div>
      <div className={classes.inputWrapper}>
        <CountrySelect value={data?.country} readonly={readonly} onChange={onChangeCountry} />
      </div>
    </div>
  );
};

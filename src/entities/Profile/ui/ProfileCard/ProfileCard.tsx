import cx from 'clsx';
import { useTranslation } from 'react-i18next';
import { TextAlign, TextTheme } from '@/shared/ui/Text/Text.model';
import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import {
  Avatar, Input, Skeleton, Text, VStack,
} from '@/shared/ui';
import { Profile } from '../../model/types/profileType';
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
      <VStack max gap="12">
        <Skeleton width={100} height={100} border="50%" className={classes.skeletonAvatar} />
        <VStack max gap="8">
          <Skeleton width={100} height={24} />
          <Skeleton width="100%" height={38} />
        </VStack>
        <VStack max gap="8">
          <Skeleton width={100} height={24} />
          <Skeleton width="100%" height={38} />
        </VStack>
        <VStack max gap="8">
          <Skeleton width={100} height={24} />
          <Skeleton width="100%" height={38} />
        </VStack>
        <VStack max gap="8">
          <Skeleton width={100} height={24} />
          <Skeleton width="100%" height={38} />
        </VStack>
        <VStack max gap="8">
          <Skeleton width={100} height={24} />
          <Skeleton width="100%" height={38} />
        </VStack>
        <VStack max gap="8">
          <Skeleton width={100} height={24} />
          <Skeleton width="100%" height={38} />
        </VStack>
        <VStack gap="8">
          <Skeleton width={100} height={24} />
          <Skeleton width={120} height={34} />
        </VStack>
        <VStack gap="8">
          <Skeleton width={100} height={24} />
          <Skeleton width={140} height={34} />
        </VStack>
      </VStack>
    );
  }

  if (error) {
    return (
      <VStack
        max
        gap="12"
        align="center"
        justify="center"
        className={cx({
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
      </VStack>
    );
  }

  return (
    <VStack
      max
      gap="12"
      className={cx({
        [classes.card]: true,
        [classes.editing]: !readonly,
        [className as string]: className,
      })}
    >
      {data?.avatar && <div className={classes.avatarWrapper}><Avatar src={data.avatar} alt="avatar" /></div>}
      <Input
        label={t('Name')}
        htmlFor="name"
        value={data?.first}
        placeholder={t('Enter Name')}
        onChange={onChangeFirstName}
        readonly={readonly}
        data-testid="ProfileCard.firstname"
      />
      <Input
        label={t('Surname')}
        htmlFor="surname"
        value={data?.lastname}
        placeholder={t('Enter LastName')}
        onChange={onChangeLastName}
        readonly={readonly}
        data-testid="ProfileCard.lastname"
      />
      <Input
        label={t('City')}
        htmlFor="city"
        value={data?.city}
        placeholder={t('Enter City')}
        onChange={onChangeCity}
        readonly={readonly}
        data-testid="ProfileCard.city"
      />
      <Input
        label={t('Age')}
        htmlFor="age"
        value={data?.age}
        placeholder={t('Enter Age')}
        onChange={onChangeAge}
        readonly={readonly}
        data-testid="ProfileCard.age"
      />
      <Input
        label={t('Avatar')}
        htmlFor="avatar"
        value={data?.avatar}
        placeholder={t('Enter Avatar')}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <Input
        label={t('Username')}
        htmlFor="username"
        value={data?.username}
        placeholder={t('Enter Username')}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <CurrencySelect value={data?.currency} readonly={readonly} onChange={onChangeCurrency} direction="top left" />
      <CountrySelect value={data?.country} readonly={readonly} onChange={onChangeCountry} direction="top left" />
    </VStack>
  );
};

import cx from 'clsx';

import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/hooks';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';

import { Button, Input, Text } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button.model';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import classes from './ProfileCard.module.css';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className } = props;
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  return (
    <div className={cx({
      [classes.card]: true,
      [className as string]: className,
    })}
    >
      <div className={classes.header}>
        <Text title={t('UserProfile')} />
        <Button theme={ButtonTheme.OUTLINE} className={classes.edit}>{t('Edit')}</Button>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.input}>
          <label htmlFor="name">Name:</label>
          <Input
            id="name"
            value={data?.first}
            placeholder={t('Enter Name')}
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="surname">Surname:</label>
          <Input
            id="surname"
            value={data?.lastname}
            placeholder={t('Enter LastName')}
          />
        </div>

      </div>
    </div>
  );
};

import { useTranslation } from 'react-i18next';
import { Button, Text } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button.model';
import { useSelector } from 'react-redux';
import {
  getProfileData, getProfileReadOnly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/hooks';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';

import classes from './ProfilePageHeader.module.css';

export const ProfilePageHeader = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const readonly = useSelector(getProfileReadOnly);
  const profileData = useSelector(getProfileData);
  const user = useSelector(getUserAuthData);
  const canEdit = profileData?.id === user?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSaveProfile = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classes.header}>
      <Text title={t('UserProfile')} className={classes.title} />
      {canEdit && (
        <div className={classes.btnsWrapper}>
          {readonly
            ? (
              <Button
                theme={ButtonTheme.OUTLINE}
                className={classes.edit}
                onClick={onEdit}
              >
                {t('Edit')}
              </Button>
            )
            : (
              <>
                <Button
                  theme={ButtonTheme.OUTLINE}
                  className={classes.edit}
                  onClick={onCancelEdit}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  theme={ButtonTheme.BACKGROUND_INVERTED}
                  className={classes.save}
                  onClick={onSaveProfile}
                >
                  {t('Save')}
                </Button>
              </>
            )}
        </div>
      )}

    </div>
  );
};

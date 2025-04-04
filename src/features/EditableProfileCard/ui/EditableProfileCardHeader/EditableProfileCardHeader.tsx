import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { ButtonTheme } from '@/shared/ui/Button/Button.model';
import { useAppDispatch } from '@/shared/hooks';
import { getUserAuthData } from '@/entities/User';
import { Button, HStack, Text } from '@/shared/ui';

import { profileActions } from '../../model/slice/profileSlice';
import { getProfileData, getProfileReadOnly } from '../../model/selectors/getProfileData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import classes from './EditableProfileCardHeader.module.css';

export const EditableProfileCardHeader = () => {
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
    <HStack justify="between" max className={classes.header}>
      <Text title={t('UserProfile')} className={classes.title} />
      {canEdit && (
        <div className={classes.btnsWrapper}>
          {readonly
            ? (
              <Button
                theme={ButtonTheme.OUTLINE}
                className={classes.edit}
                onClick={onEdit}
                data-testid="EditableProfileCardHeader.ButtonEdit"
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
                  data-testid="EditableProfileCardHeader.ButtonCancel"
                >
                  {t('Cancel')}
                </Button>
                <Button
                  theme={ButtonTheme.BACKGROUND_INVERTED}
                  className={classes.save}
                  onClick={onSaveProfile}
                  data-testid="EditableProfileCardHeader.ButtonSave"
                >
                  {t('Save')}
                </Button>
              </>
            )}
        </div>
      )}
    </HStack>
  );
};

import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';

const initialReducers: ReducersList = {
  profile: profileReducer,
};
const ProfilePage = () => {
  const { t } = useTranslation('profile');

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div>{t('Profile')}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;

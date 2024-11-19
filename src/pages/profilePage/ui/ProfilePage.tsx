import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/hooks';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';

const initialReducers: ReducersList = {
  profile: profileReducer,
};
const ProfilePage = () => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <ProfileCard />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;

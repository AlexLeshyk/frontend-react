import { VStack, Text } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { t } = useTranslation('profile');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Text text={t('NotProfile')} />;
  }

  return (
    <Page>
      <VStack gap="24" max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;

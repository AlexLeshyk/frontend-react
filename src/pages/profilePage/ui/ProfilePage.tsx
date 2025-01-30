import { VStack } from 'shared/ui';
import { Page } from 'widgets/Page';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page>
      <VStack gap="24" max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;

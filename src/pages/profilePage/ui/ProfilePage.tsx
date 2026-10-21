import { useParams } from 'react-router-dom';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { VStack } from '@/shared/ui';
import { Page } from '@/widgets/Page';
import { ProfileRating } from '@/features/ProfileRating';

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <Page>
      <VStack gap="24" max>
        <EditableProfileCard id={id} />
        <ProfileRating profileId={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;

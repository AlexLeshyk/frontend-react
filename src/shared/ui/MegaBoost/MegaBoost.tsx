import { memo } from 'react';
import { Button, ThemeButton } from '../Button/Button';

interface MegaBoostProps {
  handleClick: () => void
}
export const MegaBoost = memo(({ handleClick }: MegaBoostProps) => {
  console.info('Render Boxes');

  return (
    <Button
      theme={ThemeButton.PRIMARY}
      type="button"
      className="mega-boost-button"
      onClick={handleClick}
    // eslint-disable-next-line i18next/no-literal-string
    >
      MEGA BOOST!
    </Button>
  );
});

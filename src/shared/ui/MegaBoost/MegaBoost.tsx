import { memo } from 'react';
import { Button } from '../Button/Button';
import { ButtonTheme } from '../Button/Button.model';

interface MegaBoostProps {
  handleClick: () => void
}
export const MegaBoost = memo(({ handleClick }: MegaBoostProps) => (
  <Button
    theme={ButtonTheme.PRIMARY}
    type="button"
    className="mega-boost-button"
    onClick={handleClick}
  // eslint-disable-next-line i18next/no-literal-string
  >
    MEGA BOOST!
  </Button>
));

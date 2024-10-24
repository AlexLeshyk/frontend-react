/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, MegaBoost } from 'shared/ui';
import { ThemeButton } from 'shared/ui/Button/Button';

const MainPage = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState<number>(0);

  const handleMegaBoost = useCallback(() => {
    setCount((currentValue) => currentValue + 1234);
  }, []);

  return (
    <div>
      {t('Main Page')}
      Count:
      {' '}
      {count}
      <Button
        theme={ThemeButton.PRIMARY}
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me!
      </Button>
      <div>
        <MegaBoost
          handleClick={handleMegaBoost}
        />
      </div>
    </div>
  );
};

export default MainPage;

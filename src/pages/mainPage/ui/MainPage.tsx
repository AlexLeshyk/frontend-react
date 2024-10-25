/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, MegaBoost } from 'shared/ui';
import { ThemeButton } from 'shared/ui/Button/Button';

const MainPage = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState<number>(0);
  const [inputState, setInputState] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [hasAgreed, setHasAgreed] = useState('');

  const VALID_AGREES = [
    'Yes',
    'No',
  ];

  const initialCheckboxes = {
    anchovies: false,
    chicken: false,
    tomatoes: false,
  };

  const [checkboxState, setCheckboxState] = useState<{[key: string]: boolean}>(initialCheckboxes);

  const checkboxList = Object.keys(initialCheckboxes);

  const handleMegaBoost = useCallback(() => {
    setCount((currentValue) => currentValue + 1234);
  }, []);

  return (
    <div>
      <h2>{t('Main Page')}</h2>
      <form>
        <div>
          <label htmlFor="some" style={{ display: 'block' }}>Count:</label>
          {' '}
          <input
            value={inputState}
            id="some"
            onChange={(event) => {
              setInputState(event.target.value);
            }}
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <legend>Do you agree?</legend>
        <fieldset>
          {VALID_AGREES.map((option) => (
            <div key={option}>
              <input
                type="radio"
                name="agree"
                id={option}
                value={option}
                checked={option === hasAgreed}
                onChange={(event) => {
                  setHasAgreed(event.target.value);
                }}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </fieldset>
        <fieldset>
          {checkboxList.map((option) => (
            <div key={option}>
              <input
                type="checkbox"
                id={option}
                value={option}
                checked={checkboxState[option] === true}
                onChange={(event) => {
                  setCheckboxState({
                    ...checkboxState,
                    [option]: event.target.checked,
                  });
                }}
              />
              <label htmlFor={option}>
                {option}
              </label>
            </div>
          ))}
        </fieldset>
      </form>
      <p>
        <strong>Has agreed:</strong>
        {hasAgreed || 'undefined'}
      </p>
      <div>
        Current Value:
        {' '}
        {inputState}
      </div>
      <div style={{ marginTop: '20px' }}>
        <Button
          theme={ThemeButton.PRIMARY}
          type="button"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click me!
        </Button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <MegaBoost
          handleClick={handleMegaBoost}
        />
      </div>
    </div>
  );
};

export default MainPage;

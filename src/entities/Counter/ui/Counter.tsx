import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const counterValue = useSelector(getCounterValue);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="header-value">{counterValue}</h1>
      <Button data-testid="button-increment" onClick={increment}>{t('increment')}</Button>
      <Button data-testid="button-decrement" onClick={decrement}>{t('decrement')}</Button>
    </div>
  );
};

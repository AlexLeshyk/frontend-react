import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownDirection } from '@/shared/types';
import { ListBox } from '@/shared/ui';
import { Currency } from '../../model/types/currency';

const options = [
  { value: Currency.EUR, name: Currency.EUR },
  { value: Currency.USD, name: Currency.USD },
  { value: Currency.RUB, name: Currency.RUB },
];

interface CurrencySelectPorps {
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
}

export const CurrencySelect = ({
  value, onChange, readonly, direction,
}: CurrencySelectPorps) => {
  const { t } = useTranslation();

  const onChangeCurrency = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <ListBox
      value={value}
      items={options}
      onChange={onChangeCurrency}
      readonly={readonly}
      label={t('Currency')}
      defaultValue={t('Currency')}
      direction={direction}
    />
  );
};

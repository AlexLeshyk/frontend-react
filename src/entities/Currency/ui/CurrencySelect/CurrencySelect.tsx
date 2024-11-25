import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui';
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
}

export const CurrencySelect = ({ value, onChange, readonly }: CurrencySelectPorps) => {
  const { t } = useTranslation();

  const onChangeCurrency = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <Select
      label={t('Currency')}
      options={options}
      value={value}
      onChange={onChangeCurrency}
      readonly={readonly}
    />
  );
};

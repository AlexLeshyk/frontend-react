import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui';
import { Country } from '../../model/types/country';

const options = [
  { value: Country.Armenia, name: Country.Armenia },
  { value: Country.Belarus, name: Country.Belarus },
  { value: Country.Kazakhstan, name: Country.Kazakhstan },
  { value: Country.Russia, name: Country.Russia },
  { value: Country.Ukraine, name: Country.Ukraine },
];

interface CountrySelectPorps {
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

export const CountrySelect = ({ value, onChange, readonly }: CountrySelectPorps) => {
  const { t } = useTranslation();

  const onChangeCurrency = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <Select
      label={t('Country')}
      options={options}
      value={value}
      onChange={onChangeCurrency}
      readonly={readonly}
    />
  );
};

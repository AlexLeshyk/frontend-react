import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui';
import { Country } from '../../model/types/country';

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

  const options = useMemo(() => [
    { value: Country.Armenia, name: t('Armenia') },
    { value: Country.Belarus, name: t('Belarus') },
    { value: Country.Kazakhstan, name: t('Kazakhstan') },
    { value: Country.Russia, name: t('Russia') },
    { value: Country.Ukraine, name: t('Ukraine') },
  ], [t]);

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

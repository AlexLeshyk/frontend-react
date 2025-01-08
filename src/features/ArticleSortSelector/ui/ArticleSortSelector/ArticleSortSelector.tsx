import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { SelectOptions } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types';
import { Select } from 'shared/ui';
import cx from 'clsx';
import { ArticleSortField } from 'entities/Article';
import classes from './ArticleSortSelector.module.css';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (order: SortOrder) => void;
  onChangeSort: (sort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className, onChangeOrder, onChangeSort, order, sort,
  } = props;

  const { t } = useTranslation('articleList');

  const orderOptions = useMemo<Array<SelectOptions<SortOrder>>>(() => [
    {
      value: 'asc',
      name: t('Increase'),
    },
    {
      value: 'desc',
      name: t('Descend'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<Array<SelectOptions<ArticleSortField>>>(() => [
    {
      value: ArticleSortField.CREATED,
      name: t('Date'),
    },
    {
      value: ArticleSortField.TITLE,
      name: t('Name'),
    },
    {
      value: ArticleSortField.VIEWS,
      name: t('Views'),
    },
  ], [t]);

  return (
    <div className={cx({
      [classes.wrapper]: true,
      [className as string]: className,
    })}
    >
      <Select
        options={sortFieldOptions}
        label={t('SortBy')}
        value={sort}
        onChange={onChangeSort}
        className={classes.sort}
      />
      <Select
        options={orderOptions}
        label={t('SortBy')}
        value={order}
        onChange={onChangeOrder}
        className={classes.order}
      />
    </div>
  );
});

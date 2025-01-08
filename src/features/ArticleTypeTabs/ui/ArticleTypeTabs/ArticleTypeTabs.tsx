import cx from 'clsx';
import { memo, useMemo } from 'react';
import { ArticleType } from 'entities/Article';
import { TabItem } from 'shared/ui/Tabs/Tabs';
import { Tabs } from 'shared/ui';
import { useTranslation } from 'react-i18next';

export interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (tab: TabItem<ArticleType>) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, onChangeType, value } = props;

  const { t } = useTranslation('articleList');

  const typeTabs = useMemo<Array<TabItem<ArticleType>>>(() => [
    {
      value: ArticleType.ALL,
      content: t('All'),
    },
    {
      value: ArticleType.IT,
      content: t('IT'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Science'),
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Economics'),
    },
  ], [t]);

  return (
    <Tabs
      tabs={typeTabs}
      value={value}
      onTabClick={onChangeType}
      className={cx({ [className as string]: className })}
    />

  );
});

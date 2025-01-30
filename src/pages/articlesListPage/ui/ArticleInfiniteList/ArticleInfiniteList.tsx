import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui';
import { TextTheme } from 'shared/ui/Text/Text.model';
import { getArticles } from '../../model/slice/articlesPageSlice';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView }
  from '../../model/selectors/articlesPageSelectors';
import classes from './ArticleInfiniteList.module.css';

export const ArticleInfiniteList = () => {
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  const { t } = useTranslation('articleList');

  if (error) {
    return <Text theme={TextTheme.ERROR} text={t('ArticleListError')} className={classes.error} />;
  }

  return (
    <ArticleList
      articles={articles}
      view={view}
      isLoading={isLoading}
    />
  );
};

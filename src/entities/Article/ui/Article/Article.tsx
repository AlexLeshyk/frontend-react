/* eslint-disable i18next/no-literal-string */
import cx from 'clsx';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Loader } from 'shared/ui';
import { getArticleById } from '../../model/services/getArticleById/getArticleById';
import { articleReducer } from '../../model/slices/articleSlice';
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors/article';

interface ArticleProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  article: articleReducer,
};

export const Article = memo((props: ArticleProps) => {
  const { className, id } = props;
  let content;
  const dispatch = useAppDispatch();
  const { t } = useTranslation('article');
  const data = useSelector(getArticleData);
  const error = useSelector(getArticleError);
  const isLoading = useSelector(getArticleIsLoading);

  useEffect(() => {
    dispatch(getArticleById(id));
  }, [dispatch, id]);

  if (isLoading) {
    content = (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    content = (
      <div>{error}</div>
    );
  }

  if (data) {
    content = (
      <div>Article</div>
    );
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={cx({
        [className as string]: className,
      })}
      >
        {content}
      </div>
    </DynamicModuleLoader>
  );
});

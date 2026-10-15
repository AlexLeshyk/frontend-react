import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from '@/shared/ui/Button/Button.model';
import { Button, HStack, Title } from '@/shared/ui';
import { TitleSize } from '@/shared/ui/Title/Title';
import { articleActions } from '@/entities/Article/model/slices/articleSlice';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { useAppDispatch } from '@/shared/hooks';
import { useUpdateArticle } from '../../api/articleForm';
import {
  getArticleData, getArticleForm, getArticleReadonly,
} from '@/entities/Article/model/selectors/article';
import classes from './EditableArticleCardHeader.module.css';
import { getUserAuthData } from '@/entities/User';
import { validateArticleData } from '../../services/validateArticleData';

const EditableArticleCardHeader = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [updateArticleMutation] = useUpdateArticle();

  const { t } = useTranslation('article');

  const formData = useSelector(getArticleForm);
  const article = useSelector(getArticleData);
  const readonly = useSelector(getArticleReadonly);
  const user = useSelector(getUserAuthData);
  const canEdit = article?.user?.id === user?.id;

  const onEdit = useCallback(() => {
    dispatch(articleActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(articleActions.cancelEdit());
  }, [dispatch]);

  const onSaveArticle = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    const errors = validateArticleData(formData);
    if (errors.length > 0) {
      dispatch(articleActions.setErrors(errors));
      return;
    }
    try {
      await updateArticleMutation({
        ...formData,
        id: article?.id as string,
      });
      navigate(`${RoutePath.article}${article?.id}`);
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(articleActions.setReadOnly(true));
      dispatch(articleActions.setErrors([]));
    }
  }, [article, dispatch, formData, navigate, updateArticleMutation]);

  return (
    <HStack justify="between" max className={classes.header}>
      {canEdit && (
      <div className={classes.btnsWrapper}>
        <Title title={t('FormTitle')} size={TitleSize.H3} className={classes.title} />
        {readonly
          ? (
            <Button
              className={classes.edit}
              onClick={onEdit}
            >
              {t('Edit')}
            </Button>
          )
          : (
            <>
              <Button
                className={classes.edit}
                onClick={onCancelEdit}
              >
                {t('Cancel')}
              </Button>
              <Button
                type="submit"
                onClick={onSaveArticle}
                className={classes.button}
                theme={ButtonTheme.BACKGROUND_INVERTED}
              >
                {t('Submit')}
              </Button>
            </>
          )}
      </div>
      )}
    </HStack>
  );
};

export default EditableArticleCardHeader;

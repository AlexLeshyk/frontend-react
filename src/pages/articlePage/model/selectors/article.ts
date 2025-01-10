import { createSelector } from '@reduxjs/toolkit';
import { getArticleData } from 'entities/Article';
import { getUserAuthData } from 'entities/User';

export const getArticleCanEdit = createSelector(getUserAuthData, getArticleData, (user, article) => {
  if (!article || !user) {
    return false;
  }

  return article.user.id === user.id;
});

import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { getArticleData } from '@/entities/Article';

export const getArticleCanEdit = createSelector(getUserAuthData, getArticleData, (user, article) => {
  if (!article || !user) {
    return false;
  }

  return article.user.id === user.id;
});

import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User';
import { AboutPage } from '@/pages/aboutPage';
import { AdminPanelPage } from '@/pages/adminPanelPage';
import { ArticleEditPage } from '@/pages/articleEditPage';
import { ArticlePage } from '@/pages/articlePage';
import { ArticlesListPage } from '@/pages/articlesListPage';
import { ForbiddenPage } from '@/pages/forbiddenPage';
import { MainPage } from '@/pages/mainPage';
import { NotFoundPage } from '@/pages/notFoundPage';
import { ProfilePage } from '@/pages/profilePage';
import { AppRoutes, RoutePath } from '@/shared/const/router';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: Array<UserRole>;
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_LIST]: {
    path: RoutePath.article_list,
    element: <ArticlesListPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE]: {
    path: `${RoutePath.article}:id`,
    element: <ArticlePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: `${RoutePath.article_create}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: `${RoutePath.article_edit}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: `${RoutePath.admin_panel}`,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
  [AppRoutes.FORBIDDEN]: {
    path: `${RoutePath.forbidden}`,
    element: <ForbiddenPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};

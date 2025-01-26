import { UserRole } from 'entities/User';
import { AboutPage } from 'pages/aboutPage';
import { AdminPanelPage } from 'pages/adminPanelPage';
import { ArticleEditPage } from 'pages/articleEditPage';
import { ArticlePage } from 'pages/articlePage';
import { ArticlesListPage } from 'pages/articlesListPage';
import { MainPage } from 'pages/mainPage';
import { NotFoundPage } from 'pages/notFoundPage';
import { ProfilePage } from 'pages/profilePage';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: Array<UserRole>;
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLE = 'article',
  ARTICLE_LIST = 'article_list',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // + id
  [AppRoutes.ARTICLE_LIST]: '/articles/',
  [AppRoutes.ARTICLE]: '/articles/',
  [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  [AppRoutes.ARTICLE_CREATE]: '/articles/new',
  [AppRoutes.ADMIN_PANEL]: '/admin',
  // last
  [AppRoutes.NOT_FOUND]: '*',
};

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
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};

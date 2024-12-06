import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/icons/about.svg';
import MainIcon from 'shared/icons/home.svg';
import ProfileIcon from 'shared/icons/profile.svg';
import ArticlesIcon from 'shared/icons/articles.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemList : Array<SidebarItemType> = [
      {
        path: RoutePath.main,
        text: 'Main Page',
        Icon: MainIcon,
      },
      {
        path: RoutePath.about,
        text: 'About',
        Icon: AboutIcon,
      },
    ];

    if (userData) {
      sidebarItemList.push(
        {
          path: RoutePath.profile + userData.id,
          text: 'Profile',
          Icon: ProfileIcon,
          authOnly: true,
        },
        {
          path: RoutePath.article_list,
          text: 'Arcicle List',
          Icon: ArticlesIcon,
          authOnly: true,
        },
      );
    }

    return sidebarItemList;
  },
);

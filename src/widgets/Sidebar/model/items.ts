import { SVGProps, VFC } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/icons/about.svg';
import MainIcon from 'shared/icons/home.svg';
import ProfileIcon from 'shared/icons/profile.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: VFC<SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemList : Array<SidebarItemType> = [
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
  {
    path: RoutePath.profile,
    text: 'Profile',
    Icon: ProfileIcon,
    authOnly: true,
  },
];

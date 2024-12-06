import { FC, SVGProps } from 'react';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

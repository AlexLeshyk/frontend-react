import { AboutPage } from "pages/aboutPage";
import { MainPage } from "pages/mainPage";
import { RouteObject, RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

// export const routeConfig: Record<AppRoutes, RouteProps> = {
//   [AppRoutes.MAIN]: {
//     path: RoutePath[AppRoutes.MAIN],
//     element: <MainPage />,
//   },
//   [AppRoutes.ABOUT]: {
//     path: RoutePath[AppRoutes.ABOUT],
//     element: <AboutPage />,
//   },
// };

export const routeConfig: Record<AppRoutes, RouteObject> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
};

import cx from "clsx";

import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
// styles
import "./styles/global.css";
import { Suspense } from "react";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={cx("app", {
        light: theme === Theme.LIGHT,
        dark: theme === Theme.DARK,
      })}
    >
      <Suspense fallback="">
        <Navbar className="navbar" />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

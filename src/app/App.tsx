import cx from "clsx";

import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
// styles
import "./styles/global.css";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

export const App = () => {
  const { theme } = useTheme();

  const MyComponent = () => {
    const { t, i18n } = useTranslation();

    const toggleTranslate = () => {
      i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
      <div>
        <button onClick={toggleTranslate}>{t("Перевод")}</button>
        <div>{t("Тестовый пример")}</div>
      </div>
    );
  };

  return (
    <div
      className={cx("app", {
        light: theme === Theme.LIGHT,
        dark: theme === Theme.DARK,
      })}
    >
      <Suspense fallback="">
        <Navbar className="navbar" />
        <MyComponent />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

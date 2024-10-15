import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import cx from "clsx";

import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/aboutPage";
import { MainPage } from "pages/mainPage";
// styles
import "./styles/global.css";

export const App = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div
      className={cx("app", {
        light: theme === Theme.LIGHT,
        dark: theme === Theme.DARK,
      })}
    >
      <div>
        <button onClick={changeTheme}>Сменить тему</button>
      </div>
      <Link to={"/"}>Главная страница</Link>
      <Link to={"/about"}>О нас</Link>
      <Suspense fallback={<div>...Загрузка</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { AboutPageAsync } from "../pages/aboutPage/AboutPageAsync";
import { MainPageAsync } from "../pages/mainPage/MainPageAsync";
import cx from "clsx";

import "../styles/global.css";
import { Theme } from "../theme/ThemeContext";
import { useTheme } from "../theme/useTheme";
import { classNames } from "../helpers";

export const App = () => {
  const { theme, changeTheme } = useTheme();

  const v1 = classNames("app", { selected: true, else: true }, ["some"]);

  console.log("v1", v1);

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
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

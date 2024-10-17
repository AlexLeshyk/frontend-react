import { Suspense } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
  // let elements = useRoutes(Object.values(routeConfig));
  return (
    <Suspense fallback={<div>...Загрузка</div>}>
      <div className="page-wrapper">
        <Routes>
          {Object.values(routeConfig).map((routeProps) => (
            <Route key={routeProps.path} {...routeProps} />
          ))}
        </Routes>
      </div>
    </Suspense>
  );
};

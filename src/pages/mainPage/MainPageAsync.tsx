import { lazy } from "react";

// так делать не нужно, задержка искуственная
export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        //@ts-ignore
        resolve(import("./MainPage"));
      }, 1500);
    })
);

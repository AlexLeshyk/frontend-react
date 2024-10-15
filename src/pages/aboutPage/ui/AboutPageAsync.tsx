import { lazy } from "react";

export const AboutPageAsync = lazy(() => {
  // так делать не нужно, задержка искуственная
  return new Promise((resolve) => {
    setTimeout(() => {
      //@ts-ignore
      resolve(import("./AboutPage"));
    }, 1500);
  });
});

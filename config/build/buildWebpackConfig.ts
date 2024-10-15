import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoader";
import { buildResolvers } from "./buildResolver";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    devtool: isDev ? "inline-source-map" : undefined,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(paths),
    plugins: buildPlugins(options),
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}

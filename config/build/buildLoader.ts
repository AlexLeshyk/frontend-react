import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders(
  options: BuildOptions
): Array<webpack.RuleSetRule> {
  const { isDev } = options;
  const cssLoader = {
    test: /\.css$/,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDev
              ? "[name]__[local][hash:base64:4]"
              : "[hash:base64:8]",
          },
        },
      },
      // Compiles Sass to CSS
      // "sass-loader",
    ],
  };

  const typescript = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescript, cssLoader];
}

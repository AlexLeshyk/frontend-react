import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.css$/,
    use: [
    // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[name]_[local]_[hash:base64:4]'
              : '[hash:base64:8]',
          },
        },
      },
    // Compiles Sass to CSS
    // "sass-loader",
    ],
  };
}

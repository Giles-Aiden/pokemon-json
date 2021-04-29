module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/pokemon-json/" : "/",
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(pdf)(\?.*)?$/,
          use: [
            {
              loader: "url-loader",
              options: {
                name: "files/[name].[hash:8].[ext]",
              },
            },
          ],
        },
      ],
    },
  },
};

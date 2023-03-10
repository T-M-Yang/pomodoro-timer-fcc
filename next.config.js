/** @type {import('next').NextConfig} */
// const compose = require("next-compose");
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve("url-loader"),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve("file-loader"),
            publicPath: `${config.assetPrefix}/_next/public/`,
            outputPath: `${isServer ? "../" : ""}public/`,
            name: "[name]-[hash].[ext]",
            esModule: config.esModule || false,
          },
        },
      ],
    });

    return config;
  },
};

// webpack(config, options) {
//   config.module.rules.push({
//     test: /\.mp3$/,
//     use: {
//       loader: "file-loader",
//       options: {
//         publicPath: "/public",
//         name: "timesupSound.mp3",
//         outputPath: "/public",
//       },
//     },
//   });
//   return config;
// },

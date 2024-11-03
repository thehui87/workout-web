module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "file-loader"], // or just 'file-loader' if you want to use it as an image
      },
    ],
  },
};

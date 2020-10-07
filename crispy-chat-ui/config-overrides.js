const {override, useEslintRc, overrideDevServer} = require("customize-cra");
const path = require("path");

const devServerConfig = () => config => {
  return {
    ...config,
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        ws: true,
        // secure: false,
      },
    },
  };
};

module.exports = {
  webpack: override(
    useEslintRc(path.resolve(__dirname, ".eslintrc")),
  ),
  devServer: overrideDevServer(devServerConfig()),
};
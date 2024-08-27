const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@context": path.resolve(__dirname, "src/context/"),
      "@types": path.resolve(__dirname, "src/types/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
    },
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig;
    },
  },
  babel: {
    plugins: [
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-nullish-coalescing-operator",
    ],
  },
  eslint: {
    enable: true,
    mode: "file",
  },
  jest: {
    configure: (jestConfig) => {
      return jestConfig;
    },
  },
};

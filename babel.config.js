module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            Api: "./api",
            Constants: "./constants",
            Components: "./components",
            Screens: "./screens",
            Styles: "./styles"
          }
        }
      ]
    ]
  };
};

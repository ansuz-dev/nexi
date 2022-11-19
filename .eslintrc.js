const eslintConfig = require("@keeex/eslint-config");

module.exports = eslintConfig(
  {
    base: true,
    promise: true,
    jsx: true,
    reacthooks: true,
    typescript: "./tsconfig.json",
  },
  {
    env: {
      es6: true,
      node: true,
      browser: true,
    },
    overrides: [
      {
        files: ["*.js", "*.tsx", "*.ts"],
        rules: {
          "react/display-name": "off",
          "import/extensions": "off",
          "max-lines-per-function": "off",
          "@typescript-eslint/naming-convention": "off",
          "@typescript-eslint/no-magic-numbers": "off",
        },
      },
    ],
  },
);

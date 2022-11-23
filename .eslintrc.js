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
          "import/no-anonymous-default-export": "off",
          "react/no-array-index-key": "off",
          "@typescript-eslint/naming-convention": [
            "warn",
            {"selector": "variableLike", "format": ["camelCase", "UPPER_CASE", "PascalCase"]},
          ],
        },
      },
    ],
  },
);

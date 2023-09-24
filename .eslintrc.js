module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "plugin:react/recommended", // eslint-plugin-react
  ],
  plugins: [
    "ycode-tailwindcss", // customize
    "unused-imports", // https://github.com/sweepline/eslint-plugin-unused-imports
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        /* ycode-tailwindcss */
        // "ycode-tailwindcss/no-low-tags": "error",
        "ycode-tailwindcss/tw-original-classname": "error",
        // eslint-plugin-react
        "react/no-unknown-property": ["error", { ignore: ["css"] }], // Upper 'class' to 'className'
        /* unused-imports */
        "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        // "unused-imports/no-unused-imports": "off",
        // "unused-imports/no-unused-vars": [ //I can recommend adding a check for underscores
        //   "warn",
        //   {
        //     vars: "all",
        //     varsIgnorePattern: "^_",
        //     args: "after-used",
        //     argsIgnorePattern: "^_",
        //   },
        // ],
      },
    },
  ],
};

module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    // "plugin:eslint-plugin-next-on-pages/recommended",
  ],
  plugins: [
    // "ycode-tailwindcss", // customize
    // "eslint-plugin-next-on-pages",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        /* ycode-tailwindcss */
        // "ycode-tailwindcss/no-low-tags": "error",
        // "ycode-tailwindcss/tw-original-classname": "error",
        // eslint-plugin-react
        // "react/no-unknown-property": ["error", { ignore: ["css"] }], // Upper 'class' to 'className'
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

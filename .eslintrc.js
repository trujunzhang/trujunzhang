module.exports = {
  root: true,
  extends: ["next/core-web-vitals"],
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
        /* unused-imports */
        "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        // "unused-imports/no-unused-imports": "off",
        "unused-imports/no-unused-vars": [ //I can recommend adding a check for underscores
          "warn",
          {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
          },
        ],
      },
    },
  ],
};

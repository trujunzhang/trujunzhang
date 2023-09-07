module.exports = {
  root: true,
  extends: ["next/core-web-vitals"],
  plugins: [
    "ycode-tailwindcss", // customize
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        // 'ycode-tailwindcss'
        // "ycode-tailwindcss/no-low-tags": "error",
        // "ycode-tailwindcss/tw-original-classname": "error",
      },
    },
  ],
};

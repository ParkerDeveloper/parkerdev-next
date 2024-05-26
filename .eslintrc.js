const { eslint } = require('@siberiacancode/eslint');

module.exports = {
  extends: [
   'next/core-web-vitals'
  ],
  ...eslint.react,
  overrides: [
    ...eslint.react.overrides,
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        tsconfigRootDir: __dirname
      },
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'no-nested-ternary': 'off',
        'promise/always-return': 'off',
        'promise/catch-or-return': 'off'
      }
    }
  ]
};
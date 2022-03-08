module.exports = {
  printWidth: 80,
  trailingComma: 'all',
  semi: false,
  singleQuote: true,
  endOfLine: 'lf',
  importOrder: [
    '^react$',
    '^react-(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: false,
}

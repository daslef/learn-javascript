export const info = {
  MIN_VALUE: {
    text: 'Минимальное положительное представимое число',
    code: `console.log(Number.MIN_VALUE)`,
    codeResult: '5e-324'
  },
  MAX_VALUE: {
    text: 'Максимально большое представимое число',
    code: `console.log(Number.MAX_VALUE)`,
    codeResult: '1.7976931348623157e+308'
  },
  MIN_SAFE_INTEGER: {
    text: 'Минимально возможное целое значение числового типа',
    code: `console.log(Number.MIN_SAFE_INTEGER)`,
    codeResult: '-9007199254740991'
  },
  MAX_SAFE_INTEGER: {
    text: 'Максимально возможное целое значение числового типа',
    code: `console.log(Number.MAX_SAFE_INTEGER)`,
    codeResult: '9007199254740991'
  },
  parseFloat: {
    text: 'Пытается преобразовать строку в вещественное число',
    code: `const n = '148.14'\nconsole.log(parseFloat(n) === x)`,
    codeResult: 'true',
    important: true
  },
  parseInt: {
    text: 'Пытается преобразовать строку в целое число, можно указать исходную систему счисления',
    code: `const n = '148'\nconsole.log(parseInt(n) == x.toFixed())`,
    codeResult: `true`,
    important: true
  },
  toFixed: {
    text: 'Преобразует число в строку с указанным количеством знаков после запятой (может округлить)',
    code: `console.log(x.toFixed(3), x.toFixed(2), x.toFixed(1), x.toFixed())`,
    codeResult: '\n// 148.140  148.14  148.1  148',
    important: true
  },
  toLocaleString: {
    text: 'Преобразует число в строку, учитывая локаль пользователя, с возможностью форматирования',
    code: `console.log(x.toLocaleString('ru'), x.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))`,
    codeResult: '\n// 148,14  ￥148',
    important: true
  },
  toString: {
    text: 'Преобразует число в строку в указанной системе счисления',
    code: `console.log(x.toString(), x.toString(16))`,
    codeResult: '"148.14" "94.23d70a3d70a"',
    important: true
  }
};

export const slideData = {
  Форматирование: ['toString', 'toLocaleString', 'toFixed'],
  Парсинг: ['parseInt', 'parseFloat'],
  Константы: ['MAX_SAFE_INTEGER', 'MIN_SAFE_INTEGER', 'MAX_VALUE', 'MIN_VALUE']
};

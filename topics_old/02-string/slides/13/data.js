export const info = {
  charAt: {
    text: 'Возвращает символ по индексу',
    code: `s.charAt(0)`,
    codeResult: 'L'
  },
  charCodeAt: {
    text: 'Возвращает код символа в UTF-16 по индексу',
    code: `s.charCodeAt(0)`,
    codeResult: '76'
  },
  toLowerCase: {
    text: 'Возвращает новую строку в нижнем регистре',
    code: `s.toLowerCase()`,
    codeResult: 'lorem ipsum dolor sit amet',
    important: true
  },
  toUpperCase: {
    text: 'Возвращает новую строку в верхнем регистре',
    code: `s.toUpperCase()`,
    codeResult: 'LOREM IPSUM DOLOR SIT AMET',
    important: true
  },
  includes: {
    text: 'Возвращает истину, если строка содержит подстроку, иначе ложь',
    code: `s.includes('dol')`,
    codeResult: 'true',
    important: true
  },
  startsWith: {
    text: 'Возвращает истину, если строка начинается с подстроки, иначе ложь',
    code: `s.startsWith('l')`,
    codeResult: 'false',
    important: true
  },
  endsWith: {
    text: 'Возвращает истину, если строка заканчивается на подстроку, иначе ложь',
    code: `s.endsWith('.')`,
    codeResult: 'false',
    important: true
  },
  indexOf: {
    text: 'Возвращает индекс первого вхождения подстроки в строку, либо -1',
    code: `s.indexOf(' ')`,
    codeResult: '5',
    important: true
  },
  lastIndexOf: {
    text: 'Возвращает индекс последнего вхождения подстроки в строку, либо -1',
    code: `s.lastIndexOf('o')`,
    codeResult: '15',
    important: true
  },
  search: {
    text: '(RegEx) Возвращает индекс первого вхождения подстроки в строку, либо -1',
    code: `s.search(/[a-z]/)`,
    codeResult: '1',
    important: true
  },
  substring: {
    text: 'Возвращает кусочек строки между индексами [индекс 1, индекс 2)',
    code: `s.substring(1,4)`,
    codeResult: 'ore',
    important: true
  },
  substr: {
    text: 'Возвращает кусочек строки по индексу начала и длине',
    code: `s.substr(1,4)`,
    codeResult: 'orem'
  },
  slice: {
    text: 'Возвращает кусочек строки от индекса до конца',
    code: `s.slice(20)`,
    codeResult: 'it amet'
  },
  match: {
    text: '(RegEx) Поиск подстроки в строке (подробнее - по ссылке)',
    code: `s.match(/or/)`,
    codeResult:
      '["or", "or", index: 1, groups: undefined, input: ...]\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match'
  },
  matchAll: {
    text: '(RegEx) Поиск всех подстрок в строке (подробнее - по ссылке)',
    code: `Array.from(s.matchAll(/or/))`,
    codeResult:
      '[["or", "or", index: 1, groups: undefined, input: ...],["or", "or", index: 15, groups: undefined, input: ...]]\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll'
  },
  replace: {
    text: 'Возвращает строку заменяя первый pattern (string/RegEx) на replacement (string/function)',
    code: `x.replace('i', '?'), x.replace(/i/, '?'), x.replace(/i/g, '?')`,
    codeResult:
      'Lorem ?psum dolor sit amet, Lorem ?psum dolor sit amet, Lorem ?psum dolor s?t amet\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace',
    important: true
  },
  replaceAll: {
    text: 'Возвращает строку заменяя все pattern (string/RegEx) на replacement (string/function)',
    code: `x.replaceAll('or', '!'), x.replaceAll(/or/, '!')`,
    codeResult: '\n// L!em ipsum dol! sit amet, L!em ipsum dol! sit amet',
    important: true
  },
  trim: {
    text: 'Возвращает строку удаляя пробельные символы',
    code: `\`\${s} consectetur adipiscing elit   \`.trim()`,
    codeResult: '\n // Lorem ipsum dolor sit amet consectetur adipiscing elit',
    important: true
  },
  trimStart: {
    text: 'Возвращает строку удаляя пробельные символы с начала',
    code: `\`   \\t\${s} consectetur adipiscing elit\`.trim()`,
    codeResult: '\n // Lorem ipsum dolor sit amet consectetur adipiscing elit'
  },
  trimEnd: {
    text: 'Возвращает строку удаляя пробельные символы с конца',
    code: `\`\${s} consectetur adipiscing elit   \`.trim()`,
    codeResult: '\n // Lorem ipsum dolor sit amet consectetur adipiscing elit'
  },
  padStart: {
    text: 'Возвращает строку, дополненную с начала подстрокой до требуемой длины',
    code: `s.padStart(35, '?!')`,
    codeResult: '?!?!?!?!?Lorem ipsum dolor sit amet'
  },
  padEnd: {
    text: 'Возвращает строку, дополненную в конце  подстрокой до требуемой длины',
    code: `s.padEnd(35, '-')`,
    codeResult: 'Lorem ipsum dolor sit amet---------'
  },
  split: {
    text: 'Разбивает строку по разделителю и возвращает массив с подстроками',
    code: `s.split(' ')`,
    codeResult: `['Lorem', 'ipsum', 'dolor', 'sit', 'amet']`,
    important: true
  },
  repeat: {
    text: 'Возвращает новую строку из повторов исходной строки',
    code: `s.repeat(2)`,
    codeResult: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit amet'
  },
  concat: {
    text: 'Возвращает результат объединения исходной строки с другой строкой',
    code: `s.concat(' consectetur')`,
    codeResult: 'Lorem ipsum dolor sit amet consectetur'
  },
  toString: {
    text: '',
    code: `new String(s).toString()`,
    codeResult: 'Lorem ipsum dolor sit amet'
  },
  '...': {
    text: 'Самая свежая информация - в спецификации',
    code: `'ECMAScript 2023'`,
    codeResult: 'https://tc39.es/ecma262/',
    important: true
  }
};

export const categories = {
  Символы: ['charAt', 'charCodeAt'],
  'Смена регистра': ['toLowerCase', 'toUpperCase'],
  'Поиск подстроки': [
    'includes',
    'startsWith',
    'endsWith',
    'indexOf',
    'lastIndexOf',
    'search'
  ],
  'Получение подстроки': ['substring', 'substr', 'slice', 'match', 'matchAll'],
  'Замена подстроки': ['replace', 'replaceAll'],
  Предобработка: ['trim', 'trimStart', 'trimEnd'],
  Форматирование: ['padStart', 'padEnd'],
  Прочее: ['split', 'repeat', 'concat', 'toString', '...']
};

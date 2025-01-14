export const categories = {
  Поиск: ['find', 'indexOf', 'lastIndexOf', 'findIndex'],
  Сортировка: ['sort', 'reverse'],
  Проверка: ['includes', 'some', 'every', 'isArray'],
  Итерирование: ['forEach и HOF'],
  Прочее: ['length', 'flat', 'slice', 'copyWithin', 'join', '...']
};

export const info = {
  length: {
    text: '[свойство] Длина массива (наибольший индекс + 1)',
    code: 'fruits.length',
    codeResult: '5'
  },
  find: {
    text: 'Возвращает первый элемент, соответствующий функции, либо undefined',
    code: `fruits.find(el => el === '🍇'), fruits.find(el => el !== '🍇')`,
    codeResult: '🍇, 🍍'
  },
  findIndex: {
    text: 'Возвращает индекс первого элемента, соответствующего функции, либо -1',
    code: `fruits.findIndex(el => el === '🍊')`,
    codeResult: '-1'
  },
  indexOf: {
    text: 'Возвращает индекс первого вхождения элемента либо -1',
    code: `fruits.indexOf('🍍'), fruits.indexOf('🍊')`,
    codeResult: '1, -1'
  },
  lastIndexOf: {
    text: 'Возвращает индекс последнего вхождения элемента либо -1',
    code: `fruits.lastIndexOf('🍇')`,
    codeResult: '3'
  },
  sort: {
    text: 'Сортирует массив in-place (по умолчанию - по таблице кодировки)',
    code: `fruits.sort()`,
    codeResult: `['🍇', '🍇', '🍉', '🍌', '🍍']`
  },
  reverse: {
    text: 'Сортирует массив in-place в обратном порядке элементов',
    code: `fruits.startsWith('l')`,
    codeResult: `['🍉', '🍇', '🍌', '🍍', '🍇', ]`
  },
  includes: {
    text: 'Проверяет, есть ли указанный элемент в массиве',
    code: `fruits.includes(NaN), fruits.includes('🍌')`,
    codeResult: 'false, true'
  },
  some: {
    text: 'Проверяет, удовлетворяет ли хотя бы один элемент массива проверке',
    code: `fruits.some(el => el.length > 1)`,
    codeResult: 'true'
  },
  every: {
    text: 'Проверяет, удовлетворяют ли все элементы массива проверке',
    code: `fruits.every(el => typeof el === 'string')`,
    codeResult: 'true'
  },
  isArray: {
    text: 'Проверяет, является ли нечто массивом',
    code: `fruits.isArray(), 'abc'.isArray()`,
    codeResult: 'true, false'
  },
  'forEach и HOF': {
    text: 'forEach, map, filter, reduce, reduceRight',
    code: `изучим отдельно!`,
    codeResult: 'через несколько занятий!'
  },
  flat: {
    text: '"Уплощает" массив in-place на заданное количество уровней (по-умолчанию 1)',
    code: `[1,[2,3,[4,5,6]]].flat(), [1,[2,3,[4,5,6]]].flat(2), [1,[2,3,[4,5,6]]].flat(Infinite)`,
    codeResult: '[1,2,3,[4,5,6], [1,2,3,4,5,6], [1,2,3,4,5,6]'
  },
  slice: {
    text: 'Возвращает участок массива [индекс1, индекс2), не изменяя исходный',
    code: `fruits.slice(2,4)`,
    codeResult: '🍌, 🍇'
  },
  join: {
    text: 'Формирует строку из всех элементов массива, через разделитель',
    code: `fruits.join(' 🔪 ')`,
    codeResult: '🍇 🔪 🍍 🔪 🍌 🔪 🍇 🔪 🍉'
  },
  '...': {
    text: 'Об остальных методах массивов',
    code: `'MDN'`,
    codeResult:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_properties'
  }
};

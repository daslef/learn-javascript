export const data = {
  push: {
    text: 'Добавляет один или более элементов в конец массива',
    syntax: 'push(element0, /* ... */, elementN) -> new length',
    example: `const items = ['Apple', 'Orange']
items.push('Mango')
const newLength = items.push('Banana', 'Melon');
console.log(items, newLength) // ['Apple', 'Orange', 'Mango', 'Banana', 'Melon'], 5`
  },
  unshift: {
    text: 'Добавляет один или более элементов в начало массива',
    syntax: 'unshift(element0, /* ... */, elementN) -> new length',
    example: `const items = ['Apple', 'Orange']
items.unshift('Mango')
const newLength = items.unshift('Banana', 'Melon');
console.log(items, newLength) // ['Banana', 'Melon', 'Mango, 'Apple', 'Orange'], 5`
  },
  splice: {
    text: 'Вставка по заданному индексу',
    syntax: 'splice(индекс, 0, element1, /* ... */, elementN)',
    example: `const items = ['Apple', 'Orange']
items.splice(1, 0, 'Banana', 'Melon')
console.log(items) // ['Apple', 'Banana', 'Melon', 'Orange']`
  },
  concat: {
    text: 'Конкатенация',
    syntax: 'concat(element1, /* ... */, elementN) -> new Array',
    example: `const bestFruits = ['Apple', 'Orange']
const additionalFruits = ['Mango', 'Melon']
bestFruits.concat(additionalFruits)
console.log(bestFruits) // ['Apple', 'Orange', 'Mango', 'Melon']`
  },
  spread: {
    text: 'Распаковка',
    syntax: '[...oldValues, newValue1, /*...*/, newValueN] -> new Array',
    example: `let items = ['Apple', 'Orange']
items = ['Banana', 'Melon', ...items, 'Mango']
console.log(items) // ['Banana', 'Melon', 'Apple', 'Orange', 'Mango']`
  }
};

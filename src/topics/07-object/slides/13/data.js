export const data = {
  'перебором свойств': {
    text: 'Можно сравнить между собой все свойства объектов',
    syntax: '',
    example: `const isProductsEqual = (product1, product2) => {
  for (const prop of ['id', 'title', 'price']) {
    if (product1[prop] !== product2[prop]) return false
  }
  return true
}
`,
    notes:
      'Хороший способ, если свойств не много и мы уверены в совпадении схем объектов'
  },
  поверхностное: {
    text: 'Здесь к предыдущему способу добавляется проверка всех ключей',
    syntax: '',
    example: `const isProductsEqual = (product1, product2) => {
  const [keys1, keys2] = [Object.keys(object1), Object.keys(object2)]
  if (keys1.length !== keys2.length) return false
  for (let key of keys1) {
    if (object1[key] !== object2[key]) return false
  }
  return true
}`,
    notes:
      'Метод известен как "shallow comparison" и хорошо работает, если значения - примитивы'
  },
  глубокое: {
    text: `Здесь если значение оказывается объектом, а не примитивом, вызываем 
    сравнение уже для этого объекта (рекурсивно)`,
    syntax: '',
    example: ``,
    notes: `Можно реализовать вручную в свободное время, либо использовать 
     библиотеки (например, node.util.isDeepStrictEqual)`
  },
  stringify: {
    text: `Сравнение приведением объекта к строчному json-like виду`,
    syntax: '',
    example: ``,
    notes: `Изучим отдельно на занятии по нотации и модулю JSON`
  }
};

export const data = {
  keys: {
    text: `Возвращает массив имен собственных перечисляемых свойств объекта`,
    example: `const data = { a: '13', b: 40, c: null }
for (const el of data.keys()) {
  console.log(el)
}
// ["a", "b", "c"]
`
  },
  values: {
    text: `Возвращает массив значений собственных перечисляемых свойств объекта`,
    example: `const data = { a: '13', b: 40, c: null }
for (const el of data.values()) {
  console.log(el)
}
// ["13", 40, null]`
  },
  entries: {
    text: `Возвращает массив пар [ключ, значение] собственных перечисляемых свойств объекта`,
    example: `const data = { a: '13', b: null }
for (const [k, v] of data.entries()) {
  console.log('key ', k, ' value ', v)
}
// key a value 13
// key b value null
`
  }
};

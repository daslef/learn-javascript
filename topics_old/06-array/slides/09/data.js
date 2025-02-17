export const data = {
  pop: {
    text: 'Удаляет элемент с конца массива',
    syntax: 'pop() -> deleted item',
    example: `const items = ['Apple', 'Orange', 'Mango', 'Banana']
items.pop()
console.log(items) // ['Apple', 'Orange', 'Mango']
const deletedItem = items.pop()
console.log(items, deletedItem) // ['Apple', 'Orange'], 'Mango'`
  },
  shift: {
    text: 'Удаляет элемент с начала массива',
    syntax: 'unshift() -> deleted item',
    example: `const items = ['Apple', 'Orange', 'Mango', 'Banana']
items.unshift()
const deletedItem = items.unshift();
console.log(items, deletedItem) // ['Mango, 'Banana'], 'Orange'`
  },
  splice: {
    text: 'Удаляет элемент(ы) по заданному индексу',
    syntax:
      'splice(индекс, количество_удаляемых_элементов) -> [удаленные элементы]',
    example: `const items = ['Apple', 'Orange', 'Mango', 'Banana']
items.splice(1, 1)
console.log(items) // ['Apple', 'Mango', 'Banana']
const deletedItems = items.splice(1,2)
console.log(items, deletedItems) // ['Apple'], ['Mango', 'Banana']
`
  }
};

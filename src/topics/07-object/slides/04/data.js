export const code = {
  brackets: `const userBasket = {}
  
const currentTask = { 
  title: 'прибраться в комнате', 
  priority: 'важное', 
  points: 400 
}`,
  constructor: `const o = new Object()`,
  create: `// будет рассмотрено в теме ООП`,
  assign: `// слияние объектов
const target = { a: 1, b: 2 }
const source1 = { b: 4, c: 5 }
const source2 = { d: 10 }
Object.assign(target, source1, source2)
console.log(target) // { a: 1, b: 4, c: 5, d: 10}

// клонирование объекта (одноуровневое)
const obj = { a: 1 }
const copy = Object.assign({}, obj);
console.log(copy) // { a: 1 }
`,
  fromEntries: `const arr = [ 
    ['0', 'a'], 
    ['1', 'b'], 
    ['2', 'c'] 
];

const obj = Object.fromEntries(arr)

console.log(obj) // { 0: "a", 1: "b", 2: "c" }`,
  spread: `const originalObject = { 
  item: '🍅', category: 'veg' 
}

const copyOfObject = {...originalObject}
copyOfObject.item = '🥦'
console.log(originalObject.item) // 🍅
console.log(copyOfObject.item)   // 🥦
`
};

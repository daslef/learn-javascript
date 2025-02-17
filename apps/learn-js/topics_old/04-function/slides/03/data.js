export const code = {
  sumOfNumbers: {
    text: `Найти сумму двух чисел (для трёх пар значений)`,
    plain: `console.log(6 + 8)
console.log(10 + 20)
console.log(20 + 5)`,
    procedure: `
function sum(x, y) {
  result = x + y
}
  
let result;
sum(6, 8)
console.log(result) // 14
sum(10, 20)
console.log(result) // 30
sum(20, 5)
console.log(result) // 25`,
    functional: `function sum(x, y) {
  return x + y
}

console.log(sum(6, 8)) // 14
console.log(sum(10, 20)) // 30
console.log(sum(20, 5)) // 25`,
    paneSize: 'sm',
    interactive: false
  },
  triangleType: {
    text: `Определить тип △ (для двух △), 
    учитывая, что △ существует только тогда, когда 
    сумма любых двух сторон больше третьей`,
    plain: `
// императивный стиль
alert('Первый треугольник')
const a1 = Number(prompt('A: '))
const b1 = Number(prompt('B: '))
const c1 = Number(prompt('C: '))

if (a1 + b1 <= c1 
  || a1 + c1 <= b1 
  || b1 + c1 <= a1) {
  console.log('Не существует!')
} else if (a1 === b1 === c1) {
  console.log('Равносторонний!')
} else if (a1 === b1 
  || a1 === c1 
  || b1 === c1) {
  console.log('Равнобедренный!')
} else if (
  a1**2 + b1**2 === c1**2 
  || a1**2 + c1**2 === b1**2 
  || b1**2 + c1**2 === a1**2) {
  console.log('Прямоугольный!')
} else {
  console.log('Обычный')
}

alert('Второй треугольник')
const a2 = Number(prompt('A: '))
const b2 = Number(prompt('B: '))
const c2 = Number(prompt('C: '))

if (a2 + b2 <= c2 
  || a2 + c2 <= b2 
  || b2 + c2 <= a2) {
  console.log('Не существует!')
} else if (a2 === b2 === c2) {
  console.log('Равносторонний!')
} else if (a2 === b2 
  || a2 === c2 
  || b2 === c2) {
  console.log('Равнобедренный!')
} else if (
  a2**2 + b2**2 === c2**2 
  || a2**2 + c2**2 === b2**2 
  || b2**2 + c2**2 === a2**2) {
  console.log('Прямоугольный!')
} else {
  console.log('Обычный')
}`,
    procedure: `
// процедурный стиль
function checkTriangle(a, b, c) {
  if (a1 + b1 <= c1 
    || a1 + c1 <= b1 
    || b1 + c1 <= a1) {
    console.log('Не существует!')
  } else if (a1 === b1 === c1) {
    console.log('Равносторонний!')
  } else if (a1 === b1 
    || a1 === c1 
    || b1 === c1) {
    console.log('Равнобедренный!')
  } else if (
    a1**2 + b1**2 === c1**2 
    || a1**2 + c1**2 === b1**2 
    || b1**2 + c1**2 === a1**2) {
    console.log('Прямоугольный!')
  } else {
    console.log('Обычный')
  }
}

alert('Первый треугольник')
const a1 = Number(prompt('A: '))
const b1 = Number(prompt('B: '))
const c1 = Number(prompt('C: '))
checkTriangle(a1, b1, c1)

alert('Второй треугольник')
const a2 = Number(prompt('A: '))
const b2 = Number(prompt('B: '))
const c2 = Number(prompt('C: '))
checkTriangle(a2, b2, c2)
`,
    functional: `
// функциональный стиль
function checkTriangle(a, b, c) {
  if (a1 + b1 <= c1 
    || a1 + c1 <= b1 
    || b1 + c1 <= a1) {
    return 'Не существует!'
  } 
  
  if (a1 === b1 === c1) {
    return 'Равносторонний!'
  } else if (a1 === b1 
    || a1 === c1 
    || b1 === c1) {
    return 'Равнобедренный!'
  } else if (
    a1**2 + b1**2 === c1**2 
    || a1**2 + c1**2 === b1**2 
    || b1**2 + c1**2 === a1**2) {
    return 'Прямоугольный!'
  } else {
    return 'Обычный'
  }
}

alert('Первый треугольник')
const a1 = Number(prompt('A: '))
const b1 = Number(prompt('B: '))
const c1 = Number(prompt('C: '))
checkTriangle(a1, b1, c1)

alert('Второй треугольник')
const a2 = Number(prompt('A: '))
const b2 = Number(prompt('B: '))
const c2 = Number(prompt('C: '))
checkTriangle(a2, b2, c2)
`,
    paneSize: 'xs',
    interactive: true
  }
};

export const data = {
  0: {
    text: `Повторяет действия, пока не произойдёт специальное событие завершения цикла. 
    (1) Выполняется [начало], которое обычно инициализирует один или несколько счётчиков.
    (2) Если [условие] истинно, то выполняются выражения, если оно ложно - цикл прерывается. 
    (3) Выполняются выражения из тела цикла. (4) Обновляется [шаг], и управление возвращается к (2).`,
    syntax: `for ([начало]; [условие]; [шаг]) {
  выражения
}`,
    example: `
const books = [
  { text: 'Pure Colour, by Sheila Heti', selected: false }, 
  { text: 'February', selected: true }, 
  { text: 'Fairy Tale, by Stephen King', selected: true }
]

let booksSelected = 0
for (let i = 0; i < books.length; i++) {
  if (books[i].selected) {
    booksSelected++
  }
}
console.log(\`Вы выбрали \${booksSelected} книг\`)
`
  },
  1: {
    text: `Цикл while выполняет выражения пока условие истинно. 
    Условие проверяется на истинность до того, как выполняются выражения в цикле. 
    Если условие истинно, выполняются выражения, а затем условие проверяется снова. 
    Если условие ложно, выполнение приостанавливается и управление переходит 
    к выражению после while.`,
    syntax: `while (условие) {
  выражения
}`,
    example: `
// посчитать сумму цифр от 1 до 9

let sum = 0;
let currentNumber = 1;
while (currentNumber < 10) {
  sum += currentNumber
  currentNumber++
}

// что будет, если строки 6 и 7 поменять местами?
// что будет, если условие поменять на (currentNumber <= 9) ?
`
  },
  2: {
    text: `Цикл do...while работает аналогично циклу while, 
    но, так как условие стоит после тела цикла, он выполнится хотя бы один раз.
    На практике используется довольно редко.`,
    syntax: `do {
  выражения
} while (условие)`,
    example: `
const userNumber = Number(prompt('Введите число: '))
const power = 1

do {
  console.log(Math.pow(userNumber, power))
  power += 1
} while (power < 5)

// что делает эта программа?
// что она выведет для userNumber = 2?
`
  }
};

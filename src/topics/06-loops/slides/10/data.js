export const code = {
  0: `for (i = 0; i < a.length; i++) {
  if (a[i] == specialValue) break
}`,
  1: `let i = 0;
let n = 0
while (i < 5) {
  i++
  if (i == 3) {
    continue
  }
  n += i
}`,
  2: `let sum = 0

while (true) {
  let value = +prompt("Ваше число: ");
  if (!value) break
  sum += value;
}

console.log( 'Сумма: ' + sum )`,
  3: `for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue
  console.log(i) // 1, 3, 5, 7, 9
}`
};

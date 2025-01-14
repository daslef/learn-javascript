export const code = `
/* Пример выходных данных
** 1. { theme: 'function', percent: '24.5%' }
** 2. { theme: 'oop', percent: '25.8%'
** 3. { theme: 'string', percent: '29.1%' }
*/

const data = [
    { theme: 'переменные', questions: 11, correctAnswers: 517, played: 6 },
    { theme: 'типы данных', questions: 9, correctAnswers: 422, played: 6 },
    { theme: 'number', questions: 12, correctAnswers: 388, played: 6 },
    { theme: 'string', questions: 10, correctAnswers: 512, played: 8 },
    { theme: 'conditionals', questions: 8, correctAnswers: 462, played: 7 },
    { theme: 'function', questions: 15, correctAnswers: 588, played: 6 },
    { theme: 'array', questions: 10, correctAnswers: 301, played: 5 },
    { theme: 'object', questions: 8, correctAnswers: 250, played: 4 },
    { theme: 'oop', questions: 13, correctAnswers: 361, played: 4 },
    { theme: 'loops', questions: 12, correctAnswers: 501, played: 5 },
]

// процедурный стиль

function getCorrectAnswersPercent(themeObject) {
  const allAnswers = themeObject.questions * themeObject.played * 4 * 9
  const correctAnswersPercent = themeObject.correctAnswers / allAnswers
  if (correctAnswersPercent < 0.5) {
    rating.push({
      theme: themeObject.theme,
      percent: correctAnswersPercent
    });
  }
}

const rating = [];

for (let i = 0; i < data.length; i++) {
  getCorrectAnswersPercent(data[i])
}

rating.sort((a, b) => a.percent - b.percent);
console.log(rating)

// более функциональный стиль (функция делает только то что должна)

function getCorrectAnswersPercent(themeObject) {
  const allAnswers = themeObject.questions * themeObject.played * 4 * 9
  return themeObject.correctAnswers / allAnswers
}

const rating = []

for (let i = 0; i < data.length; i++) {
  const correctAnswersPercent = getCorrectAnswersPercent(data[i])
  if (correctAnswersPercent < 0.5) {
    rating.push({
      theme: data[i].theme,
      percent: correctAnswersPercent
    })    
  }
}

rating.sort((a, b) => a.percent - b.percent);
console.log(rating)
`;

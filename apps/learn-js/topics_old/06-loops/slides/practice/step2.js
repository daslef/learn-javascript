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

const rating = [];

const allAnswers0 = data[0].questions * data[0].played * 4 * 9;
const correctAnswersPercent0 = data[0].correctAnswers / allAnswers0;
if (correctAnswersPercent0 < 0.5) {
  rating.push({ theme: data[0].theme, percent: correctAnswersPercent0 });
}

const allAnswers1 = data[1].questions * data[1].played * 4 * 9;
const correctAnswersPercent1 = data[1].correctAnswers / allAnswers1;
if (correctAnswersPercent1 < 0.5) {
  if (!rating.length) {
    rating.push({
      theme: data[1].theme,
      percent: correctAnswersPercent1
    });
  } else {
    const ix = rating.findIndex((el) => el.percent > correctAnswersPercent1);
    if (ix === -1) {
      rating.push({
        theme: data[1].theme,
        percent: correctAnswersPercent1
      });
    } else {
      rating.splice(ix, 0, {
        theme: data[1].theme,
        percent: correctAnswersPercent1
      });
    }
  }
}

const allAnswers2 = data[2].questions * data[2].played * 4 * 9;
const correctAnswersPercent2 = data[2].correctAnswers / allAnswers2;
if (correctAnswersPercent2 < 0.5) {
  if (!rating.length) {
    rating.push({
      theme: data[2].theme,
      percent: correctAnswersPercent2
    });
  } else {
    const ix = rating.findIndex((el) => el.percent > correctAnswersPercent2);
    if (ix === -1) {
      rating.push({
        theme: data[2].theme,
        percent: correctAnswersPercent2
      });
    } else {
      rating.splice(ix, 0, {
        theme: data[2].theme,
        percent: correctAnswersPercent2
      });
    }
  }
}

rating.sort((a, b) => a.percent - b.percent);
console.log(rating)

`;

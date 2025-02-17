export const code = {
  brackets:
    'const userBasket = []\nconst adminGroup = ["pj.admin", "moderator"]',
  constructor: `const basket = new Array('Apple', 'Orange')
// ['Apple', 'Orange]

const payments = Array(20100)
// создаст пустой массив длиной 20100!

const arrayOfTenZeros = Array(2).fill({ id: null, price: 0 })
// создаст [
//  { id: null, price: 0 }, 
//  { id: null, price: 0  }
// ]
  `,
  of: `const payments = Array.of(20100) 
// [20100]`,
  from: {
    text: `const symbols = Array.from('sometext')
// ['s','o','m','e','t','e','x','t']`,
    nodes: `const images = document.querySelectorAll('img')
/* NodeList [
  <img 
    class="sitetoolbar__logo sitetoolbar__logo_normal" 
    src="/img/sitetoolbar__logo_ru.svg" 
    style="visibility: hidden;"
  >, 
  <img 
    class="sitetoolbar__logo sitetoolbar__logo_small" 
    src="/img/sitetoolbar__logo_small_ru.svg" 
  >
]
*/

const imageLinks = Array.from(images, (image) => image.src)
// Array [
  '/img/sitetoolbar__logo_ru.svg', 
  '/img/sitetoolbar__logo_small_ru.svg'
]`,
    seq: `const seq = Array.from({ length: 5 }, (_, i) => i)
// [0,1,2,3,4]`
  },
  spread: `const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

const saladCopyWithChicken = [...salad, '🐔']
// ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑', '🐔']`
};

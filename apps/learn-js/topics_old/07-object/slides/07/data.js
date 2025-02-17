export const data = {
  0: {
    text: `Обратившись к свойству по ключу, его значение можно переприсвоить оператором {%=%}`,
    syntax: ``,
    example: `const book = {
  text: 'Pure Colour, by Sheila Heti', 
  selected: false 
}

book.selected = true    // через .
book['selected'] = true // или через []`
  },
  1: {
    text: `Обратившись по ключу, которого еще нет, можно создать новое свойство`,
    syntax: ``,
    example: `const book = {
  text: 'Pure Colour, by Sheila Heti', 
  selected: false 
}

book.tag = 'bestseller'    // через .
book['tag'] = 'bestseller' // или через []`
  },
  2: {
    text: `Для удаления свойства используем оператор {%delete%}. 
На практике, свойства чаще не удаляют, а сбрасывают - устанавливая значение {%undefined%} или {%null%}`,
    syntax: ``,
    example: `const book = {
  text: 'Pure Colour, by Sheila Heti', 
  selected: false 
}

delete book.selected    // через .
delete book['text']     // или через []
console.log(book)       // {}`
  }
};

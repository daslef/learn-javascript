export const code = {
  declaration: {
    syntax: `function имя_функции (параметры) {
  /* тело функции */
}`,
    example: `function hello(name) {
  if (name.startsWith('Mr.')) {
    alert(\`Здравствуйте, \${name}\`)  
  } else {
    alert(\`Привет \${name} 😊\`)
  }
}

hello('Rudy')
hello('Mr. Glance')`
  },
  expression: {
    syntax: `const имя_функции = function (параметры) {
  /* тело функции */
}`,
    example: `const hello = function (name) {
  if (name.startsWith('Mr.')) {
    alert(\`Здравствуйте, \${name}\`)  
  } else {
    alert(\`Привет \${name} 😊\`)
  }
}

hello('Rudy')
hello('Mr. Glance')`
  },
  arrow: {
    syntax: `// для простых действий
const имя_функции = (параметры) => возвращаемый_ответ

// для более сложных случаев
const имя_функции = (параметры) => {
  /* тело функции */
}`,
    example: `const hello = function (name) {
  if (name.startsWith('Mr.')) {
    alert(\`Здравствуйте, \${name}\`)  
  } else {
    alert(\`Привет \${name} 😊\`)
  }
}

hello('Rudy')
hello('Mr. Glance')`
  }
};

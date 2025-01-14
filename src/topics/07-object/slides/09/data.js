export const code = {
  legacy: {
    global: `const name = 'user23'
const password = '72cjsdai312isuia'

const user = {
  name: name,
  password: password
}`,
    function: `const getUserObject = (name, password) => {
  return {
    name: name, password: password
  }
}

const user = createUserObject('user23', '72cjsdai312isuia')
`
  },
  modern: {
    global: `const name = 'user23'
const password = '72cjsdai312isuia'

const user = {
  name,
  password
}`,
    function: `const getUserObject = (name, password) => {
  return {
    name, password
  }
}

const user = createUserObject('user23', '72cjsdai312isuia')
`,
    combo: `const getUserObject = (name, password) => {
  return {
    name, 
    password: computeHash(password, '31adn?eSZ')
  }
}

const user = createUserObject('user23', '72cjsdai312isuia')`
  }
};

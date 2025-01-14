export const code = {
  declaration: {
    syntax: `def имя_функции (параметры):
  /* тело функции */
`,
    example: `
# процедурный подход
def hello(name):
  if name.startswith('Mr.'):
    print("Здравствуйте,", name")  
  else:
    print("Привет,", name, "😊")

hello('Rudy')
hello('Mr. Glance')

# функциональный подход
def hello(name):
  if name.startswith('Mr.'):
    return "Здравствуйте," + name
  else:
    return "Привет," + name + "😊"

print(hello('Rudy'))
print(hello('Mr. Glance'))
`
  },
  typing: {
    syntax: `def имя (параметры и типы) -> возвращаемый тип:
  /* тело функции */
`,
    example: `
# процедурный подход
def hello(name: str) -> None:
  if name.startswith('Mr.'):
    print("Здравствуйте,", name")  
  else:
    print("Привет,", name, "😊")

hello('Rudy')
hello('Mr. Glance')

# функциональный подход
def hello(name: str) -> str:
  if name.startswith('Mr.'):
    return "Здравствуйте," + name
  else:
    return "Привет," + name + "😊"

print(hello('Rudy'))
print(hello('Mr. Glance'))
`
  },
  arrow: {
    syntax: `имя_функции = lambda параметры: возвращаемый_ответ`,
    example: `

# синтаксический сахар
hello = lambda name: 
  "Здравствуйте," + name if name.startswith('Mr.') else "Привет," + name + "😊"

print(hello('Rudy'))
print(hello('Mr. Glance'))

# рекомендуемое применение
filtered_users = filter(lambda user: not(user['anonymous']), users)
`
  }
};

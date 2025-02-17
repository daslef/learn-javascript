export const code = {
  sumOfNumbers: {
    text: `Найти сумму двух чисел (для трёх пар значений)`,
    plain: `print(6 + 8)
print(10 + 20)
print(20 + 5)`,
    procedure: `
def print_sum(x, y):
  print(x + y)
  
print_sum(6, 8) // 14
print_sum(10, 20) // 30
print_sum(20, 5) // 25
`,
    functional: `
def compute_sum(x, y):
  return x + y

print(compute_sum(6, 8)) // 14
print(compute_sum(10, 20)) // 30
print(compute_sum(20, 5)) // 25`,
    paneSize: 'sm',
    interactive: false
  },
  triangleType: {
    text: `Определить тип △ (для двух △), 
    учитывая, что △ существует только тогда, когда 
    сумма любых двух сторон больше третьей`,
    plain: `
// императивный стиль
print('Первый треугольник')
a1 = int(input('A: '))
b1 = int(input('B: '))
c1 = int(input('C: '))

if (a1 + b1 <= c1 
  or a1 + c1 <= b1 
  or b1 + c1 <= a1):
  print('Не существует!')
elif (a1 == b1 == c1):
  print('Равносторонний!')
elif (a1 == b1 
  or a1 == c1 
  or b1 == c1):
  print('Равнобедренный!')
elif (
  a1**2 + b1**2 == c1**2 
  or a1**2 + c1**2 == b1**2 
  or b1**2 + c1**2 == a1**2):
  print('Прямоугольный!')
else:
  print('Обычный')

print('Второй треугольник')
a2 = int(input('A: '))
b2 = int(input('B: '))
c2 = int(input('C: '))

if (a2 + b2 <= c2 
  or a2 + c2 <= b2 
  or b2 + c2 <= a2):
  print('Не существует!')
elif (a2 == b2 == c2):
  print('Равносторонний!')
elif (a2 == b2 
  or a2 == c2 
  or b2 == c2):
  print('Равнобедренный!')
elif (
  a2**2 + b2**2 == c2**2 
  or a2**2 + c2**2 == b2**2 
  or b2**2 + c2**2 == a2**2):
  print('Прямоугольный!')
else:
  print('Обычный')
`,
    procedure: `
// процедурный стиль
def check_triangle(a, b, c):
  if (a1 + b1 <= c1 
    or a1 + c1 <= b1 
    or b1 + c1 <= a1):
    print('Не существует!')
  elif (a1 == b1 == c1):
    print('Равносторонний!')
  elif (a1 == b1 
    or a1 == c1 
    or b1 == c1):
    print('Равнобедренный!')
  elif (
    a1**2 + b1**2 == c1**2 
    or a1**2 + c1**2 == b1**2 
    or b1**2 + c1**2 == a1**2):
    print('Прямоугольный!')
  else:
    print('Обычный')

print('Первый треугольник')
a1 = int(input('A: '))
b1 = int(input('B: '))
c1 = int(input('C: '))
check_triangle(a1, b1, c1)

print('Второй треугольник')
a2 = int(input('A: '))
b2 = int(input('B: '))
c2 = int(input('C: '))
check_triangle(a2, b2, c2)
`,
    functional: `
// функциональный стиль
function check_triangle(a, b, c):
  if (a1 + b1 <= c1 
    or a1 + c1 <= b1 
    or b1 + c1 <= a1):
    return 'Не существует!'
  
  if (a1 == b1 == c1):
    return 'Равносторонний!'
  elif (a1 == b1 
    or a1 == c1 
    or b1 == c1):
    return 'Равнобедренный!'
  elif (
    a1**2 + b1**2 == c1**2 
    or a1**2 + c1**2 == b1**2 
    or b1**2 + c1**2 == a1**2):
    return 'Прямоугольный!'
  else:
    return 'Обычный'

print('Первый треугольник')
a1 = int(input('A: '))
b1 = int(input('B: '))
c1 = int(input('C: '))
print(check_triangle(a1, b1, c1))

print('Второй треугольник')
a2 = int(input('A: '))
b2 = int(input('B: '))
c2 = int(input('C: '))
print(check_triangle(a2, b2, c2))
`,
    paneSize: 'xs',
    interactive: true
  }
};

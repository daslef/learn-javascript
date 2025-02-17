export const code = {
  initial: `
  const profile = {
    firstName: 'John',
    lastName: 'Smith',
    "favorite topics": ["math", "biology"],
    isActive: true,
    group: {
      name: 'JavaScript Basics I',
      id: 'jsb1-22'
    },
    getFavoriteTopics() {
      return this['favorite topics'].join(', ')
    }
    getFullName: function() {
      return \`\${this.firstName} \${this.lastName}\`
    } 
  }`,
  dot: `// запись объект.ключ
console.log(profile.firstName) // John
console.log(profile.group.id) // jsb1-22
console.log(profile.age, profile.bio.street) // undefined, ошибка
console.log(profile.getFullName()) // John Smith
console.log(profile.favorite topics) // ошибка
  `,
  brackets: `// запись объект['ключ']
console.log(profile['lastName']) // Smith
console.log(profile['favorite topics']) // ['math', 'biology']

const propertyName = prompt('Какое свойство вас интересует?:') 
// например, isActive
console.log(profile.propertyName) // ошибка
console.log(profile[propertyName]) // true
`
};

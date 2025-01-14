export const code = {
  local: `function findUserById(id) {
  const user = Api.find(id)
  if (user) {
    return user.data
  }
}

findUserById(241224) // корректно
console.log(user) // ошибка`,
  sideEffects: `function getUsersByCompanyId() {
  const companyUsers = Api.find(companyId)
  if (!companyUsers) {
    companyId = null
  }
  return companyUsers.items
}
let companyId = 28847623
getUsersByCompanyId()
console.log(companyId)`
};

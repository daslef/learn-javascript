export const code = {
  local: `
def find_user_by_id(id):
  user = Api.find(id)
  if user:
    return user["data"]

find_user_by_id(241224) // корректно
print(user) // ошибка`,
  sideEffects: `
def get_users_by_company_id():
  companyUsers = Api.find(companyId)
  if (!companyUsers):
    global companyId
    companyId = None

  return companyUsers["items"]
}

company_id = 241224
users = get_users_by_company_id()
print(users)
print(company_id)`
};

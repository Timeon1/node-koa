const { exec } = require('../db/mysql')

const login = async (username, password) => {
  const sql = `
    select username, realname from users where username='${username}' and password='${password}'
  `
  const rows = await exec(sql)
  console.log(rows)
  return rows[0] || {}
}

module.exports = {
  login,
}
const { exec } = require('../db/mysql')

const getList = async (author, keyword) => {
  let sql = `select * from blogs where 1=1 `
  if(author) {
    sql += `and author='${author}'`
  }
  if(keyword) {
    sql += `and title like '%${keyword}%'`
  }
  sql += `order by createtime desc;`
  return await exec(sql)
}

const getDetail = async (id) => {
  let sql = `select * from blogs where id='${id}'`
  console.log('sql', sql)
  const rows = await exec(sql)
  return rows[0]
}

const newBlog = async (blogData = {}) => {
  const { title, content, author } = blogData
  const createTime = Date.now()

  let sql = `insert into blogs (title, content, createtime, author) 
    values ('${title}', '${content}', ${createTime}, '${author}');
  `
  const insertData = await exec(sql)
  console.log(insertData)
  return {
    id: insertData.insertData
  }
}

const updateBlog = async (id, blogData) => {
  const {title, content} = blogData
  const sql = `
    update blogs set title='${title}', content='${content}' where id='${id}'
  `
  const updateData = await exec(sql)
  if(updateData.affectedRows > 0) {
    return true
  } 
  return false
}

const delBlog = async (id, author) => {
  // const sql = `delete from blogs where id='${id}' and author='${author}';`
  const sql = `delete from blogs where id='${id}';`
  console.log('sql', sql)
  const delData = await exec(sql)
  console.log('delData', delData)
  if (delData.affectedRows > 0) {
    return true
  }
  return false
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}
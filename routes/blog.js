// const loginCheck = require('../')
const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { loginCheck } = require('../middleware/loginCheck') 

const router = require('koa-router')()

router.prefix('/api/blog')

router.get('/list', async (ctx, next) => {
  let author = ctx.query.author || ''
  const keyword = ctx.query.keyword || ''
  const listData = await getList(author, keyword)
  ctx.body = new SuccessModel(listData)
})

router.get('/detail', async function(ctx, next) {
  const data = await getDetail(ctx.query.id)
  ctx.body = new SuccessModel(data)
})

router.post('/new', loginCheck, async function (ctx, next) {
  const body = ctx.request.body
  const data = await newBlog(body)
  ctx.body = new SuccessModel(data)
  console.log('body', body)
})

router.post('/update', loginCheck, async (ctx, next) => {
  const { id } = ctx.query;
  const { body } = ctx.request;
  const val = await updateBlog(id, body)
  if(val) {
    ctx.body = new SuccessModel()
  } else {
    ctx.body = new ErrorModel('更新博客失败')
  }
})

router.post('/del', loginCheck, async (ctx, next) => {
  const { id } = ctx.query
  // const val = await delBlog(id, author)
  const val = await delBlog(id)
  if(val) {
    ctx.body = new SuccessModel()
  }else {
    ctx.body = new ErrorModel('删除博客失败')
  }
})

module.exports = router

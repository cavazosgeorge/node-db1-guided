const db = require('../../data/db-config')

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

function get() {
  // select * from posts;
  return db('posts')
  .select('id', 'title', 'contents')
}

function getById(id) {
  // select * from posts where id = 4;
  return db('posts').where({
    id: id,
    title: 'foo'
  })
}

async function create() {
  return 'create wired'
}

async function update() {
  return 'update wired'
}

async function remove() {
  return 'delete wired'
}

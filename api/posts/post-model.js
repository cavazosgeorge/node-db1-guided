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

async function getById() {
  // select * from posts where id = 4;
  return 'getById wired'
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

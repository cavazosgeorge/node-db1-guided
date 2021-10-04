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
  return db('posts')
    .where('id', id)
    .first()
}

async function create(post) {
  // insert into posts (title, contents) values ('newtitle', 'newvalue')
  const arrayOfids = await db('posts')
    .insert(post)
  return getById()
}

async function update() {
  return 'update wired'
}

async function remove() {
  return 'delete wired'
}

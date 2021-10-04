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
  const [id] = await db('posts')
    .insert(post)
  return getById(id)
}

async function update(id, changes) {
  // update posts set title= 'foo', contents = 'bar' where id = 1;
  await db('posts')
    .update(changes)
    .where('id', id)
  return getById(id)
}

async function remove(id) {
  // delete from posts
  // where id = 3;
  const chopped = await getById(id)
  await db('posts')
    .where('id', id)
    .delete()
  return chopped
}

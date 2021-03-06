const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

async function insert(shoe) {
  const [id] = await db("shoes").insert(shoe);
  return db("shoes")
    .where({ id })
    .first();
}

async function update(id, changes) {
  await db("shoes")
    .where({ id })
    .update(changes);
  return db("shoes").where({ id });
}

async function remove(id) {
  await db("shoes")
    .where({ id })
    .del();
}

async function getAll() {
  return await db("shoes");
}

async function findById(id) {
  return await db("shoes")
    .where({ id })
    .first();
}

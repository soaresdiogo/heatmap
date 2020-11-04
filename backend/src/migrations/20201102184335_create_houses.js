exports.up = (knex) => knex.schema.createTable('houses', (t) => {
  t.increments('id').primary();
  t.string('zipCode').notNull();
  t.integer('number').notNull();
  t.float('latitude').notNull();
  t.float('longitude').notNull();
  t.integer('residentNumber').notNull();
});

exports.down = (knex) => knex.schema.dropTable('houses');

module.exports = {
  test: {
    client: 'pg',
    version: '12.4',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'root',
      database: 'houses_heatmap_db_test',
    },
    migrations: {
      directory: 'src/migrations',
    },
    seeds: { directory: 'src/seeds' },
  },
  prod: {
    client: 'pg',
    version: '12.4',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'root',
      database: 'houses_heatmap_db',
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};

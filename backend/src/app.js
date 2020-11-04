const app = require('express')();
const consign = require('consign');
const knex = require('knex');
const knexLogger = require('knex-logger');
const winston = require('winston');
const uuid = require('uuidv4');
const knexfile = require('../knexfile');

app.db = knex(knexfile[process.env.NODE_ENV]);

app.use(knexLogger(app.db));

app.log = winston.createLogger({
  level: 'debug',
  transports: [
    new winston.transports.Console({ format: winston.format.json({ spaces: 1 }) }),
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'warn',
      format: winston.format.combine(winston.format.timestamp(), winston.format.json({ space: 1 })),
    }),
  ],
});

consign({ cwd: 'src', verbose: false })
  .include('./config/middlewares.js')
  .then('./services')
  .then('./routes')
  .then('./config/routes.js')
  .into(app);

app.get('/', (req, res) => {
  app.log.debug('Server on...');
  res.status(200).send();
});

app.use((err, req, res, next) => {
  const { name, message, stack } = err;
  if (name === 'ValidationError') res.status(400).json({ error: message });
  else {
    const id = uuid();
    app.log.error({
      id, name, message, stack,
    });
    res.status(500).json({ id, error: 'Internal error...' });
  }
  next(err);
});

module.exports = app;

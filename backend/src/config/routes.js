module.exports = (app) => {
  app.route('/houses')
    .get(app.routes.houses.findAll)
    .post(app.routes.houses.createNew);
};

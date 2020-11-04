module.exports = (app) => {
  const findAll = () => app.db('houses').select();

  const createNew = (houses) => {
    if (!houses.zipCode) return { error: 'ZipCode is required' };
    if (!houses.number) return { error: 'Number is required' };
    if (!houses.latitude) return { error: 'Latitude is required' };
    if (!houses.longitude) return { error: 'Longitude is required' };
    if (!houses.residentNumber) return { error: 'Residents is required' };
    return app.db('houses').insert(houses, '*');
  };

  return { findAll, createNew };
};

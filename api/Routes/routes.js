const letterAdd = require('../Controllers/letterAdd');
const letterDelete = require('../Controllers/letterDelete');
const letterEdit = require('../Controllers/letterEdit');
const letterGet = require('../Controllers/letterGet');
const letterGetOne = require('../Controllers/letterGetOne');

module.exports = server => {
  server.get('/api/letters/:id', authenticate, letterGet);
  server.get('/api/letter/:id', authenticate, letterGetOne);
  server.route('/api/letters').post(authenticate, letterAdd);
  server.route('/api/letters/:id').delete(authenticate, letterDelete);
  server.route('/api/letters/:id').put(authenticate, letterEdit);
};

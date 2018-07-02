const penpalAdd = require('../Controllers/penpalAdd');
const penpalDelete = require('../Controllers/penpalDelete');
const penpalEdit = require('../Controllers/penpalEdit');
const penpalGet = require('../Controllers/penpalGet');
const penpalGetOne = require('../Controllers/penpalGetOne');

const letterAdd = require('../Controllers/letterAdd');
const letterDelete = require('../Controllers/letterDelete');
const letterEdit = require('../Controllers/letterEdit');
const letterGet = require('../Controllers/letterGet');
const letterGetOne = require('../Controllers/letterGetOne');

module.exports = server => {
  server.get('/api/penpals/:id', authenticate, penpalGet);
  server.get('/api/penpal/:id', authenticate, penpalGetOne);
  server.route('/api/penpals').post(authenticate, penpalAdd);
  server.route('/api/penpals/:id').delete(authenticate, penpalDelete);
  server.route('/api/penpals/:id').put(authenticate, penpalEdit);

  server.get('/api/letters/:id', authenticate, letterGet);
  server.get('/api/letter/:id', authenticate, letterGetOne);
  server.route('/api/letters').post(authenticate, letterAdd);
  server.route('/api/letters/:id').delete(authenticate, letterDelete);
  server.route('/api/letters/:id').put(authenticate, letterEdit);
};

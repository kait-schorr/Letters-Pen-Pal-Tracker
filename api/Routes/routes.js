const { authenticate } = require('../Utils/middleware');
const userCreate = require('../Controllers/userCreate');
const userLogin = require('../Controllers/userLogin');

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
  server.route('/api/login').post(userLogin);
  server.route('/api/signup').post(userCreate);

  server.route('/api/penpals/:id').get(authenticate, penpalGet);
  server.route('/api/penpal/:id').get(authenticate, penpalGetOne);
  server.route('/api/penpals').post(authenticate, penpalAdd);
  server.route('/api/penpals/:id').delete(authenticate, penpalDelete);
  // server.route('/api/penpals/:id').put(authenticate, penpalEdit);

  server.route('/api/letters/:id').get(authenticate, letterGet);
  server.route('/api/letter/:id').get(authenticate, letterGetOne);
  server.route('/api/letters').post(authenticate, letterAdd);
  server.route('/api/letters/:id').delete(authenticate, letterDelete);
  // server.route('/api/letters/:id').put(authenticate, letterEdit);
};

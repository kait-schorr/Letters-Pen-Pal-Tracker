const { authenticate } = require("../Utils/middleware");
const userCreate = require("../Controllers/userCreate");
const userLogin = require("../Controllers/userLogin");

const penpalAdd = require("../Controllers/penpalAdd");
const penpalDelete = require("../Controllers/penpalDelete");
const penpalEdit = require("../Controllers/penpalEdit");
const penpalGet = require("../Controllers/penpalGet");
const penpalGetOne = require("../Controllers/penpalGetOne");

const letterAdd = require("../Controllers/letterAdd");
const letterDelete = require("../Controllers/letterDelete");
const letterEdit = require("../Controllers/letterEdit");
const letterGet = require("../Controllers/letterGet");
const letterGetByPenpal = require("../Controllers/letterGetByPenpal");
const letterGetOne = require("../Controllers/letterGetOne");

module.exports = server => {
<<<<<<< HEAD
  server.route("/api/login").post(userLogin);
  server.route("/api/signup").post(userCreate);
=======
  // =============== USER ENDPOINTS ======================
  server.route('/api/login').post(userLogin);
  server.route('/api/signup').post(userCreate);
>>>>>>> b374fb00d16106cf3b7182725cbb682542fd94da

  // ================ PENPAL ENDPOINTS ==================
  // :id is to be a User ID, will return a users penpals
  server.route("/api/penpals/:id").get(authenticate, penpalGet);

  // :id is to be a PenPa; ID, will return the penpal object
  server.route("/api/penpal/:id").get(authenticate, penpalGetOne);
  server.route("/api/penpals").post(authenticate, penpalAdd);

  // :id is to be a PenPal ID, will delete the PenPal
  server.route("/api/penpals/:id").delete(authenticate, penpalDelete);

  // :id is to be a PenPal ID, will update that PenPal object
  server.route("/api/penpals/:id").put(authenticate, penpalEdit);

<<<<<<< HEAD
  // :id is to be a User ID, will return all letters a User has
  server.route("/api/letters/:id").get(authenticate, letterGet);
  server
    .route("/api/letters/:id/:penpalid")
    .get(authenticate, letterGetByPenpal);
=======
  // =============== LETTER ENDPOINTS ======================
  // :id is to be a User ID, will return array of letter ObjectId's a User has
  server.route('/api/letters/:id').get(authenticate, letterGet);
>>>>>>> b374fb00d16106cf3b7182725cbb682542fd94da

  // :id is to be a Letter ID, will return that letter's object
  server.route("/api/letter/:id").get(authenticate, letterGetOne);
  server.route("/api/letters").post(authenticate, letterAdd);

  // :id is to be a Letter ID, will delete that letter object
  server.route("/api/letters/:id").delete(authenticate, letterDelete);

  // :id is to be a Letter ID, will update that letter
  server.route("/api/letters/:id").put(authenticate, letterEdit);
};

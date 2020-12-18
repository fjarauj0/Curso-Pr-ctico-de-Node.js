const express = require("express");
const response = require("../../../network/response");

const router = express.Router();
const Controller = require("./controller");

router.get("/", function (req, res) {
  const lista = Controller.list();
  response.succes(req, res, lista, 200);
});

module.exports = router;

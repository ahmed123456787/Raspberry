const express = require("express");
const router = express.Router();
const { prise , gas , temp  ,light } = require("./controll");

router.route("/gas").post(gas);
router.route("/light").post(light);
router.route("/temp").post(temp);
router.route("/prise").post(prise);

module.exports = router;
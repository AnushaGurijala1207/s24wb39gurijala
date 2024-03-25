var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("instrument", { title: "Search results instruments" });
});

module.exports = router;

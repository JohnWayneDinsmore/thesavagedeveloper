var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("What's up from node!!");
});

module.exports = router;
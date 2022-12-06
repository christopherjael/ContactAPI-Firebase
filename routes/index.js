const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    status: "ok",
    message: "Welcome to ContactsAPI",
    endpoint: "/contacts"
  })
});

module.exports = router;

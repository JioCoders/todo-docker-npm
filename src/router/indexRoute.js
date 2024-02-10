var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({ message: 'alive', time: Date.now() });
});

router.get("/health", (req, res) => {
    console.log("Server is up and running!");
    const message = 'Server is up and running healthy';
    res.json({ message });
});

module.exports = router;
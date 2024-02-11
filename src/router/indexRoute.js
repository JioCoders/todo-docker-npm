var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.status(200).json({ message: 'alive', time: Date.now() });
});
router.get("/test", (_req, res) => {
    console.log("Test has been started..");
    res.send("Hello, Jiocoders")
});
router.get("/health", (req, res) => {
    console.log("Server is up and running!");
    const message = 'Server is up and running healthy';
    res.json({ message });
});
router.get('/weather', async (req, res) => {
    if (!req.query.city) {
        res.status(404).json("City is missing");
    } else {
        let city = req.query.city;
        const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`;
        console.log('weather api: ', weatherApi);
        const response = await fetch(weatherApi);

        const data = await response.json();
        res.status(200).json(data);
    }
});

module.exports = router;
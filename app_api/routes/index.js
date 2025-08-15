const express = require("express"); // Express app
const router = express.Router();    // Router logic

const tripsController = require("../controllers/trips");

router
    .route("/trips")
    .get(tripsController.tripsList)     // GET method routes tripList
    .post(tripsController.tripsAddTrip); // POST method adds a trip
;

router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;
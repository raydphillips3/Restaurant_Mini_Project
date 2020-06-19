// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/makeres", function (req, res) {
    res.sendFile(path.join(__dirname, "makeres.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
})


//Create a new Reservation - takes in JSON input
app.post("/api/reservations", function (req, res) {
    var newReservation = req.body;
    console.log(newReservation);

    reservations.push(newReservation);

    res.json(newReservation);
});

    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });

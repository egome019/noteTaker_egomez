const database = require("../db/db.json");
const fs = require("fs");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        fs.readFile(database, function() {
            // code...
        })
    });

    app.post("/api/notes", function(req, res) {
        // code...
    });
}
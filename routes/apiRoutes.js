const database = require("../db/db.json");
const fs = require("fs");



module.exports = function(app) {

    let notesData = [];

    app.get("/api/notes", function(req, res) {
        notesData = fs.readFile(database, "utf8")
        notesData = JSON.parse(notesData);
        res.json(notesData)
    });

    app.post("/api/notes", function(req, res) {
        notesData = fs.readFile(database, "utf8");
        notesData = JSON.parse(notesData);
        req.body.id = notesData.length;
        notesData.push(req.body);
        notesData=JSON.stringify(notesData);
        fs.writeFile(database, notesData, "utf8", function(err) {
            if (err) throw err;
        })
        res.json(JSON.parse(notesData));
    });

    app.delete("/api/notes/:id", function(req, res) {
        notesData = fs.readFile(database, "utf8");
        notesData = JSON.parse(notesData);
        notesData = notesData.filter(function(newNote){
            return newNote.id != req.params.id;
        });
        notesData = JSON.stringify(notesData);
        fs.writeFile(database, notesData, "utf8", function(err) {
            if (err) throw err;
        })
        res.json(notesData);
    })
}
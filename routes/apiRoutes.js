const database = require("../db/db.json");
const fs = require("fs");



module.exports = function(app) {

    let notesData = [];

    app.get("/api/notes", function(req, res) {
        res.json(database)
    });

    app.post("/api/notes", function(req, res) {
        notesData = database;
        console.log(req.body)
        notesData.push(req.body);
        req.body.id = notesData.length;
        console.log(req.body.id)
        notesData=JSON.stringify(notesData);
        fs.writeFile(database.toString(), notesData, "utf8", function(err) {
            if (err) throw err;
        })
        res.json(JSON.parse(notesData));
        console.log(notesData)
    });

    app.delete("/api/notes/:id", function(req, res) {
        notesData = fs.readFileSync(database.toString(), "utf8");
        notesData = JSON.parse(notesData);
        notesData = notesData.filter(function(newNote){
            return newNote.id != req.params.id;
        });
        notesData = JSON.stringify(notesData);
        fs.writeFile(database.toString(), notesData, "utf8", function(err) {
            if (err) throw err;
        })
        res.json(notesData);
    })
}
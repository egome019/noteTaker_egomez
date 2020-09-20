const database = require("../db/db.json");
const fs = require("fs");



module.exports = function(app) {

    let allNotesData = [];

    // this is the get method which displays the db.json file
    app.get("/api/notes", function(req, res) {
        allNotesData = fs.readFileSync("./db/db.json", "utf8");
        allNotesData = JSON.parse(allNotesData);
        res.json(allNotesData)
    });

    // this is the post method which adds new notes to the db.json file
    app.post("/api/notes", function(req, res) {
        if(database.length > 0){
            console.log(allNotesData)
            req.body.id = allNotesData.length;
            allNotesData.push(req.body);
            allNotesData=JSON.stringify(allNotesData);
        }else{
            allNotesData = database;
            req.body.id = allNotesData.length;
            allNotesData.push(req.body);
            allNotesData=JSON.stringify(allNotesData);
        }
        fs.writeFile("./db/db.json", allNotesData, "utf8", function(err) {
            if (err) throw err;
        })
        console.log(allNotesData)
        res.json(JSON.parse(allNotesData));
        console.log("POSTED!")
    });

    // this is the DELETE method
    app.delete("/api/notes/:id", function(req, res) {
        allNotesData = fs.readFileSync("./db/db.json", "utf8");
        allNotesData = JSON.parse(allNotesData);
        allNotesData = allNotesData.filter(function(note){
            return note.id != req.params.id;
        });
        allNotesData = JSON.stringify(allNotesData);
        fs.writeFile("./db/db.json", allNotesData, "utf8", function(err) {
            if (err) throw err;
        })
        console.log(allNotesData)
        res.json(allNotesData);
        console.log("DELETED!!")
    })
}
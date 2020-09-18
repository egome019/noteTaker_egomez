const express = require("express");

const app = express();

const port = process.env.port || 7000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routes



// listner

app.listen(port, function() {
    console.log("App listening on port: " + port);
})
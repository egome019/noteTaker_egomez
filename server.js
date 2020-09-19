const express = require("express");


const app = express();

const port = process.env.port || 7000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

// routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// listner

app.listen(port, function() {
    console.log("App listening on port: " + port);
})
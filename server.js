// dependencies
const express = require("express");

// tells node we are creating an express server
const app = express();
// this is the port
const PORT = process.env.PORT || 7000;
// this helps with data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

// routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// listener

app.listen(PORT, function() {
    console.log("App listening on port: " + PORT);
})
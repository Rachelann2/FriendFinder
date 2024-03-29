var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8022;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './app/public')));



require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


app.listen(PORT, function () {
    console.log('Friend Finder app is listening on PORT: ' + PORT);
});

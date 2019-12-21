var path = require("path");

var friends = require("../data/friends.js");


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });






    app.post("/api/friends", function (req, res) {
        var userInput = req.body;

        var userResponses = userInput.scores;




        var matchName = "";
        var matchPhoto = "";
        // var totalDiff = 10000;





        friends.push(userInput);

        res.json({ status: 'OK', matchName: matchName, matchPhoto: matchPhoto });
    });
};
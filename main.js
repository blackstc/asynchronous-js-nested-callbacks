var fs = require('fs');
var sentence = "";

fs.readFile("files/start.txt", "utf8", function(err, data) {
  var lineArr = data.split("\n");
  var newFile = lineArr[1];
  sentence += lineArr[0]

  fs.readFile("files/" + newFile, "utf8", function(err, data) {
    var lineArr = data.split("\n");
    var newFile = lineArr[1];
    sentence += " " + lineArr[0];

    fs.readFile("files/" + newFile, "utf8", function(err, data) {
      var lineArr = data.split("\n");
      var newFile = lineArr[1];
      sentence += " " + lineArr[0];
    });
  });
});

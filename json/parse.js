var CONFPATH = "./equipment.json";
var fs = require('fs');
var result = JSON.parse(fs.readFileSync(CONFPATH));
for (var i in result) {
  console.log(result[i].id);
}


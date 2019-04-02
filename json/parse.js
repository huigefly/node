var CONFPATH = "./equipment.json";
var CONFPATH1 = "./fire_rate.json";

var fs = require('fs');
var result = JSON.parse(fs.readFileSync(CONFPATH));
for (var i in result) {
  console.log(result[i].id);
}

var result1 = JSON.parse(fs.readFileSync(CONFPATH1));
for (var i in result1) {
  console.log(result1[i].level);
}

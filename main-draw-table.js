var drawIt = require("./lyingoutatable.js").drawIt;
var TextCell = require("./textcell.js").TextCell;
var RTextCell = require("./rtextcell.js").RTextCell;
var UnderlinedCell = require("./underlinedcell.js").UnderlinedCell;

var MOUNTAINS = require("./mountains.json");

console.log(drawIt(MOUNTAINS));

var tc = require("./textcell.js");
var TextCell = tc.TextCell;

/* RTextCell
function RTextCell(text) {
  TextCell.call(this, text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(" ".repeat(width - line.length) + line);
  }
  return result;
};
 End RTextCell */

 class RTextCell extends TextCell {
   constructor(text) {
     super(text);
   }

   draw(width, height) {
     let result = [];
     for (let i = 0; i < height; i++) {
       let line = this.text[i] || "";
       result.push(" ".repeat(width - line.length) + line);
     }
     return result;
   }
 }

module.exports = {
  RTextCell: RTextCell
};

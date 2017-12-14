'use strict';
const imagemin = require('sqip');
const deasync = require('deasync');

module.exports = function(content, file, conf) {
  var result, isReturn = false;
    console.log('filename: ' + file.filename)
    console.log('realpath: ' + file.realpath)
    result = sqip({
      filename: file.filename,
      numberOfPrimitives: 10
    })
  return result;
}
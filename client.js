//main code: run this to test

//test all files working together
var interpretKey = require('./interpretKey.js');
var key = interpretKey.interpretKey('./TheLazySong.mid');
console.log(key);

//test midiParser
// var midiParser = require('./midiParser');
// var answer = midiParser.midiParser('./TheLazySong.mid');
// console.log(answer);

//test findKey
// var findKey = require('./findKey');
// var answer = findKey.findKey('./TheLazySong.mid');
//console.log(answer);


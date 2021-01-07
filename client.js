//test all files working together
var interpretKey = require('./interpretKey.js');
var key = interpretKey.interpretKey('./TheLazySong.mid');

//test midiParser
// var midiParser = require('./midiParser');
// var answer = midiParser.midiParser('./TheLazySong.mid');

//test findKey
// var findKey = require('./findKey');
// var answer = findKey.findKey('./TheLazySong.mid');

console.log(key);
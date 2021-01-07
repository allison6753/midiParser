var interpretKey = require('./interpretKey.js');

var key = interpretKey.interpretKey('./TheLazySong.mid');

// var midiParser = require('./midiParser');

// var answer = midiParser.midiParser('./TheLazySong.mid');

console.log(key);
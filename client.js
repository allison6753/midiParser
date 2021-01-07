//main code: run this to test

//test all files working together
var interpretKey = require('./interpretKey.js');

var key = interpretKey.interpretKey('./MIDI Files/Thelazysong.mid');
console.log("The key signature of The Lazy Song is " + key);

var key = interpretKey.interpretKey('./MIDI Files/Movie_Themes_-_My_Girl.mid');
console.log("The key signature of My Girl is " + key);

var key = interpretKey.interpretKey('./MIDI Files/test.mid');
console.log("The key signature of test is " + key);

var key = interpretKey.interpretKey('./MIDI Files/test2.mid');
console.log("The key signature of test2 is " + key);

var key = interpretKey.interpretKey('./MIDI Files/Brown-Eyed-Girl.mid');
console.log("The key signature of Brown Eyed Girl is " + key);


//test midiParser
// var midiParser = require('./midiParser');
// var answer = midiParser.midiParser('./MIDI Files/TheLazySong.mid');
// console.log(answer);



//test findKey
// var findKey = require('./findKey');
// var answer = findKey.findKey('./MIDI Files/Brown-Eyed-Girl.mid');
//console.log(answer);


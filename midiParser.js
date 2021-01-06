var fs = require('fs')
var midiParser  = require('./main.js');

console.log('Reading ./Thelazysong.mid as base64...')
fs.readFile('./Thelazysong.mid', 'base64', function (err,data) {
  if (err) {
    throw new Error(err);
  }
  console.log('Done!');
  console.log('Converting base64 string to structured Array...')
  var midiArray = midiParser.parse(data);
  console.log('Done!');
  //console.log(midiArray);


  var myEvents = midiArray.track[0].event;
  var notes = new Array(0,0,0,0,0,0,0,0,0,0,0,0);
  //let notes = new Map();
  //var totalCount = myEvents.length;
  myEvents.forEach(function (event) {
    // console.log(event.type);
    //var noteName;
    if (event.type == 9) {
    
        // switch(event.data[0] % 12) {
        //     case 0: noteName = "C";
        //         break;
        //     case 1: noteName = "C#";
        //         break;
        //     case 2: noteName = "D";
        //         break;
        //     case 3: noteName = "D#";
        //         break;
        //     case 4: noteName = "E";
        //         break;
        //     case 5: noteName = "F";
        //         break;
        //     case 6: noteName = "F#";
        //         break;
        //     case 7: noteName = "G";
        //         break;
        //     case 8: noteName = "G#";
        //         break;
        //     case 9: noteName = "A";
        //         break;
        //     case 10: noteName = "A#";
        //         break;
        //     case 11: noteName = "B";
        //         break;
        // }

        var note = event.data[0] % 12;
        notes[note]++;
    }

  });

  console.log(notes);

});
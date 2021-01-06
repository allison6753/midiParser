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
  let notes = new Map();
  var totalCount = myEvents.length;
  myEvents.forEach(function (event) {
    // console.log(event.type);
    var noteName;
    if (event.type == 9) {
    
        switch(event.data[0] % 12) {
            case 0: noteName = "C";
                break;
            case 1: noteName = "C#";
                break;
            case 2: noteName = "D";
                break;
            case 3: noteName = "D#";
                break;
            case 4: noteName = "E";
                break;
            case 5: noteName = "F";
                break;
            case 6: noteName = "F#";
                break;
            case 7: noteName = "G";
                break;
            case 8: noteName = "G#";
                break;
            case 9: noteName = "A";
                break;
            case 10: noteName = "A#";
                break;
            case 11: noteName = "B";
                break;
        }

        if (notes.has(noteName)) {
            notes.set(noteName, ((notes.get(noteName)*(totalCount - 1) / 100 + 1) / totalCount) * 100);
        } else {
            notes.set(noteName, (1 / totalCount) * 100);
        }
    }

  });

  console.log(notes);
  //console.log(midiArray.track[0].event[midiArray.track[0].event.length - 1]);
});


// var fs = require('fs')
// var midiParser  = require('./main.js');

// console.log('Reading ./Thelazysong.mid as base64...')
// fs.readFile('./Thelazysong.mid', 'base64', function (err,data) {
//   if (err) {
//     throw new Error(err);
//   }
//   console.log('Done!');
//   console.log('Converting base64 string to structured Array...')
//   var midiArray = midiParser.parse(data);
//   console.log('Done!');
//   //console.log(midiArray);


//   var myEvents = midiArray.track[0].event;
//   var noteOn = 0;
//   var noteOff = 0;
//   myEvents.forEach(function (event) {
//     // console.log(event.type);
//     if (event.type == 9) noteOn++;
//     else if (event.type == 8) noteOff++
//   });
//   console.log(noteOn);
//   console.log(noteOff);
//   //console.log(midiArray.track[0].event[midiArray.track[0].event.length - 1]);
// });
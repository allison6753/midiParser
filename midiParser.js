var fs = require('fs')
var Main  = require('./main.js');

function midiParser(midiFile) {

    //read midi file
    var data = fs.readFileSync(midiFile, 'base64', function (err,data) {
        if (err) {
            throw new Error(err);
        }
    });

    //parse midi file
    var midiArray = Main.parse(data);
    var myEvents = midiArray.track[0].event;
    var notes = new Array(0,0,0,0,0,0,0,0,0,0,0,0);

    //find frequency of each pitch and store in array
    myEvents.forEach(function (event) {
        if (event.type == 9) {
            var note = event.data[0] % 12;
            notes[note]++;
        }
    });

    return notes;

}

module.exports = { midiParser }
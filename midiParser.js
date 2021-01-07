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


    var notes = new Array(0,0,0,0,0,0,0,0,0,0,0,0);
    //repeat for total number of tracks
    //console.log(midiArray.tracks);
    for (var i = 0; i < midiArray.tracks; i++) {
        var myEvents = midiArray.track[i].event;
        //console.log(myEvents);
        
        //find frequency of each pitch and store in array
        myEvents.forEach(function (event) {
            //console.log("test");
            if (event.type == 9) {
                var note = event.data[0] % 12;
                notes[note]++;
            }
        });
    }

    //console.log(notes);
    return notes;

}

module.exports = { midiParser }
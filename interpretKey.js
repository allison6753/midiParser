var findKey = require('./findKey');

function interpretKey(midiFile) {
    var key = findKey.findKey(midiFile);

    var noteName;
    switch(key) {
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

    return noteName;
}
module.exports = { interpretKey }
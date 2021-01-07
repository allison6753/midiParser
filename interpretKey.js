var findKey = require('./findKey');

function interpretKey(midiFile) {
    var key = findKey.findKey(midiFile);

    var noteName;
    switch(key) {
    case 0: noteName = "C Major";
        break;
    case 1: noteName = "C# Major";
        break;
    case 2: noteName = "D Major";
        break;
    case 3: noteName = "D# Major";
        break;
    case 4: noteName = "E Major";
        break;
    case 5: noteName = "F Major";
        break;
    case 6: noteName = "F# Major";
        break;
    case 7: noteName = "G Major";
        break;
    case 8: noteName = "G# Major";
        break;
    case 9: noteName = "A Major";
        break;
    case 10: noteName = "A# Major";
        break;
    case 11: noteName = "B Major";
        break;
    case 12: noteName = "C Minor";
        break;
    case 13: noteName = "C# Minor";
        break;
    case 14: noteName = "D Minor";
        break;
    case 15: noteName = "D# Minor";
        break;
    case 16: noteName = "E Minor";
        break;
    case 17: noteName = "F Minor";
        break;
    case 18: noteName = "F# Minor";
        break;
    case 19: noteName = "G Minor";
        break;
    case 20: noteName = "G# Minor";
        break;
    case 21: noteName = "A Minor";
        break;
    case 22: noteName = "A# Minor";
        break;
    case 23: noteName = "B Minor";
        break;
    }

    return noteName;
}
module.exports = { interpretKey }
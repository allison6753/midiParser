const { Console } = require("console");
const PearsonCorrelation = require('./pearsonCorrelation');
const midiParser = require('./midiParser');

function findKey(midiFile) {
    //The base profiles for C major and C minor
    var major_profile = [6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88];
    var minor_profile = [6.33, 2.68, 3.52, 5.38, 2.60, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17];

    function rotate(array) {
        array.unshift(array.pop());
        return array;
    }

    var major_profiles = new Array(12);
    var minor_profiles = new Array(12);



    //Generate the full profile set from the base profiles by rotating
    major_profiles[0] = major_profile;
    minor_profiles[0] = minor_profile;
    for (var i = 1; i < 12; i++) {

        //deep copy previous array
        var previousMajor = new Array(12);
        var previousMinor = new Array(12);
        for (var a = 0; a < 12; a++) {
            previousMajor[a] = major_profiles[i-1][a];
            previousMinor[a] = minor_profiles[i-1][a];
        }

        //shift previous array
        var shiftedMajor = rotate(previousMajor);
        var shiftedMinor = rotate(previousMinor);

        //deep copy shifted array into profiles
        major_profiles[i] = new Array(12);
        minor_profiles[i] = new Array(12);
        for (var x = 0; x < 12; x++) {
            major_profiles[i][x] = shiftedMajor[x];
            minor_profiles[i][x] = shiftedMinor[x];
        }

    }

    //console.log(major_profiles);
    //console.log(minor_profiles);



    //concatenate two arrays
    var joined = major_profiles.concat(minor_profiles);



    //find max correlation
    var maxIndex = 0;
    var maxCorrelation = -1;
    for (var i = 0; i < 24; i++) {
        var data = new Array(joined[i], midiParser.midiParser(midiFile))
        const correlation = PearsonCorrelation.pearsonCorrelation(data, 0, 1);
        console.log(correlation);
        if (correlation > maxCorrelation) {
            maxIndex = i;
            maxCorrelation = correlation;
        }
    }

    console.log(maxCorrelation);


    return maxIndex;
}

module.exports = { findKey }
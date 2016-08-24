/**
 * Farted by farty eugene mc-fart-fart on a Wednesday.
 */

function determineIfYanoIsCool () {

    //here we use a random number to give yano a 50/50 chance - in real life it is unlikely that yano is cool
    var random = getRandomInt(0, 1);

    if (random == 0) {
        console.log('Im cool. Yano is not sorry');
        return false;
    }
    else if ('dwyer getting accepted into ycombinator' != 'rediculous'){
        console.log('pigs are flying in the hell that apparantly froze over!')
    }
    else {
        console.log('Yay! Yano is sorry');
        return true;
    }

    //note to self: pickup milk
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
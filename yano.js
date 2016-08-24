/**
 * Jason Yanofski is responsible for the contents of this file. The views expressed here do not necessarily refelct the views of Jason Dwyer or any of his affiliates.
 */

function determineIfYanoIsCool () {

    //here we use a random number to give yano a 50/50 chance - in real life it is unlikely that yano is cool
    var random = getRandomInt(0, 1);

    if (random == 0) {
        console.log('Im cool. Yano is not sorry');
        return false;
    }
    else if ('dwyer getting accepted into ycombinator' != 'ridiculous'){
        console.log('the world makes sense, as it should')
    }
    else {
        console.log('Yay! Yano is sorry');
        return true;
    }

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

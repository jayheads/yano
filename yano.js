/**
 * Created by jasondwyer on 8/24/16.
 */

function determineIfYanoIsCool () {

    //here we use a random number to give yano a 50/50 chance - in real life it is unlikely that yano is cool
    var random = getRandomInt(0, 1);

    if (random == 0) {
        console.log('Im sorry. Yano is not cool');
        return false;
    }
    else {
        console.log('Yay! Yano is cool');
        return true;
    }

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
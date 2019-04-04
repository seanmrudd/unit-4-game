$(document).ready(function() {

var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$('#random-number').text(randomNumber)

// var randomRed = Math.floor(Math.random() * (12)) + 1;
// console.log(randomRed)
// $('#ruby').val(randomRed)

// var randomBlue = Math.floor(Math.random() * (12)) + 1;
// console.log(randomBlue)
// $('#sapphire').val(randomBlue)


// var randomYellow = Math.floor(Math.random() * (12)) + 1;
// console.log(randomYellow)
// $('#amber').val(randomYellow)


// var randomGreen = Math.floor(Math.random() * (12)) + 1;
// console.log(randomGreen)
// $('#emerald').val(randomGreen)

var randomCrystal = Math.floor(Math.random() * (12)) + 1;
$('.crystal').val(randomCrystal)

var totalScore = 0;
var gameScore = totalScore;
var win = 0;
var loss = 0;

$('.crystal').on('click', function () {
    crystalValue = randomCrystal;
    totalScore = totalScore + crystalValue;
    console.log(crystalValue);
    console.log(totalScore);
    $('#total-score').text(gameScore)
})

// $('#ruby').on('click', function () {
//     crystalValue = randomRed;
//     totalScore = totalScore + crystalValue;
//     console.log(crystalValue);
//     console.log(totalScore);
//     $('#total-score').text(gameScore)
// })

// $('#sapphire').on('click', function () {
//     crystalValue = randomBlue;
//     totalScore = totalScore + crystalValue;
//     console.log(crystalValue);
//     console.log(totalScore);
// })

// $('#amber').on('click', function () {
//     crystalValue = randomYellow;
//     totalScore = totalScore + crystalValue;
//     console.log(crystalValue);
//     console.log(totalScore);
// })

// $('#emerald').on('click', function () {
//     crystalValue = randomGreen;
//     totalScore = totalScore + crystalValue;
//     console.log(crystalValue);
//     console.log(totalScore);
// })

if (gameScore === randomNumber) {
    win++;
} else if (gameScore > randomNumber) {
    loss++;
}


$('#win').html(win)
$('#loss').html(loss)
})
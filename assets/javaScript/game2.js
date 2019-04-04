var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$('#random-number').text(randomNumber)


w = Math.floor(Math.random() * (12)) + 1;
x = Math.floor(Math.random() * (12)) + 1;
y = Math.floor(Math.random() * (12)) + 1;
z = Math.floor(Math.random() * (12)) + 1;
var numberOptions = [w, x, y, z];
console.log(numberOptions)


for (var i = 0; i < numberOptions.length; i++) {

  var imageCrystal = $("<img>");


  imageCrystal.addClass("crystal-image");


  imageCrystal.attr("src", "assets/images/ruby.jpg");


  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  $('.crystals-box').append(imageCrystal);
}

var totalScore = 0;
var win = 0;
var loss = 0;


$(".crystal-image").on("click", function () {


  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  totalScore += crystalValue;


  if (totalScore === randomNumber) {
    win++;
    restart();
    console.log(win)
  } else if (totalScore >= randomNumber) {
    ++loss;
    restart();
    console.log(loss)
  }
  
  function restart() {
    var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $('#random-number').text(randomNumber)
    totalScore = 0;
  }

  $('#total-score').text(totalScore)
  $('#win').text(win)
  $('#loss').text(loss)
});
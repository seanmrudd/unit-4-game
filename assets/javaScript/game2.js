
var totalScore = 0;
var win = 0;
var loss = 0;


$(document).ready(function () {

  var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  $('#random-number').text(randomNumber)


  w = Math.floor(Math.random() * (12)) + 1;
  x = Math.floor(Math.random() * (12)) + 1;
  y = Math.floor(Math.random() * (12)) + 1;
  z = Math.floor(Math.random() * (12)) + 1;
  numberOptions = [w, x, y, z];
  console.log(numberOptions)


  var images = ['assets/images/ruby.jpg', 'assets/images/sapphire.jpg', 'assets/images/amber.jpg', 'assets/images/emerald.jpg']

  for (var i = 0; i < images.length; i++) {

    imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr('id', 'crystal'+i);

    imageCrystal.attr("src", images[i]);

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $('.crystals-box').append(imageCrystal);

  }


  function restart() {

    totalScore = 0;

    randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $('#random-number').text(randomNumber)
    console.log(randomNumber);

    w = Math.floor(Math.random() * (12)) + 1;
    x = Math.floor(Math.random() * (12)) + 1;
    y = Math.floor(Math.random() * (12)) + 1;
    z = Math.floor(Math.random() * (12)) + 1;
    numberOptions = [w, x, y, z];
    console.log(numberOptions);

    for (var i = 0; i < images.length; i++) {
      
        $('#crystal'+i).attr("data-crystalvalue", numberOptions[i]);
        console.log(numberOptions[i])
    }
  }

    $(".crystal-image").on("click", function () {

      crystalValue = ($(this).attr("data-crystalvalue"));
      console.log(this)
      crystalValue = parseInt(crystalValue);

      totalScore += crystalValue;

      if (totalScore === randomNumber) {
        win++;
        restart();
        console.log('win: ' + win)
      } else if (totalScore >= randomNumber) {
        ++loss;
        restart();
        console.log('loss: ' + loss)
      }

      $('#total-score').text(totalScore)
      $('#win').text(win)
      $('#loss').text(loss)
    });
  })
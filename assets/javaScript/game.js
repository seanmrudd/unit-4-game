//Declare variables
var totalScore = 0;
var win = 0;
var loss = 0;

//Start game on page being loaded
$(document).ready(function () {

  //A random target number is created and then displayed on the HTML
  var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  $('#random-number').text(randomNumber)


  //Random values are assigned to array.  These numbers are later assigned as values to crystals
  w = Math.floor(Math.random() * (12)) + 1;
  x = Math.floor(Math.random() * (12)) + 1;
  y = Math.floor(Math.random() * (12)) + 1;
  z = Math.floor(Math.random() * (12)) + 1;
  numberOptions = [w, x, y, z];
  console.log(numberOptions)


  //An array of images that the for loop uses to append to the DOM
  var images = ['assets/images/ruby.jpg', 'assets/images/sapphire.jpg', 'assets/images/amber.jpg', 'assets/images/emerald.jpg']

  //For loop to create images on the DOM.  Images are assigned tags, classes, id's, and values
  for (var i = 0; i < images.length; i++) {

    //Gives each image an image tag
    imageCrystal = $("<img>");

    //Gives each image a class
    imageCrystal.addClass("crystal-image");

    //Gives each image an ID
    imageCrystal.attr('id', 'crystal'+i);

    //Pulls images from the image array to use
    imageCrystal.attr("src", images[i]);

    //Gives value to each image
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    //Appends the images to the DOM
    $('.crystals-box').append(imageCrystal);

  }


  //Upon a win or a loss, the game gives new values to the target number and crystal values
  function restart() {

    //Resets user's total score
    totalScore = 0;

    //Gives user a new random target number to reach and prints it on the HTML
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $('#random-number').text(randomNumber)
    console.log(randomNumber);

    //Creates random values for the array that get's used to assign new values to the images
    w = Math.floor(Math.random() * (12)) + 1;
    x = Math.floor(Math.random() * (12)) + 1;
    y = Math.floor(Math.random() * (12)) + 1;
    z = Math.floor(Math.random() * (12)) + 1;
    numberOptions = [w, x, y, z];
    console.log(numberOptions);

    //For loop to reassign new values to images
    for (var i = 0; i < images.length; i++) {
      
        $('#crystal'+i).attr("data-crystalvalue", numberOptions[i]);
        console.log(numberOptions[i])
    }
  }

    //On click event that propels game
    $(".crystal-image").on("click", function () {

      //This refers to it's current object, which is the image that was clicked.  It takes the value of that current object and assigns it to the crystalValue
      crystalValue = ($(this).attr("data-crystalvalue"));
      console.log(this)

      //CrystalValue is a string and is turned into an interger
      crystalValue = parseInt(crystalValue);

      //The total score is = to the previous total score + the new value that is added
      totalScore += crystalValue;

      //If the user hits their target number exactly, then wins increase and game restarts
      if (totalScore === randomNumber) {
        win++;
        restart();
        console.log('win: ' + win)

        //If the user goes over the target number, losses increase and the game restarts
      } else if (totalScore >= randomNumber) {
        ++loss;
        restart();
        console.log('loss: ' + loss)
      }

      //Total Score, Wins and Losses are not effected by the restart.  They keep changing(for total score) or keep increasing
      $('#total-score').text(totalScore)
      $('#win').text(win)
      $('#loss').text(loss)
    });
  })
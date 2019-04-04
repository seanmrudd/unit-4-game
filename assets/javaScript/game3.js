$(document).ready(function() {

    // Here we are provided an initial array of letters.
    // Use this array to dynamically create buttons on the screen.
    var crystals = [''];
    crystals.push()
    // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
    // =================================================================================

    // 1. Create a for-loop to iterate through the letters array.
    for (var i = 0; i < letters.length; i++) {

      // Inside the loop...

      // 2. Create a variable named "letterBtn" equal to $("<button>");
      var letterBtn = $("<button>");

      // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
      letterBtn.addClass("letter-button letter letter-button-color");

      // 4. Then give each "letterBtn" a data-attribute called "data-letter".
      letterBtn.attr("data-letter", letters[i]);

      // 5. Then give each "letterBtns" a text equal to "letters[i]".
      letterBtn.text(letters[i]);

      // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
      $("#buttons").append(letterBtn);

    }
})
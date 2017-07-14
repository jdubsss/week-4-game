//print users target number to page

$(document).ready(function(){
  var randomNum = Math.floor(Math.random()*100 + 20);
  console.log(random);
  $('#numToGuess').html(random);

})


// set up 4 numbers in an array, total numbers and wins/losses printed to page
var crystalValues = [],
    total = 0,
    wins = 0,
    losses = 0,
    random = Math.floor(Math.random()*100 +20);


$('#numWins').html(wins);
$('#numLosses').html(losses);
console.log(wins);
console.log(losses);


//sets up random number for each jewel

function fourNumbers () {
  for (var i = 0; i < 4; i++) {
    var num = Math.floor(Math.random()*10+2);
    crystalValues.push(num);
  }
  console.log(crystalValues);
}

fourNumbers();



//game reset
function reset () {
  random = Math.floor(Math.random()*100 +20);
  console.log(random);
  $('#numToGuess').html(random);
  crystalValues = [];
  fourNumbers();
  total = 0;
  $('#score').html(total);
}


//adds the wins to total
function winner (){
    // alert('You Won!!! Lets keep it going!');
     swal("Good job!", "You Won! Let's keep the momentum going!", "success")
  // $('#outcome .modal-content p').html("You Won!");
  // $('#outcome').show();
  wins++;
  $('#numWins').html(wins);
  reset();
}



//adds the loss to total
function loser (){
  // alert('You Lost. Let' + "'" + 's try again!');
  sweetAlert("Oops...", "You went too far, lets try it again.", "error");
  // $('#outcome .modal-content p').html("You Lose!");
  // $('#outcome').show();
  losses++;
  $('#numLosses').html(losses);
  reset();
}



//sets up clicks for crystals

  $('#one').on('click', function (){
    total = total + crystalValues[0];
    console.log('New total =' + total);
    $('#score').html(total);

    if (total === random) {
      winner();
    } else if ( total > random ) {
      loser();
    }
  })

  $('#two').on('click', function (){
    total = total + crystalValues[1];
    console.log('New total =' + total);
    $('#score').html(total);

    if (total === random) {
      winner();
    } else if ( total > random ) {
      loser();
    }
  })

    $('#three').on('click', function (){
    total = total + crystalValues[2];
    console.log('New total =' + total);
    $('#score').html(total);

    if (total === random) {
      winner();
    } else if ( total > random ) {
      loser();
    }
  })

    $('#four').on('click', function (){
    total = total + crystalValues[3];
    console.log('New total =' + total);
    $('#score').html(total);

    if (total === random) {
      winner();
    } else if ( total > random ) {
      loser();
    }
  })







// // GLOBAL VARIABLES

// var targetNumber = [/*25, 83, 8, 55, 109, 78, 47, 19, 63, 89, 95, 24, 53*/], //list of numbers user needs to meet
//     userGuess, //value of crystal the user selects
//     wins = 0, // number ot times user wins
//     losses = 0, // number of times user loses
//     score = 0, // live score totalling up the crystal values
//               // score = userGuess + userGuess + userGuess.....
//     crystalNumOpt = [10, 5, 3, 2],
//     userTarget; //this is the number that prints to screen
//     // ??counter??; or is wins/losses the counter?


// // FUNCTIONS

// /*start game

// when user visits page for first time a number fills up the 'number to guess' spot
//   targetNumber has number values
//   COMPUTER RANDOMLY SELECTS A VALUE AND PRINTS TO THE PAGE FOR USER TO SEE
//     for-loop through targetNumber and select one number to print to page
// user clicks on the crystals to match the given target
//   computer assigns a crystal a value in the crtsyalVal array. for loop, pick a number and assign to crystal
//     this value changes each time the user plays the game  
//     randomly select number and randomly assign the value to a crystal
//   Computer recognizes the value of crystal clicked and prints value to page
//   User keeps selecting crystals and cmputer adds each value to sum and prints complete score to page
// if users score and the target number match then the user wins and is notified via alert
//   targetNumber === score. win couter goes up 1.
// if users score > targetNumber then user loses and loss counter goes up.
// user closes alert and the game refreshes*/



// //start game

// function startGame() {
//   userTarget = targetNumber[Math.floor(Math.random() * targetNumber.length)]
//   $('#numGuess').html(userTarget);
  
// }

// //link random number to targetnumber

// // for ( var i = 0; i < targetNumber.length; i ++) {};



//   $("#crystal").on("click", function() {

//     // Determining the crystal's value requires us to extract the value from the data attribute.
//     // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
//     // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
//     // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
//     var crystalNumOpt = ($(this).attr("data-crystalvalue"));
//     crystalNumOpt = parseInt(crystalNumOpt);
//     // We then add the crystalValue to the user's "counter" which is a global variable.
//     // Every click, from every crystal adds to the global counter.
//     counter += crystalNumOpt;

//   });







// //compare total score to targetnumber











// //link random number to crystal img


// function initialize(){

// targetNumber = [Math.floor(Math.random() * 101) + 19];

// $("#numGuess").text(targetNumber);

// var numberOptions = ["crystal1", "crystal2", "crystal3", "crystal4"];

// for (var i = 0; i < numberOptions.length; i++) {

//     var images = ["Assets/crystal1.svg", "Assets/crystal3.svg", 
// "Assets/crystal4.svg", "Assets/crystal5.svg"];

//     var imageCrystal = $("<img>");

//     imageCrystal.addClass("crystal");

//     imageCrystal.attr("src", images[Math.floor(Math.random() * 
// images.length)]);

// //this gives the crystals a randomly assigned value
//     imageCrystal.attr("data-crystalvalue", [Math.floor(Math.random() * 11) + 
// 1]);

// imageCrystal.attr[Math.floor(Math.random() * 11) + 1];


// $("#crystal").append(imageCrystal);
// console.log(imageCrystal);

// }


// }

// initialize();





// //add user click values up and print to score

// // $('#crystal').on('click', function () {
// //   // give the crystal a value from the crystalVal array
// //   crystalNumOpt = crystalNumOpt[Math.floor(Math.random() * crystalNumOpt.length)];
// //   console.log(crystalNumOpt);
// //   $('#crystal').attr(crystalValue);

// //   imageCrystal.attr("data-crystalvalue", numberOptions[i]);
// //   $("#crystals").append(imageCrystal);


// // });




// //win counter goes up if user wins

// if (score === targetNumber) {
//   wins ++;
//   // $('#wins').html(print something...)

// }




// //loss counter goes up if user loses
// if (score > targetNumber) {
//   losses ++;
//   // $('#losses').html(print something...)
// }


// // MAIN PROCESS
// startGame();






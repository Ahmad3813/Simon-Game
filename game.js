const colors = ["green", "red", "yellow", "blue"];
var pattern = [];
var userClickedPattern = [];
var level = 1;
var flage = false;

const greenaudio = new Audio("green.mp3");
const redaudio = new Audio("red.mp3");
const yellowaudio = new Audio("yellow.mp3");
const blueaudio = new Audio("blue.mp3");


$(".green").click(function () {
  $(".green").fadeOut(100).fadeIn(100);
  greenaudio.play();
  animatePress("green");
  userClickedPattern.push("green");
  checkPattern(userClickedPattern.length - 1);
});

$(".red").click(function () {
  $(".red").fadeOut(100).fadeIn(100);
  redaudio.play();
  animatePress("red");
  userClickedPattern.push("red");
  checkPattern(userClickedPattern.length - 1);
});

$(".yellow").click(function () {
  $(".yellow").fadeOut(100).fadeIn(100);
  yellowaudio.play();
  animatePress("yellow");
  userClickedPattern.push("yellow");
  checkPattern(userClickedPattern.length - 1);
});
 
$(".blue").click(function () {
  $(".blue").fadeOut(100).fadeIn(100);
  blueaudio.play();
  animatePress("blue");
  userClickedPattern.push("blue");
  checkPattern(userClickedPattern.length - 1);
});

function startgame(){

    userClickedPattern = [];
    addToPattern();
    flage = true; 
    level = 1;
    $("h1").html("Level " + level);
}

$(document).keypress(function (event) {
  if (!flage) {
    startgame();
  } else if ($("h1").text().includes("Gameover")) {
    pattern = [];
    userClickedPattern = [];
    level = 1;
    flage = false;
    $("h1").html("Level 0");
  }
});


function addToPattern() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = colors[randomNumber];
  pattern.push(randomColor);

  $("." + randomColor).fadeOut(100).fadeIn(100);
  animatePress(randomColor);
  new Audio(randomColor + ".mp3").play();
}

//$("body").addClass("game-over");


function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}


function checkPattern(index) {
  if (userClickedPattern[index] === pattern[index]) {
    
    if (userClickedPattern.length === pattern.length) {
        level++;
        $("h1").html("level " + level)
      setTimeout(addToPattern, 1000);
      userClickedPattern = [];
    }
  } else {
    new Audio("wrong.mp3").play();
    $("h1").html("Game Over, Press Any Key To Restart The Game ");
    $("body").addClass("game-over"); 
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);


    flage = false;
    pattern = [];
    userClickedPattern = [];
  }

}



var buttonColours=["red", "blue", "green", "yellow"];

var gamePattern=[];
var userClickedPattern=[];

var started=false;
var level=0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level- "+ level);
        nextSequence();
        started=true;
    }
});

console.log("Two");

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
      }, 100);
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

$(".btn").click(function(){
    var userChosenColour= $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
    console.log(userClickedPattern);

});


function nextSequence(){
    userClickedPattern=[];
    console.log("Three");

    level++;
    $("#level-title").text("Level- "+level);

    var randomNumber= Math.floor(Math.random() * 4);
    var randomChosenColour= buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log("Four");

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    console.log("Five");

    playSound(randomChosenColour);
    console.log("Six");
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]=== userClickedPattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function() {
                nextSequence();
            },1000);
        }
    }
    else{
        console.log("Wrong");

        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        var audio = new Audio("sounds/wrong.mp3");
        audio.play();   
        
        $("h1").text("Game Over, Press Any Key to Restart");

        startOver();

    }
}

function startOver(){
    level=0;
    gamePattern=[];
    started=0;
}




//     console.log(userClickedPattern);
//     console.log(gamePattern);
//     if(level>0)
//     {
//         for(i=0;i<level;i++)
//         {
//             if(userClickedPattern[i] === gamePattern[i])
//                 continue;
//             else{
//                 $("#level-title").text("Game Over");
//                 flag=1;
//                 break;
//             }    
//         }
//         if(flag==0)
//             setTimeout(nextSequence,1000);
//         else
//             flag=1;
//     }

// }
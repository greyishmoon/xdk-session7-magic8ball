/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */

//an array of possible magic 8 ball responses - taken from https://en.wikipedia.org/wiki/Magic_8-Ball
var answers = [
    //postive responses
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    //neutral responses
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    //negative responses
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"];


function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
    
//    intel.xdk.device.setRotateOrientation('landscape');
    
    //set up click event handling for button
  	$('#submitButton').on("click", getAnswer);
    
    //start watching for shake gestures!
    shake.startWatch(getAnswer);
    
}
document.addEventListener("app.Ready", onAppReady, false) ;


//get a random answers
function getAnswer() {
    
    var rand = random();
    var answer = randomAnswer(rand);
        
    console.log("Answer: " + rand + " : " + answer);
    
    $("#responseText").text(answer);
        
        
    //positive answer 
    if(rand <= 10)
    {
        $("#responseText").css('color', 'green'); 
        navigator.notification.beep(1);	
    }
                
    //neutral answer 
    else if(rand <= 15) 
    {
        $("#responseText").css('color', 'blue');
    }
        
    //negative answer
    else 
    {
        $("#responseText").css('color', 'red');
        navigator.vibrate([500, 500, 500]);
    }
}


//returns a randon number between 0-19 inclusive
function random() {
    return Math.round(Math.random() * 20);
}


//returns a random answer from the array
function randomAnswer(rand) {
	return answers[rand];
}
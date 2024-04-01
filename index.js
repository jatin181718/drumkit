var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var kick = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");
var crash = new Audio("sounds/crash.mp3");



for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        
        switch(this.innerHTML){
            case "w" : crash.play();
            break;

            case "a" : kick.play();
            break;
            
            case "s" : tom4.play();
            break;

            case "d" : tom1.play();
            break;

            case "j" : snare.play();
            break;

            case "k" : tom2.play();
            break;

            case "l" : tom3.play();
            break;

        }
        
    });
}


/*
Event liostner for keyboard - add to whole doc
*/

document.addEventListener("keydown", function(event){

    switch(event.key){
        case "w" : crash.play();
        break;

        case "a" : kick.play();
        break;
        
        case "s" : tom4.play();
        break;

        case "d" : tom1.play();
        break;

        case "j" : snare.play();
        break;

        case "k" : tom2.play();
        break;

        case "l" : tom3.play();
        break;

    }
    
})

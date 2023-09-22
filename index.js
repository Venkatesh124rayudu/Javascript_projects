var i;
var length = document.querySelectorAll(".drum").length;
for (i = 0; i <length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    playsound(this.innerHTML);
    AddAnimation(this.innerHTML);
    });
}
document.addEventListener("keypress", function(e){
    playsound(e.key);
    AddAnimation(e.key);
});
function playsound(key){
    switch (key) {
        case "w":
            var sound=new Audio("./sounds/crash.mp3");
        sound.play();
        break;
        case "a":
            var sound=new Audio("./sounds/kick-bass.mp3");
        sound.play();
        break;
        case "s":
            var sound=new Audio("./sounds/snare.mp3");
        sound.play();
        break;
        case "d":
            var sound=new Audio("./sounds/tom-1.mp3");
        sound.play();
        break;
        case "j":
            var sound=new Audio("./sounds/tom-2.mp3");
        sound.play();
        break;
        case "k":
            var sound=new Audio("./sounds/tom-3.mp3");
        sound.play();
        break;
        case "l":
            var sound=new Audio("./sounds/tom-4.mp3");
        sound.play();
        break;
    }
}
function AddAnimation(ele){
    var added=document.querySelector("."+ele);
    added.classList.add("pressed");
    setTimeout(function(){
        added.classList.remove("pressed");
    },100);
}
    
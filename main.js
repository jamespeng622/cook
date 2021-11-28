var main = document.getElementById("button");
var audio = new Audio('resources/soundtrack.mp3');
var body = document.getElementById("body");

var link = document.getElementById("link");




body.addEventListener("click", function(){
    audio.play();
});

main.addEventListener("mouseover", function(){
    main.style.width = "30%";
})

main.addEventListener("mouseout", function(){
    main.style.width = "25%";
})

main.addEventListener("click", function(){
    audio.play();
    link.click();
    //window.open("https://mega.nz/file/ZgIhSAjA#RLjZbNdc9rLTwxi4Br1N2SlgL3hCbOWP2vZ1rM_vtm0")
})

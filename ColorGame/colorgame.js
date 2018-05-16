document.addEventListener("DOMContentLoaded", main,false);

function main(){
    var colors = [
        "rgb(255, 0, 0)",
        "rgb(255, 255, 0)",
        "rgb(0, 255, 0)",
        "rgb(0, 255, 255)",
        "rgb(0, 0, 255)",
        "rgb(255, 0, 255)"
    ];
    var squares = document.querySelectorAll(".square");
    var pickedColor = colors[randomNum(colors.length)];
    var colorDisplay = document.querySelector("#colorDisplay");
    colorDisplay.textContent = pickedColor.toUpperCase();
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].addEventListener("click", function(){
            if(this.style.backgroundColor === pickedColor) {

            } else {
                this.style.backgroundColor = document.body.style.backgroundColor;
            }
        })
    }

}

function randomNum(treshold) {
        var x =  Math.floor(Math.random()*treshold);
        console.log(x);
        return x;

}
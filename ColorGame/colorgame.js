document.addEventListener("DOMContentLoaded", main,false);

function main(){
    var colors = buildRGB();
    var squares = document.querySelectorAll(".square");
    var pickedColor = colors[randomNum(colors.length)];
    var colorDisplay = document.querySelector("#colorDisplay");
    colorDisplay.textContent = pickedColor.toUpperCase();
    
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].addEventListener("click", function(){
            if(this.style.backgroundColor === pickedColor) {

            } else {
                this.style.backgroundColor = "black";
            }
        })
    }

}

function randomNum(treshold) {
        var x =  Math.floor(Math.random()*treshold);
        console.log(x);
        return x;

};
/**
 * build array with random rgb strings
 */
function buildRGB() {
    var colorArr = new Array;  
    for (let i = 0; i < 6; i++) {
        var colorStr = "";
        colorStr = "rgb(" + randomNum(255);
        colorStr += ", " + randomNum(255);
        colorStr += ", " + randomNum(255) +")";
        colorArr.push(colorStr);
    }
    console.log (colorArr);
    return colorArr
}
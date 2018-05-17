document.addEventListener("DOMContentLoaded", main, false);

function main() {
    var numOfSquares = 6;
    var colors = buildRGB(numOfSquares);
    var squares = document.querySelectorAll(".square");
    var pickedColor = colors[randomNum(colors.length)];
    var colorDisplay = document.querySelector("#colorDisplay");
    colorDisplay.textContent = pickedColor.toUpperCase();
    var msgDisplay = document.querySelector("#msgDisplay");
    var resetBtn = document.querySelector("#reset");
    var hardBtn = document.querySelector("#hardBtn");
    var easyBtn = document.querySelector("#easyBtn");
    
    hardBtn.addEventListener("click", function () {
        this.classList.add("selected");
        easyBtn.classList.remove("selected");
        numOfSquares = 6;
        colors = buildRGB(numOfSquares);
        colorsToSquares();
        pickedColor = colors[randomNum(numOfSquares)];
        colorDisplay.textContent = pickedColor;
        for (let i = 0; i < squares.length; i++) {
            const element = squares[i];
            element.style.display = "block";
            
        }
    })
    easyBtn.addEventListener("click", function () {
        this.classList.add("selected");
        hardBtn.classList.remove("selected");
        numOfSquares = 3;
        colors = buildRGB(numOfSquares);
        pickedColor = colors[randomNum(numOfSquares)];
        colorDisplay.textContent = pickedColor;
        for (let i = 0; i < squares.length; i++) {
            if(colors[i]){
                squares[i].style.backgroundColor = colors[i];
            } else {
                squares[i].style.display = "none";
            }
        }
    })

    colorsToSquares();
    resetBtn.addEventListener("click", function () {
        colors = buildRGB(numOfSquares);
        colorsToSquares();
        pickedColor = colors[randomNum(colors.length)];
        colorDisplay.textContent = pickedColor.toUpperCase();
        msgDisplay.textContent = "";
        this.textContent = "New colors"

    });

    for (let i = 0; i < colors.length; i++) {
        squares[i].addEventListener("click", function () {
            if (this.style.backgroundColor === pickedColor) {
                msgDisplay.textContent = "Great!";
                changeColors(pickedColor);
                resetBtn.textContent = "Play again!"
            } else {
                this.style.backgroundColor = "black";
                msgDisplay.textContent = "Wrong! Please, try again!"
            }
        })
    }

    function colorsToSquares() {
        for (let i = 0; i < colors.length; i++) {
            squares[i].style.backgroundColor = colors[i];
        }
    }
    /**
     * Returns random integer between 0 and number passed as parameter (including).
     * @param {number} treshold 
     */
    function randomNum(treshold) {
        var x = Math.floor(Math.random() * treshold);
        // console.log(x);
        return x;

    };
    /**
     * Returns array of <rgb (r, g, b)> strings of size given in parameter.
     * @param {number} size number
     */
    function buildRGB(size) {
        var colorArr = new Array;
        var red, green, blue
        for (let i = 0; i < size; i++) {
            red = randomNum(255);
            green = randomNum(255);
            blue = randomNum(255);
            var colorStr = "rgb(" + red + ", " + green + ", " + blue + ")";
            console.log(colorStr);
            colorArr.push(colorStr);
        }
        return colorArr
    };

    function changeColors(color) {
        for (let i = 0; i < squares.length; i++) {
            const element = squares[i];
            element.style.backgroundColor = color;
        }
    }
}

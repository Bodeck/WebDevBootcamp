document.addEventListener("DOMContentLoaded", main, false);

function main() {
    var numOfSquares = 6;
    var colors = []; // = buildRGB(numOfSquares);
    var pickedColor;// = colors[randomNum(colors.length)];
    var squares = document.querySelectorAll(".square");
    var colorDisplay = document.querySelector("#colorDisplay");
    var msgDisplay = document.querySelector("#msgDisplay");
    var resetBtn = document.querySelector("#reset");
    var modeButtons = document.querySelectorAll(".mode");
    var h1 = document.querySelector("h1");
    init();
    function init() {
        for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener("click", function () {
                if (this.style.backgroundColor === pickedColor) {
                    msgDisplay.textContent = "Great!";
                    changeColors(pickedColor);
                    resetBtn.textContent = "Play again?"
                } else {
                    this.style.backgroundColor = "black";
                    msgDisplay.textContent = "Wrong! Please, try again!"
                }
            })
        }

        for (let i = 0; i < modeButtons.length; i++) {
            const element = modeButtons[i];
            element.addEventListener("click", function () {
                for (let j = 0; j < modeButtons.length; j++) {
                    modeButtons[j].classList.remove("selected");
                }
                this.classList.add("selected");
                if (this.textContent === "Hard") {
                    numOfSquares = 6;
                } else {
                    numOfSquares = 3;
                };
                reset();
            });

        }
        resetBtn.addEventListener("click", reset);
        reset();
    }

    function reset() {
        colors = buildRGB(numOfSquares);
        colorsToSquares();
        pickedColor = colors[randomNum(colors.length)];
        colorDisplay.textContent = pickedColor.toUpperCase();
        msgDisplay.textContent = "";
        resetBtn.textContent = "New colors";
        h1.style.backgroundColor = "steelblue";
    }

    function colorsToSquares() {
        for (let i = 0; i < squares.length; i++) {
            if (colors[i]) {
                squares[i].style.display = "block";
                squares[i].style.backgroundColor = colors[i];
            } else {
                squares[i].style.display = "none";
            }

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
        };
        h1.style.backgroundColor = color;
    }
}

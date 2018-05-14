var btn = document.querySelector("#colorchanger");
var body = document.body;
btn.addEventListener("click", changeColor);

function changeColor(){
	body.classList.toggle("background");
}
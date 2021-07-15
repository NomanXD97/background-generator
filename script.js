var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var h3 = document.getElementById("css");
var body = document.getElementById("gradient")


function addColor()
{
	body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
	h3.textContent = body.style.background;
}

color1.addEventListener("input", addColor)
color2.addEventListener("input", addColor)


// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);
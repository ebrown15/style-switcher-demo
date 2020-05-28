// stylesheet switcher

var stylesheet = document.querySelector("head link[rel=stylesheet]");
var form = document.querySelector("input[type=checkbox]");


function switcher(state) {
	if (state.checked) {
		// if checked, show b&w version
		stylesheet.setAttribute("href", "css/bw.css");
	} else {
		// otherwise, show color version
		stylesheet.setAttribute("href", "css/style.css");
	}
}


// Mouse click

form.addEventListener("click", function(e) {
  switcher(e.target);
}, false);


// Keyboard access:
//   Tab -> highlight checkbox
//   Space -> toggle checkbox

form.addEventListener("keydown", function(e) {
	if(e.keyCode == 32) {
		switcher(e.target);
	}
}, false);

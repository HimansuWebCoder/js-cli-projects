// Let's make a color changer cli app

function randomColor(x) {
	const color = Math.floor(Math.random() * x + 1);
	return color;
}

setInterval(() => {
	document.body.style.backgroundColor = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`;
}, 1000)


// toggle mode project
// Let's create a Night & Day mode

let isMode = false;
let dayMode = "it's sunny day mom";
let nightMode = "it's night mom";

// Using raw method
// if (isMode) {
// 	console.log(`${dayMode}`);
// } else {
// 	console.log(`${nightMode}`);
// }

// isMode = !isMode;

// if (isMode) {
// 	console.log(`${dayMode}`);
// } else {
// 	console.log(`${nightMode}`);
// }

// Using Function

function toggleMode() {
	if (isMode) {
		console.log(`${dayMode}`);
	} else {
		console.log(`${nightMode}`);
	}
	isMode = !isMode;
}

toggleMode();
toggleMode();
toggleMode();
toggleMode();

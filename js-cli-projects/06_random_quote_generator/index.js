// Let's create a quote generator

let quoteFactory = [
	"great", "hello", "greet", "what", "whom", "fantastic", "amazing", "wow"
]

function randomQuoteGenerator() {
	let index = Math.floor(Math.random() * quoteFactory.length + 1);
	console.log(quoteFactory[index]);
}

randomQuoteGenerator();
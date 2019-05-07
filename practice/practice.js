// What do you think this first line does? 
document.addEventListener('DOMContentLoaded', function() {
	// your code goes below
	console.log("the page has loaded!");
	var givenNumber = prompt("Give me a number");
	console.log(givenNumber);
	console.log("==", givenNumber==5);
	console.log("===", givenNumber===5);
	console.log("===string", givenNumber==="5");

})
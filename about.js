console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Submitted successfully!");
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let cat = document.querySelector("#cat");

function compliment(evt) {
	evt.preventDefault();
	
	alert("You don't suck!");
}

cat.addEventListener("mouseover", compliment);


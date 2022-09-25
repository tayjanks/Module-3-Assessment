var restArray = ["Lucky Chen", "Lucky's Iron Door Roadhouse", "Thai Delight Cafe"];
const random = Math.floor(Math.random() * restArray.length);
console.log(random, restArray[random]);

function randomRec(evt) {
	evt.preventDefault();
	alert(random, restArray[random]);
}

let restBtn = document.querySelector('#recommendation');

restBtn.addEventListener('click', randomRec);
let form = document.querySelector('form');
let ul = document.querySelector('ul');
let button = document.querySelector('button');
let input = document.getElementById('item');

let itemsArray = localStorage.getItem('items') 
	? JSON.parse(localStorage.getItem('items'))
	: [];

	
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
	let li = document.createElement('li');
	li.textContent = text;
	ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
	e.preventDefault();
	liMaker(input.value);
	itemsArray.push(input.value);
	localStorage.setItem('items', JSON.stringify(itemsArray));
	input.value = "";

});

data.forEach( item => {
	liMaker(item);
})

button.addEventListener('click', function () {
	localStorage.clear();
	while (ul.firstChild) {
		ul.removeChild(ul.firstChild);
	}
})
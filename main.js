let box = document.querySelector('.box');
let search = document.querySelector('.search');

function render(data = []) {
	box.innerHTML = data
		.map(
			el => `
		<div class='card-wrapper'>
			<img src="${el.flags.svg}" alt='${el.flags.alt}'/>
			<div class='card-text-wrapper'>
				<h3 class='name'>${el.name.common}</h3>
				<div class='card-desc'></div>
				<span class='card-desc-wrapper'><p class='card-desc-main'>Population: </p><p class='card-desc-secondary'>${el.population}</p></span>
				<span class='card-desc-wrapper'><p class='card-desc-main'>Region: </p><p class='card-desc-secondary'>${el.region}</p></span>
				<span class='card-desc-wrapper'><p class='card-desc-main'>Capital: </p><p class='card-desc-secondary'>${el.capital}</p></span>
			</div>
		</div>
	`
		)
		.join('');
}

let region = [];

function getData() {
	fetch('https://restcountries.com/v3.1/all')
		.then(res => res.json())
		.then(data => render(data));
}

getData();

function getSearch(name) {
	fetch(`https://restcountries.com/v3.1/name/${name}`)
		.then(res => res.json())
		.then(data => render(data))
		.catch(err => console.log(err));
}

search.addEventListener('input', e => {
	if (e.target.value !== '') {
		getSearch(e.target.value);
	}
});

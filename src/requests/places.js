/** @format */
import config from '../config/secrets';

function getPlaces() {
	return fetch(config.url + "/places").then(data => {
		return data.json();
	}).catch(console.log);
}

function getPlace(slug) {
	return fetch(config.url + "/places/" + slug).then(data => {
		return data.json();
	}).catch(console.log);
}

function createPlace(data, jwt){

	let formData = new FormData();

	for(let field in data){
		formData.append(field, data[field])
	}

	return fetch(config.url + "/places", {
		method: 'POST',
		body: formData,
		headers: {
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + jwt 
		}
	}).then(dataResponse => {
		return dataResponse.json();
	})
}

export { getPlaces, getPlace, createPlace };

export default {
	places: [
		{
			id: 1,
			imageUrl: "/images/1.jpg",
			title: "Wordwide1",
			description:
				"Starbucks Corporation is an American coffee company and coffeehouse chain.",
			address: "Ave. Principal con calle #13",
		},
		{
			id: 2,
			imageUrl: "/images/2.jpg",
			title: "Wordwide2",
			description:
				"Starbucks Corporation is an American coffee company and coffeehouse chain.",
			address: "Ave. Principal con calle #13",
		},
		{
			id: 3,
			imageUrl: "/images/3.jpg",
			title: "Wordwide3",
			description:
				"Starbucks Corporation is an American coffee company and coffeehouse chain.",
			address: "Ave. Principal con calle #13",
		},
	],
};

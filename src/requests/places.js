/** @format */

function getPlaces() {
	return fetch("http://localhost:8080/places").then(data => {
		return data.json();
	}).catch(console.log);
}

function getPlace(slug) {
	return fetch("http://localhost:8080/places/" + slug).then(data => {
		return data.json();
	}).catch(console.log);
}

export { getPlaces, getPlace };

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

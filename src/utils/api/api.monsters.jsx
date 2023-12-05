export const apiRoot = "https://www.dnd5eapi.co/api";

export const getMonsters = () => {
	return fetch(`${apiRoot}/monsters`)
		.then((data) => data.json())
		.then(({ results: fetchedMonsters }) => {
			return fetchedMonsters;
		});
};

export const getMonsterByIndex = (index) => {
	return fetch(`${apiRoot}/monsters/${index}`)
		.then((data) => data.json())
		.then((fetchedDetails) => {
			return fetchedDetails;
			// return {
			// 	size: fetchedDetails.size,
			// 	type: fetchedDetails.type,
			// 	alignment: fetchedDetails.alignment,
			// 	image: fetchedDetails.image,
			// };
		});
};

export const getMonsterBySearch = (index) => {
	const formattedIndex = index.toLowerCase().replaceAll(" ", "-");

	console.log(`${apiRoot}/monsters/${formattedIndex}`);

	return fetch(`${apiRoot}/monsters/${formattedIndex}`)
		.then((data, err) => data.json())
		.then((fetchedDetails) => {
			if (fetchedDetails.error) return Promise.reject({ status: 404 });

			return {
				index: fetchedDetails.index,
				name: fetchedDetails.name,
				url: fetchedDetails.url,
			};
		});
};

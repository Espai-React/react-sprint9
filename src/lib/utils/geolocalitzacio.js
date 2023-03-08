export const posicio = () => {
	let options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0,
	};
	async function exit(position) {		
		await position;
		result = position;
		return position;
	}
	let result = exit();

	function error(error) {
		console.warn("ERROR(" + error.code + "): " + error.message);
	}

	navigator.geolocation.getCurrentPosition(exit, error, options);
	console.log(result);
};

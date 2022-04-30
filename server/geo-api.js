const axios = require('axios');

const apikey = 'BzrTJlFrz7PZeRXXucHAVeeSaJwyGEgR';
const uri = location => `http://www.mapquestapi.com/geocoding/v1/address?key=${apikey}&location=${location}`;

const sendQuery = async uri => {
	try {
		return await axios.get(uri);
	} catch (e) {
		throw e;
	}
};

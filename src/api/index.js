import axios from 'axios';
import { v4 } from 'uuid';
import { isNil } from 'lodash-es';

const API_URL = 'http://localhost:3003/api';

export const sendMethod = (method, params, token) => (
	axios.post(API_URL, {
		jsonrpc: '2.0',
		method,
		params,
		id: v4(),
	}, {
		headers: {
			Authorization: token,
		},
	})
		.then(({ data }) => data)
		.then(({ error, result }) => isNil(error) ? result : Promise.reject(error))
);
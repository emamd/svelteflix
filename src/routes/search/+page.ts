import * as api from '$lib/api';
import type { MovieList } from '$lib/types.js';

export async function load({ url }) {
	const query = url.searchParams.get('query');

	// if no query's been provided (user going straight to the search page)
	// then return an empty array along with the query
	if (!query) {
		return {
			query,
			movies: []
		};
	}

	// Otherwise execute query and return reults.
	const data = (await api.get(fetch, 'search/movie', { query })) as MovieList;

	return {
		query,
		movies: data.results
	};
}
